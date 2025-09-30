const { exec } = require('child_process');
const path = require('path');
const readline = require('readline');
const fs = require('fs');

const buildOrder = [
  // // Level 1: Base infrastructure
  ['./packages/core/base'],
  
  // // Level 2: Packages that only depend on base
  ['./packages/core/react', './packages/wallets/miden'],
  
  // // Level 3: UI components (depends on base + react)
  ['./packages/ui'],
  
  // Level 4: All-in-one wrapper (depends on all others)
  ['./packages/all']
];

const buildCommands = [
  'yarn',
  'yarn clean',
  'yarn',
  'yarn build',
  'yarn doc'
];

function runCommand(directory, command) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: path.resolve(directory) }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing ${command} in ${directory}:`, error);
        return reject(error);
      }

      if (stderr) {
        console.error(`Error output from ${command} in ${directory}:`, stderr);
      }

      console.log(`Output from ${command} in ${directory}:`, stdout);
      resolve();
    });
  });
}

function parsePackageJson(directory) {
  const packageJsonPath = path.resolve(directory, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`package.json not found in ${directory}`);
  }
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
}

function getPackageInfo(directory) {
  const packageInfo = parsePackageJson(directory);
  if (!packageInfo.name || !packageInfo.version) {
    throw new Error(`Invalid package.json in ${directory}: missing name or version`);
  }
  return {
    name: packageInfo.name,
    version: packageInfo.version,
  };
}

function checkIfVersionExists(packageName, version) {
  return new Promise((resolve, reject) => {
    exec(`npm view ${packageName}@${version} version`, (error, stdout, stderr) => {
      if (error) {
        // If the command fails, the version doesn't exist
        // Check if it's a network error vs package not found
        if (error.message.includes('ENOTFOUND') || error.message.includes('network')) {
          console.warn(`Network error checking ${packageName}@${version}. Proceeding with publish...`);
          resolve(false);
        } else {
          // Package or version not found - safe to proceed
          resolve(false);
        }
      } else {
        // If the command succeeds and returns the version, it exists
        const publishedVersion = stdout.trim();
        resolve(publishedVersion === version);
      }
    });
  });
}

async function waitIfNecessary(results) {
  const publishedPackages = results.filter(result => result && result.published);
  if (publishedPackages.length > 0) {
    console.log(`Waiting 10 seconds for npm propagation of ${publishedPackages.length} newly published package(s)...`);
    await new Promise(resolve => setTimeout(resolve, 10000)); // 10 second delay between levels
  } else {
    console.log(`No new packages published in this level`);
  }
}

async function getOtp() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      'Please enter your OTP from your authenticator app: ',
      (otp) => {
        rl.close();
        resolve(otp.trim());
      }
    );
  });
}

async function publishPackages() {
  // Check for dry-run flag
  const isDryRun = process.argv.includes('--dry-run');
  console.log(isDryRun ? 'DRY RUN MODE - No packages will be actually published' : '🚀 LIVE MODE - Packages will be published to npm');
  const otp = isDryRun ? 'dry-run-otp' : await getOtp();

  const packageUpdates = [];

  // Process each level sequentially
  for (let level = 0; level < buildOrder.length; level++) {
    const levelPackages = buildOrder[level];
    console.log(`Processing Level ${level + 1}: ${levelPackages.join(', ')}`);
    
    // Within each level, process packages in parallel
    const levelPromises = levelPackages.map(async (dir) => {
      try {
        console.log(`Processing ${dir}...`);

        // Check if new version to publish exists
        const { name: packageName, version: packageVersion } = getPackageInfo(dir);
        const versionExists = await checkIfVersionExists(packageName, packageVersion);
        if (versionExists) {
          console.log(`${packageName}@${packageVersion} already exists on npm. Skipping build and publish.`);
          packageUpdates.push(`${packageName}: ${packageVersion} unchanged`);
          return { published: false, packageName, packageVersion };
        }

        console.log(`Building ${packageName}@${packageVersion}...`);

        // Run commands sequentially for each package
        for (let cmd of buildCommands) {
          await runCommand(dir, cmd);
        }

        // Handle npm publish separately to include OTP
        if (isDryRun) {
          console.log(`DRY RUN: Would publish ${packageName}@${packageVersion}`);
          await runCommand(dir, `yarn npm publish --dry-run --access=public`);
          console.log(`DRY RUN: Validation successful for ${packageName}@${packageVersion}`);
          packageUpdates.push(`${packageName}: ${packageVersion} -> ${packageVersion} (dry-run)`);
          return { published: true, packageName, packageVersion };
        } else {
          console.log(`Publishing ${packageName}@${packageVersion}...`);
          await runCommand(dir, `yarn npm publish --otp=${otp} --access=public`);
          console.log(`Successfully published ${packageName}@${packageVersion}`);
          packageUpdates.push(`${packageName}: ${packageVersion} -> ${packageVersion}`);
          return { published: true, packageName, packageVersion };
        }
      } catch (error) {
        console.error(`Failed to process ${dir}:`, error.message);
        throw error; // Re-throw to fail the entire level
      }
    });
    
    // Wait for all packages in this level to complete before moving to next level
    const results = await Promise.all(levelPromises);

    // Wait for npm propagation of newly published packages
    if (level !== buildOrder.length - 1) {
      await waitIfNecessary(results);
    }

    console.log(`Level ${level + 1} completed successfully!\n\n`);
  }

  console.log('All packages published successfully!');
  console.log('Summary of updates:');
  packageUpdates.forEach(update => console.log(`- ${update}`));
}

publishPackages().catch((error) => {
  console.error('Error publishing packages:', error);
});
