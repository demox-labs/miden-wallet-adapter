import {
  AllowedPrivateData,
  BaseMessageSignerWalletAdapter,
  EventEmitter,
  scopePollingDetectionStrategy,
  SignKind,
  WalletConnectionError,
  WalletDisconnectionError,
  WalletName,
  WalletNotConnectedError,
  WalletNotReadyError,
  WalletReadyState,
  PrivateDataPermission,
  WalletAdapterNetwork,
  MidenSendTransaction,
  MidenTransaction,
  MidenConsumeTransaction,
  WalletTransactionError,
  Asset,
  InputNoteDetails,
} from '@demox-labs/miden-wallet-adapter-base';

export interface MidenWalletEvents {
  connect(...args: unknown[]): unknown;
  disconnect(...args: unknown[]): unknown;
  accountChange(...args: unknown[]): unknown;
}

export interface MidenWallet extends EventEmitter<MidenWalletEvents> {
  accountId?: string;
  publicKey?: Uint8Array;
  requestSend(
    transaction: MidenSendTransaction
  ): Promise<{ transactionId?: string }>;
  requestConsume(
    transaction: MidenConsumeTransaction
  ): Promise<{ transactionId?: string }>;
  requestTransaction(
    transaction: MidenTransaction
  ): Promise<{ transactionId?: string }>;
  requestAssets(): Promise<{ assets: Asset[] }>;
  requestPrivateNotes(): Promise<{ 
    privateNotes: InputNoteDetails[]
  }>;
  signBytes(
    message: Uint8Array,
    kind: SignKind
  ): Promise<{ signature: Uint8Array }>;
  importPrivateNote(note: Uint8Array): Promise<{ noteId: string }>;
  connect(
    privateDataPermission: PrivateDataPermission,
    network: WalletAdapterNetwork,
    allowedPrivateData?: AllowedPrivateData,
  ): Promise<void>;
  disconnect(): Promise<void>;
}

export interface MidenWindow extends Window {
  midenWallet?: MidenWallet;
  miden?: MidenWallet;
}

declare const window: MidenWindow;

export interface MidenWalletAdapterConfig {
  appName?: string;
}

export const MidenWalletName =
  'Miden Wallet' as WalletName<'Miden Wallet'>;

