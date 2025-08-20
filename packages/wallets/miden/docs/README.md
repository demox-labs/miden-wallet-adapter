**@demox-labs/miden-wallet-adapter-miden**

***

## Overview

The **Miden Wallet Adapter** is a modular TypeScript library that provides wallet integration capabilities for Miden blockchain applications. It's designed to connect Miden-compatible wallets to decentralized applications (dApps) in a standardized way.

## Usage Pattern

1. **Setup**: Wrap your app with `WalletProvider` and specify available wallet adapters
2. **Connection**: Use `WalletMultiButton` to connect or do so programmatically
3. **Interaction**: Use the `useWallet` hook to access wallet state and methods, such as the wallet's accountId
4. **Transactions**: Use [transaction types](https://github.com/demox-labs/miden-wallet-adapter/blob/main/packages/core/base/transaction.ts) to submit a consume or send transaction via the wallet, or a generic transaction using a Miden `TransactionRequest` object

Connecting a wallet
```js
const walletAdapter = new MidenWalletAdapter({ appName: 'Your Miden App', });
<WalletProvider wallets={[walletAdapter]}> // Defines which wallets are supported
    <WalletModalProvider>
        <>
            Your app code...
            <WalletMultiButton /> {/* Launches the WalletModal, prompts the user to connect their wallet */}
        <>
    </WalletModalProvider>
</WalletProvider>
```

Submitting a send transaction
```js
const { wallet, accountId } = useWallet();
const midenTransaction = new SendTransaction(
    accountId,
    toAddress,
    faucetId,
    sharePrivately ? 'private' : 'public',
    amount!
);
await wallet.adapter.requestSend(midenTransaction);
```

Submitting a custom transaction
```js
const { wallet, accountId } = useWallet();
const customTransaction = new CustomTransaction(
    accountId, // AccountId the transaction request will be executed against
    transactionRequest // TransactionRequest object (will need to be generated using the Miden Web SDK)
);
await wallet.adapter.requestTransaction(customTransaction)
```

## Architecture & Structure

### **Main Package**: `@demox-labs/miden-wallet-adapter`

For consumers looking to integrate their React app with the Miden Wallet, the `@demox-labs/miden-wallet-adapter` package contains all necessary components
- **Purpose**: Provides all components necessary to integrate with the Miden Wallet in a React context
- **Key Components**:
  - **Wallet detection and connection**: Detects and handles connections to Miden Wallet
  - **Persistence and state management**: Automatic wallet reconnects across sessions
  - **React Context Providers and UI Components**: Provides useful hooks, context providers, and components to make UI integration simple

For other use cases, including different front-end libraries and other wallets in the Miden ecosystem, this repository also exposes composable and extensible packages that can be used as building blocks:

### 1. **Core Base Package** (`@demox-labs/miden-wallet-adapter-base`)
- **Purpose**: Provides the foundational infrastructure and interfaces
- **Key Components**:
  - **`BaseWalletAdapter`**: Abstract base class that all wallet adapters must extend
  - **`WalletAdapter` interface**: Defines the contract for wallet adapters
  - **Event system**: Uses `EventEmitter3` for wallet state changes (connect, disconnect, error, readyStateChange)
  - **Type definitions**: Network types (`Testnet`, `Localnet`), decrypt permissions, transaction types
  - **Error handling**: Comprehensive error classes for different failure scenarios

### 2. **React Integration Package** (`@demox-labs/miden-wallet-adapter-react`)
- **Purpose**: React-specific hooks and context providers
- **Key Components**:
  - **`WalletProvider`**: React context provider that manages wallet state
  - **`useWallet` hook**: Provides wallet state and methods to React components
  - **Auto-connection**: Handles automatic wallet reconnection on page load
  - **Local storage**: Persists wallet selection across sessions

### 3. **UI Components Package** (`@demox-labs/miden-wallet-adapter-reactui`)
- **Purpose**: Pre-built React UI components for wallet interaction
- **Key Components**:
  - **`WalletModal`**: Modal dialog for wallet selection and connection
  - **`WalletConnectButton`**: Button component for initiating wallet connection
  - **`WalletMultiButton`**: Multi-purpose button that handles connect/disconnect states
  - **`WalletListItem`**: Individual wallet option in the selection modal

## Wallet Adapters

### Miden Wallet Adapter (`@demox-labs/miden-wallet-adapter-miden`)
- **Purpose**: Specific implementation for the Miden Wallet
- **Features**:
  - **Detection**: Automatically detects if Miden Wallet is installed
  - **Connection management**: Handles wallet connection/disconnection
  - **Transaction support**: Supports Miden-specific transaction types:
    - `MidenSendTransaction`
    - `MidenConsumeTransaction`
    - Generic `MidenTransaction`
  - **Permission management**: Handles different decrypt permissions
  - **Error handling**: Comprehensive error handling for wallet operations
