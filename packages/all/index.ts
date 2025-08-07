/**
 * Miden Wallet Adapter - All-in-One Package
 * 
 * This package provides a complete solution for integrating Miden wallets into your dApp.
 * It re-exports everything from the core packages for easy consumption.
 * 
 * For more granular control, you can install individual packages:
 * - @demox-labs/miden-wallet-adapter-base: Core infrastructure
 * - @demox-labs/miden-wallet-adapter-react: React hooks and providers  
 * - @demox-labs/miden-wallet-adapter-reactui: React UI components
 * - @demox-labs/miden-wallet-adapter-miden: Miden wallet implementation
 */

// Export everything from the base package (core infrastructure)
export * from '@demox-labs/miden-wallet-adapter-base';

// Export everything from the React integration package
export * from '@demox-labs/miden-wallet-adapter-react';

// Export everything from the React UI components package
export * from '@demox-labs/miden-wallet-adapter-reactui';

// Export everything from the Miden wallet adapter
export * from '@demox-labs/miden-wallet-adapter-miden'; 