export class MidenWalletAdapter extends BaseMessageSignerWalletAdapter {
  name = MidenWalletName;
  url = 'https://miden.fi/';
  icon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADqCAYAAACslNlOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAzFSURBVHgB7d1ddhNHGsbxpySRMxeZGc0KIlaAWUHEbQJBrAAFJ+fkDlgB9gps7nIOHxErwAyQWysrsFjBKDvwSTI3IKnyVls2tvwhyVa3VF3/3zm2bMs2uN1PvW9Vt7slAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgApwQ9avn6/z+qMZTWKhU1vNNX8qrbUw1/8Cjn1Djra+35/vj57NG2YN95/T4aqW/fq/9lTb3tHbevhP3U8o1PQ635oeqL2r72PXr2uJ/q9i19UEMo/xyqaT/o17YThB1l7bydZGGc9m3H7Nm/0/PSb9eq6v284/oqoRDKjx/VrFR1I2xb+9nXxqHMz+H2tW0bAvzPqrplD2/pghqC+dcg22HuWpVr5R7KWR1UiG4I7he2Y8Ua3LB9//ho27Wqr+3dVu6hnF3PtnHPHt+UMbilCGq28wzVttbobiEj+mJ0rRq8sdDurHpos6o50H3bWZo6eInBznj7RjsoHhd1UH+47ZtWoZ5EFM7zhNC+WqWd6sTgF084z5OF9uVb11GkogtqtgMN9NBa2keRh/NsTp3KUE+f/ep6WoIw+IVpgw2A7dJt3/H0w9YMNmOrstEE9ah6xj+6zyqrskVVgeS2rw2IMQV25YOaYEBPsipgP/9mXoF9cMe3Xdi+fkUW3YrXtZ9/8/k719UKW9mgJh/QSQsObLZ9nX5JOKAnrXiFXbmgjo97btkO1BZOsV9Yr1bTvcvuUAyAU6xoYFcqqOvf+YcW0I1SLhIt2pw71HgV94mt4j4Sptm3wWz75Tu3qRWxEkHNVhqlLds4a8LsZmyHx/PQLQbAOdn2tcHw1ipU16UH1XaiLUb5Kzqnumbn3A5sHkqbeyU2GG4su7ouLahhJxoM9JoquiAT1XW8WPSaKrogS66uSwkqc9H8hNHffqt1upRc7Htvg+F7t62CFRpUFjRQBs5p+/lb91gFKiyotLoolYJb4UKC+mPLr42G2XypIaAsCgxrRTkLixoW0l1CitKxfdpW1ffW7/iWcpZrUG3R6L61urssGqHE6rZ/vw77unKUW1Czld2ROgJSYPv6g9v+iXKSS1Cz//BIhS9hA8tkCz4beYV14YtJ40pKSJEsO9b6eNHHWhca1KxPp90FQq/afvFf90oLsrCgZodgbAVMADKVkW4u6pI6C5mjhpMZskMwAI6MKtoN2dACXDmo46uicwgGOK0estFu+Stn48pBDacFcjIDcA7LRjVk5IquFNSwFM25u8BUzR/u+C1dwaUXk7KrBvjsj5IBzMLp3ou3bkeXcKmgHpuXNgRgVvvXarp5mZP4L9X6Zpf3IKTAvOrjS+PMbe6gZmcecQ0e4LKaD771c184Ya7Wd9zy7nEoBriSuVvguSrqpyGXnAQWYO4WeOaghlVeC2nufyALJKI5zx+cz9T6jm8zsccCErBATv1hVTc7M9wdfaaKGu5HSkiBBbNM1QazXZFzakUdX239fwKQh/1hTdenVdWpFdUWkHK7vAQA1WszZOzCiko1BYphh2uuX3S45sKKSjUFijEta+dWVKopUKgL56rnVlSqKVCo+kUrwBe1vk0BKIyXHp53NYgzgzo+C6khAEWq1z6pfdYTZwa14vVQAArnne6e9fFTQQ2X/eTyKsDSNMON1SY/eCqooyHVFFgmK5SnTtY/q/VtCsAynboz3ImgZiWXRSRg2eqT7e+JoNpENtd7PAKYzWT7O9n6NgVgFZwomkdBDau9tL3Ayqj/+I0/OvpyFFQ/pJoCq8Smos3Dtz8H1Z99oBXAchw/+eHzHNVxkgOwYk62vuP5KZcBBVbL0Tw1CyrzU2A1Hc5Ta9k70g3hgFffpgFv7KV7raqj27oPbXTzA9VHNkWo2HzecyjrUpzUtW34xh77k9t3NLSjDt62a5ibcQQi4ysH2cyC6rzCifhJCzuQPWw+f++6Uz41PL/dbvlGdagN26E4SWQap33bx54OatqecrW9ENxwW8JHYTpmwX2U+vYN2cwew6v12z7dnDr1bWN8//zd1ICeKQvswe0JmsIpYQC0gH7fucStBoNwKp21fynfPXD/xTv3H5eNXAPtKUHjnejeLFcqn8Z2qA0b7bh8zTEudCjv3IauaNy9bKV6S5VwhUKXjVjSrlLj9erFe9fWAhHWzxYV0uPWv/UdpXg+utO9SpLHT63dXXRIg/GO+VSJyyOkwfBadvGvnhLjRmpUkjt+agsbw6puKSc2n0hyZzpig2AeIQ3CFGVoU5XwO1RCbI7eqIRXSoiNTpuXXdiY+d+QHitReQ6CQfjdhRVkpcTp36GifqVUhNH+vdtWzsYryF2lxqmT9yAYhMM8KVVVG5gaFRv9k2l97Qd+pYKEeZoSU9T2DS1wYlW1XvEJzVFtJO6oIFlVTWkudTA37aogRf4ul82mp/WKKokE1XakItqyCW+Ujq4KlP0uw+meiUhn1XekDyqYS2j11y1h+9rem8b2DXNUpcIVP/p6pTPi+8oSflav35WIZIJq1a3w+aIteKS0Mln89lU62zedigpEjKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhCBmoBIDWra/ofUUQIIKqLV2XH79rCvBND6AhEgqEAECCoQAYIKRICgAhEgqEAECCoQAYIKRICgAhEgqEAECCoQAYIKRICgAnP4qeUbj1q+roLx1zPAhBDGj0O1nHRDXmveq+6cGuG5TwN7scf1215y2rfn+/Zu3z73gz12v6ypt33wVz0LRVAB88Nt37Tg3bX4tS2MdXfsOefO+SILsL1eCy/2dS17fPLnIAtx1zu9+ldVO4sKLUFF0h7c8W3ndd+C1rTgLUrTvmfTQvvL+h3fuVbV5s87rq8rIKhIkgUoVMAtC2dDefJZhW5fNbAsJiEpYf5premuBeh17iE97iCwew++9Y90CQQVyVj/zj/8NNSeQpu7HGFRaisMFGHAmOcLCSqSYHPRLY20PV4AWramDRi7P37j12b9AoKKUgvHPG1Fd88Wdy7VcubG2u5RRXtW5e/P8ukEFaUVQvrXQLv+4BDKahqpM0tYCSpKKYqQHpohrAQVpfTHUE+iCOkhmz9fNGclqCidB7f9k5Wbk05XH1X1un3OecQEFaUSDns4aUMxsgWm6sCO756BoKJUwmEPxa0ZTmuc/CBBRWmElrfQs41yYm371mQLTFBRClnL69RWOdRrg5NzbIKKUrCWtxTV9JCtWD88XlUJKqI3Pm+2qXI5UVUJKqL3cZj9LWlDJROq6uHbBBXRq/jPO3TJ1LMrT4igInKh7Y3qDKQ5eafs1EKCiqhlbW+Z+exaTAQVcXPSXZVbPZwDTFARu9K2vYes/W0SVEQrO85YwtXeSRbUBkFFtOw4Y+mracYTVETMKs0qXP8ofxXdIKiIli0kNZQCrzpBRbxW44qCRSCoQAwIKhABgop4hdsepmGfoCJao2EaQbVFsz5BRbSqX6inNFBREa9Pyu72XXpe+kBQEa1OuJu3L39YvVOPoCJuFf2mkqsOCSoiZwst5Z6nOvWf/eoIKuI2qKqjcuuGVwQVUcvmqeOduYyc16vwSFARPef0RmVkbe/zd64b3iSoiF7W/pbwLCU7LLN5+DZBRfRC+2st4lOViVXTUfVzS09QUQqDmrbLVFXD3NQGoP7h+wQVpRCq6vFWMWoHc9ON4x8iqCiNl2/dtkqwAnzWgENQUSqVmh5H3QI7dWzA6Ux+mKCiVJ7tuF60LbC1vMOqDTRnIKgonXELHNcqsHUBFtJb4xM4TiGoKKUX71y4t2hXkRiHtH/e8wQVpTWs6Z4iOGm/4vS9hfTC/ydBRWmFNtLCekvj82VXjrW7Trr17IzFo0kEFaUWwvrivWu7VVtgOlg4unl4Lu80BBVJCCcQeGsxQ0C0bE47IaQXzUknEVQkIxyfDIs2FpTltMLW6obB4sVbd++81d3zEFQkJVQxC0pohW8VVl0P5qKbNkhcfznDfPQsNQEJGs8Nr6/f8S3n9dBLTS1aCKjX00FV2/NW0EkEFUmz6rpjDzvtlm9UhmpVvO77q9zF3GXX4N3xttJsAe1dNaCHCCqgg5bYHsIZTdshtNWh1qwarjmnGxa6hg93jnPHbvMYziceWcV02UtvKH2oVtV9NuV4KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs1d/ArZRIBz8JggAAAABJRU5ErkJggg=='
  readonly supportedTransactionVersions = null;

