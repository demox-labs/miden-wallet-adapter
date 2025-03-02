import { createContext, useContext } from 'react';
import {
  Adapter,
  MidenTransaction,
  DecryptPermission,
  MessageSignerWalletAdapterProps,
  WalletAdapterNetwork,
  WalletName,
  WalletReadyState,
} from '@demox-labs/miden-wallet-adapter-base';

export interface Wallet {
  adapter: Adapter;
  readyState: WalletReadyState;
}

export interface WalletContextState {
  autoConnect: boolean;
  wallets: Wallet[];
  wallet: Wallet | null;
  publicKey: string | null;
  connecting: boolean;
  connected: boolean;
  disconnecting: boolean;

  select(walletName: WalletName): void;
  connect(
    decryptPermission: DecryptPermission,
    network: WalletAdapterNetwork,
    programs?: string[]
  ): Promise<void>;
  disconnect(): Promise<void>;

  requestTransaction:
    | MessageSignerWalletAdapterProps['requestTransaction']
    | undefined;
}

const EMPTY_ARRAY: never[] = [];

const DEFAULT_CONTEXT = {
  autoConnect: false,
  connecting: false,
  connected: false,
  disconnecting: false,
  select(_name: WalletName) {
    console.error(constructMissingProviderErrorMessage('get', 'select'));
  },
  connect(
    _decryptPermission: DecryptPermission,
    _network: WalletAdapterNetwork,
    _programs?: string[]
  ) {
    return Promise.reject(
      console.error(constructMissingProviderErrorMessage('get', 'connect'))
    );
  },
  disconnect() {
    return Promise.reject(
      console.error(constructMissingProviderErrorMessage('get', 'disconnect'))
    );
  },
  requestTransaction(_transaction: MidenTransaction) {
    return Promise.reject(
      console.error(
        constructMissingProviderErrorMessage('get', 'requestTransaction')
      )
    );
  },
} as WalletContextState;
Object.defineProperty(DEFAULT_CONTEXT, 'wallets', {
  get() {
    console.error(constructMissingProviderErrorMessage('read', 'wallets'));
    return EMPTY_ARRAY;
  },
});
Object.defineProperty(DEFAULT_CONTEXT, 'wallet', {
  get() {
    console.error(constructMissingProviderErrorMessage('read', 'wallet'));
    return null;
  },
});
Object.defineProperty(DEFAULT_CONTEXT, 'publicKey', {
  get() {
    console.error(constructMissingProviderErrorMessage('read', 'publicKey'));
    return null;
  },
});

function constructMissingProviderErrorMessage(
  action: string,
  valueName: string
) {
  return (
    'You have tried to ' +
    ` ${action} "${valueName}"` +
    ' on a WalletContext without providing one.' +
    ' Make sure to render a WalletProvider' +
    ' as an ancestor of the component that uses ' +
    'WalletContext'
  );
}

export const WalletContext = createContext<WalletContextState>(
  DEFAULT_CONTEXT as WalletContextState
);

export function useWallet(): WalletContextState {
  return useContext(WalletContext);
}
