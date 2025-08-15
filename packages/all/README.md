# Miden Wallet Adapter

[![npm version](https://badge.fury.io/js/@demox-labs%2Fmiden-wallet-adapter.svg)](https://badge.fury.io/js/@demox-labs%2Fmiden-wallet-adapter)

The **Miden Wallet Adapter** package provides everything you need to integrate the Miden Wallet into your decentralized application (dApp) using React. This package bundles all the core functionality, React integration, UI components, and adapter implementation in a single convenient package.

## Installation

```bash
# npm
npm install @demox-labs/miden-wallet-adapter

# yarn
yarn add @demox-labs/miden-wallet-adapter

# pnpm
pnpm add @demox-labs/miden-wallet-adapter
```

### Peer Dependencies

This package requires React as a peer dependency:

```bash
npm install react react-dom
```

## Quick Start

### 1. Setup Wallet Provider

Wrap your app with the `WalletProvider` and `WalletModalProvider`:

```tsx
import React from 'react';
import {
  WalletProvider,
  WalletModalProvider,
  MidenWalletAdapter,
} from '@demox-labs/miden-wallet-adapter';

const wallets = [
  new MidenWalletAdapter({ appName: 'Your Miden App' }),
];

function App() {
  return (
    <WalletProvider wallets={wallets}>
      <WalletModalProvider>
        <YourAppComponents />
      </WalletModalProvider>
    </WalletProvider>
  );
}
```

### 2. Add Wallet Connection UI

Use the `WalletMultiButton` for a complete wallet connection experience:

```tsx
import { WalletMultiButton } from '@demox-labs/miden-wallet-adapter';

function Header() {
  return (
    <header>
      <h1>My Miden dApp</h1>
      <WalletMultiButton />
    </header>
  );
}
```

### 3. Use Wallet in Components

Access wallet state and functionality with the `useWallet` hook:

```tsx
import { useWallet, SendTransaction } from '@demox-labs/miden-wallet-adapter';

function SendComponent() {
  const { wallet, accountId, connected } = useWallet();

  const handleSend = async () => {
    if (!wallet || !accountId) return;

    const transaction = new SendTransaction(
      accountId,
      'recipient_address_here',
      'faucet_id_here',
      'public', // or 'private'
      BigInt(1000) // amount
    );

    try {
      await wallet.adapter.requestSend(transaction);
      console.log('Transaction sent successfully!');
    } catch (error) {
      console.error('Transaction failed:', error);
    }
  };

  if (!connected) {
    return <p>Please connect your wallet</p>;
  }

  return (
    <div>
      <p>Connected: {accountId}</p>
      <button onClick={handleSend}>Send Transaction</button>
    </div>
  );
}
```

## Advanced Usage

### Custom Transaction

```tsx
import { useWallet, CustomTransaction } from '@demox-labs/miden-wallet-adapter';

function CustomTransactionComponent() {
  const { wallet, accountId } = useWallet();

  const handleCustomTransaction = async () => {
    if (!wallet || !accountId) return;

    const customTransaction = new CustomTransaction(
      accountId,
      transactionRequest // TransactionRequest from Miden Web SDK
    );

    await wallet.adapter.requestTransaction(customTransaction);
  };

  return <button onClick={handleCustomTransaction}>Execute Custom Transaction</button>;
}
```

### Consume Transaction

```tsx
import { useWallet, ConsumeTransaction } from '@demox-labs/miden-wallet-adapter';

function ConsumeComponent() {
  const { wallet, accountId } = useWallet();

  const handleConsume = async () => {
    if (!wallet || !accountId) return;

    const consumeTransaction = new ConsumeTransaction(
      accountId,
      noteId,
      'private' // or 'public'
    );

    await wallet.adapter.requestConsume(consumeTransaction);
  };

  return <button onClick={handleConsume}>Consume Note</button>;
}
```

## UI Components

The package includes several pre-built React components:

- **`WalletMultiButton`** - All-in-one button for connect/disconnect/account display
- **`WalletConnectButton`** - Simple connect button
- **`WalletDisconnectButton`** - Simple disconnect button  
- **`WalletModal`** - Modal for wallet selection
- **`WalletModalButton`** - Button that opens the wallet modal

## API Reference

### Core Types

- `WalletAdapter` - Base wallet adapter interface
- `WalletAdapterNetwork` - Network types (Testnet, Localnet)
- `WalletReadyState` - Wallet readiness states
- `TransactionType` - Transaction type enumeration

### Transaction Classes

- `SendTransaction` - For sending assets
- `ConsumeTransaction` - For consuming notes
- `CustomTransaction` - For custom transaction requests

### Error Classes

- `WalletError` - Base wallet error
- `WalletConnectionError` - Connection-related errors
- `WalletSignTransactionError` - Transaction signing errors
- And many more specific error types

## Modular Usage

If you prefer more granular control, you can install individual packages:

```bash
# Core infrastructure only
npm install @demox-labs/miden-wallet-adapter-base

# React integration
npm install @demox-labs/miden-wallet-adapter-react

# UI components
npm install @demox-labs/miden-wallet-adapter-reactui

# Miden wallet adapter
npm install @demox-labs/miden-wallet-adapter-miden
```

## Development

```bash
# Install dependencies
yarn install

# Build the package
yarn build

# Generate documentation
yarn doc
```

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our GitHub repository.

## License

MIT

## Support

- [GitHub Issues](https://github.com/demox-labs/miden-wallet-adapter/issues)
- [Documentation](https://github.com/demox-labs/miden-wallet-adapter) 