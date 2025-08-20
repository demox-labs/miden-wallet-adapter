const { exec } = require('child_process');
const path = require('path');
const readline = require('readline');

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

const commands = [
  'yarn',
  'yarn clean',
  'yarn',
  'yarn build',
  'yarn doc',
  // 'npm publish' will be handled separately to include OTP
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
  const otp = await getOtp();

  // Process each level sequentially
  for (let level = 0; level < buildOrder.length; level++) {
    const levelPackages = buildOrder[level];
    console.log(`Processing Level ${level + 1}: ${levelPackages.join(', ')}`);
    
    // Within each level, process packages in parallel
    const levelPromises = levelPackages.map(async (dir) => {
      console.log(`Building ${dir}...`);
      
      // Run commands sequentially for each package
      for (let cmd of commands) {
        await runCommand(dir, cmd);
      }
      
      // Handle npm publish separately to include OTP
      console.log(`Publishing ${dir}...`);
      await runCommand(dir, `npm publish --otp=${otp} --access=public`);
    });
    
    // Wait for all packages in this level to complete before moving to next level
    await Promise.all(levelPromises);
    // set timeout 
    await new Promise(resolve => setTimeout(resolve, 10000)); // 1 second delay between levels
    console.log(`Level ${level + 1} completed successfully!`);
  }

  console.log('All packages published successfully!');
}

publishPackages().catch((error) => {
  console.error('Error publishing packages:', error);
});