  private _connecting: boolean;
  private _wallet: MidenWallet | null;
  private _accountId: string | null;
  private _publicKey: Uint8Array | null;
  private _privateDataPermission: string;
  private _readyState: WalletReadyState =
    typeof window === 'undefined' || typeof document === 'undefined'
      ? WalletReadyState.Unsupported
      : WalletReadyState.NotDetected;

  constructor({ appName = 'sample' }: MidenWalletAdapterConfig = {}) {
    super();
    this._connecting = false;
    this._wallet = null;
    this._accountId = null;
    this._publicKey = null;
    this._privateDataPermission = PrivateDataPermission.UponRequest;

    if (this._readyState !== WalletReadyState.Unsupported) {
      scopePollingDetectionStrategy(() => {
        if (window?.midenWallet || window?.miden) {
          this._readyState = WalletReadyState.Installed;
          this.emit('readyStateChange', this._readyState);
          return true;
        }
        return false;
      });
    }
  }

  get accountId() {
    return this._accountId;
  }

  get publicKey() {
    return this._publicKey;
  }

  get privateDataPermission() {
    return this._privateDataPermission;
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
      if (!wallet || !this.accountId) throw new WalletNotConnectedError();
      try {
        const result = await wallet.requestSend(transaction);
        return result.transactionId!;
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
      if (!wallet || !this.accountId) throw new WalletNotConnectedError();
      try {
        const result = await wallet.requestConsume(transaction);
        return result.transactionId!;
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
      if (!wallet || !this.accountId) throw new WalletNotConnectedError();
      try {
        const result = await wallet.requestTransaction(transaction);
        return result.transactionId!;
      } catch (error: any) {
        throw new WalletTransactionError(error?.message, error);
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async requestAssets(): Promise<Asset[]> {
    try {
      const wallet = this._wallet;
      if (!wallet || !this.accountId) throw new WalletNotConnectedError();
      try {
        const result = await wallet.requestAssets();
        return result.assets;
      } catch (error: any) {
        throw new WalletTransactionError(error?.message, error);
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async requestPrivateNotes(): Promise<InputNoteDetails[]> {
    try {
      const wallet = this._wallet;
      if (!wallet || !this.accountId) throw new WalletNotConnectedError();
      try {
        const result = await wallet.requestPrivateNotes();
        return result.privateNotes;
      } catch (error: any) {
        throw new WalletTransactionError(error?.message, error);
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async signBytes(message: Uint8Array, kind: SignKind): Promise<Uint8Array> {
    try {
      const wallet = this._wallet;
      if (!wallet || !this.accountId) throw new WalletNotConnectedError();
      try {
        const result = await wallet.signBytes(message, kind);
        return result.signature;
      } catch (error: any) {
        throw new WalletTransactionError(error?.message, error);
      }
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async importPrivateNote(note: Uint8Array): Promise<string> {
    try {
      const wallet = this._wallet;
      if (!wallet || !this.accountId) throw new WalletNotConnectedError();
      const result = await wallet.importPrivateNote(note);
      return result.noteId;
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async connect(
    privateDataPermission: PrivateDataPermission,
    network: WalletAdapterNetwork,
    allowedPrivateData?: AllowedPrivateData,
  ): Promise<void> {
    try {
      if (this.connected || this.connecting) return;
      if (this._readyState !== WalletReadyState.Installed)
        throw new WalletNotReadyError();

      this._connecting = true;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const wallet = window.midenWallet! || window.miden!;

      try {
        await wallet.connect(privateDataPermission, network, allowedPrivateData);
        if (!wallet?.accountId) {
          throw new WalletConnectionError();
        }
        this._accountId = wallet.accountId!;
        this._publicKey = wallet.publicKey!;
      } catch (error: any) {
        throw new WalletConnectionError(error?.message, error);
      }

      this._wallet = wallet;
      this._privateDataPermission = privateDataPermission;

      this.emit('connect', this._accountId);
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
      this._accountId = null;
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
