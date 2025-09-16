# Changelog

## 2025-09-16

### Changes

* Add ability to request assets from Miden Wallet
* [BREAKING] Rename `AllowedPrivateData.Balance` to `AllowedPrivateData.Assets`

### New Versions

* `0.6.0` for all packages

## 2025-09-15

### Changes

* Expose account `publicKey` via `useWallet()` react hook

### New Versions

* `0.5.1` for all packages

## 2025-09-12

### Changes

* Add Ability to Sign a `Word` via the Wallet

### New Versions

* `0.5.0` for all packages

## 2025-09-10

### Changes

* Fix bug with `PrivateDataPermission`

### New Versions

* `0.4.1` for all packages

## 2025-09-09

### Changes

* [BREAKING] Introduce new permission scheme governing access to private accounts
* Bump `@demox-labs/miden-sdk` version `0.10.1 -> 0.11.1`

### New Versions

* `@demox-labs/miden-wallet-adapter`: `0.4.0`

  ---

* `@demox-labs/miden-wallet-adapter-base`: `0.4.0`
* `@demox-labs/miden-wallet-adapter-react`: `0.4.0`
* `@demox-labs/miden-wallet-adapter-reactui`: `0.4.0`
* `@demox-labs/miden-wallet-adapter-miden`: `0.4.0`

## 2025-08-22

### Changes

* Update adapter to use Yarn@4.9.3
* Fix bug in `CustomTransaction` constructor

### New Versions

* `@demox-labs/miden-wallet-adapter`: `0.3.3`

  ---

* `@demox-labs/miden-wallet-adapter-base`: `0.3.1`

## 2025-08-20

### Changes

* POC for fetching notes (only returns a list of note ids for the moment)

### New Versions

* `0.3.0` for all packages

## 2025-08-15

### Changes

* [BREAKING] `publicKey` renamed to `accountId` to better reflect internal logic

### New Versions

* `@demox-labs/miden-wallet-adapter`: `0.2.1`

  ---

* `@demox-labs/miden-wallet-adapter-base`: `0.2.0`
* `@demox-labs/miden-wallet-adapter-react`: `0.2.0`
* `@demox-labs/miden-wallet-adapter-reactui`: `0.2.0`
* `@demox-labs/miden-wallet-adapter-miden`: `0.2.0`

## 2025-08-12

### Changes

* Bumped React to 19.1.1

### New Versions

* `@demox-labs/miden-wallet-adapter`: `0.1.1`

  ---

* `@demox-labs/miden-wallet-adapter-react`: `0.1.2`
* `@demox-labs/miden-wallet-adapter-reactui`: `0.1.6`