import {
  BaseMessageSignerWalletAdapter,
  EventEmitter,
  scopePollingDetectionStrategy,
  WalletConnectionError,
  WalletDisconnectionError,
  WalletName,
  WalletNotConnectedError,
  WalletNotReadyError,
  WalletReadyState,
  DecryptPermission,
  WalletAdapterNetwork,
  MidenSendTransaction,
  MidenTransaction,
  MidenConsumeTransaction,
  WalletTransactionError,
} from '@demox-labs/miden-wallet-adapter-base';

export interface TridentWalletEvents {
  connect(...args: unknown[]): unknown;
  disconnect(...args: unknown[]): unknown;
  accountChange(...args: unknown[]): unknown;
}

export interface TridentWallet extends EventEmitter<TridentWalletEvents> {
  publicKey?: string;
  requestSend(
    transaction: MidenSendTransaction
  ): Promise<{ transactionId?: string }>;
  requestConsume(
    transaction: MidenConsumeTransaction
  ): Promise<{ transactionId?: string }>;
  requestTransaction(
    transaction: MidenTransaction
  ): Promise<{ transactionId?: string }>;
  connect(
    decryptPermission: DecryptPermission,
    network: WalletAdapterNetwork,
    programs?: string[]
  ): Promise<void>;
  disconnect(): Promise<void>;
}

export interface TridentWindow extends Window {
  tridentWallet?: TridentWallet;
  trident?: TridentWallet;
}

declare const window: TridentWindow;

export interface TridentWalletAdapterConfig {
  appName?: string;
}

export const TridentWalletName =
  'Trident Wallet' as WalletName<'Trident Wallet'>;

export class TridentWalletAdapter extends BaseMessageSignerWalletAdapter {
  name = TridentWalletName;
  url = 'https://leo.app/miden';
  icon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJERjI1N0M3NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJERjI1N0M4NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRGMjU3QzU1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRGMjU3QzY1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZyM59AAACz0lEQVR42uzdT2vTYADH8d+Tpo3oYeph4g4iE6boZV68idKDiHj1spt7BYL4DgTfgKDgTdxZr4JXD4LCRMGLghtUGPgHpbWmaRuTsWOTOpfkyZ5+v+xWlrT5dE+ewJPFrLRjkb08DgEAABAAABAAAFD1+TmvxbFGQ5VxmdBoyMumT3Y6dujixPdlzO4BkqPvNzV/PO+X/7vuL/W6k7ec7PfovILAHYAf3zQIMw9jJsBwqGMLuvcoBSy8tYd6tqaDhya8FA20ekvLF9wBuHtb798oOLD7IShBawV5Y8VehqCcms30j8+d06y3h5PweFzKe4pjCzu1Vf6HZRbENBQAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAmgGArGWUTubX7Q01fD1/qvVXU1b0FVs00KkzungFgO11uy9faDSqdKf9ntrXAbA3BBljbdzjJMxJGAACAAACYDar4zQ0uSwq4zYx46nVAmBaw0g3VrV4uvgtb3X05MHOrB+AzJLv/tllnTtf/Ja/bO4AcA6Y0iAsZbPhH07CBAAABAAABAAABAAABAAAABAAABAAABAAABAAABAAABAAABAAAFippMdnNFt1BKjd2lBj0kWcc4cLfnqTkTobAPzb9/Tx/RJ1AZheebdoA7BfDxOzIAAIAAAIAOeyMwuKIvV/y6t2tmO8Ov4rKDsAi0u6dLXSw5FY97r68BaA7S5fS38qrrOhOzdrd50xQ+eAku5+BYBZEAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAGwrwBculuonp/Fy3/HjYZD37Xcz2I8O/BmpT35nsQ4VhDo5JI7fwRhX58/Tn5pPNbcES2cKGW/m5/ShdleBrCf4xaGevfaoSEo+zFWydH5+V1ft0rZb7OVefSVvzzd4kNerQxQgY3xllkQ01AACAAACAAAyEJ/BRgAJph5IP1XFpwAAAAASUVORK5CYII=';
  readonly supportedTransactionVersions = null;

  private _connecting: boolean;
  private _wallet: TridentWallet | null;
  private _publicKey: string | null;
  private _decryptPermission: string;
  private _readyState: WalletReadyState =
    typeof window === 'undefined' || typeof document === 'undefined'
      ? WalletReadyState.Unsupported
      : WalletReadyState.NotDetected;

  constructor({ appName = 'sample' }: TridentWalletAdapterConfig = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._publicKey = null;
    this._decryptPermission = DecryptPermission.NoDecrypt;

    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        if (window?.tridentWallet || window?.trident) {
          this._readyState = WalletReadyState.Installed;
          this.emit('readyStateChange', this._readyState);
          return true;
        }
        return false;
      });
    }
  }

  get publicKey() {
    return this._publicKey;
  }

  get decryptPermission() {
    return this._decryptPermission;
  }

  get connecting() {
    return this._connecting;
  }

  get readyState() {
    return this._readyState;
  }

  set readyState(readyState) {
    this._readyState = readyState;
  }

  async requestSend(transaction: MidenSendTransaction): Promise<string> {
    try {
      const wallet = this._wallet;
      if (!wallet || !this.publicKey) throw new WalletNotConnectedError();
      try {
        const result = await wallet.requestSend(transaction);
        return result.transactionId;
      } catch (error: any) {
        throw new WalletTransactionError(error?.message, error);
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async requestConsume(
    transaction: MidenConsumeTransaction
  ): Promise<string> {
    try {
      const wallet = this._wallet;
      if (!wallet || !this.publicKey) throw new WalletNotConnectedError();
      try {
        const result = await wallet.requestConsume(transaction);
        return result.transactionId;
      } catch (error: any) {
        throw new WalletTransactionError(error?.message, error);
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async requestTransaction(transaction: MidenTransaction): Promise<string> {
    try {
      const wallet = this._wallet;
      if (!wallet || !this.publicKey) throw new WalletNotConnectedError();
      try {
        const result = await wallet.requestTransaction(transaction);
        return result.transactionId;
      } catch (error: any) {
        throw new WalletTransactionError(error?.message, error);
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async connect(
    decryptPermission: DecryptPermission,
    network: WalletAdapterNetwork,
    programs?: string[]
  ): Promise<void> {
    try {
      if (this.connected || this.connecting) return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();

      this._connecting = true;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const wallet = window.tridentWallet! || window.trident!;

      try {
        await wallet.connect(decryptPermission, network, programs);
        if (!wallet?.publicKey) {
          throw new WalletConnectionError();
        }
        this._publicKey = wallet.publicKey!;
      } catch (error: any) {
        throw new WalletConnectionError(error?.message, error);
      }

      this._wallet = wallet;
      this._decryptPermission = decryptPermission;

      this.emit('connect', this._publicKey);
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }

  async disconnect(): Promise<void> {
    const wallet = this._wallet;
    if (wallet) {
      // wallet.off('disconnect', this._disconnected);

      this._wallet = null;
      this._publicKey = null;

      try {
        await wallet.disconnect();
      } catch (error: any) {
        this.emit('error', new WalletDisconnectionError(error?.message, error));
      }
    }

    this.emit('disconnect');
  }
}
