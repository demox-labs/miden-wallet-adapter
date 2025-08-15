[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / WalletReadyState

# Enumeration: WalletReadyState

Defined in: [adapter.ts:54](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L54)

A wallet's readiness describes a series of states that the wallet can be in,
depending on what kind of wallet it is. An installable wallet (eg. a browser
extension like Phantom) might be `Installed` if we've found the Phantom API
in the global scope, or `NotDetected` otherwise. A loadable, zero-install
runtime (eg. Torus Wallet) might simply signal that it's `Loadable`. Use this
metadata to personalize the wallet list for each user (eg. to show their
installed wallets first).

## Enumeration Members

### Installed

> **Installed**: `"Installed"`

Defined in: [adapter.ts:60](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L60)

User-installable wallets can typically be detected by scanning for an API
that they've injected into the global context. If such an API is present,
we consider the wallet to have been installed.

***

### Loadable

> **Loadable**: `"Loadable"`

Defined in: [adapter.ts:66](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L66)

Loadable wallets are always available to you. Since you can load them at
any time, it's meaningless to say that they have been detected.

***

### NotDetected

> **NotDetected**: `"NotDetected"`

Defined in: [adapter.ts:61](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L61)

***

### Unsupported

> **Unsupported**: `"Unsupported"`

Defined in: [adapter.ts:71](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L71)

If a wallet is not supported on a given platform (eg. server-rendering, or
mobile) then it will stay in the `Unsupported` state.
