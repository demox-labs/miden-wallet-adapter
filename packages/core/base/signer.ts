import type { WalletAdapter, WalletAdapterProps } from './adapter';
import { BaseWalletAdapter } from './adapter';
import {
  MidenConsumeTransaction,
  MidenSendTransaction,
  MidenTransaction,
} from './transaction';
import { Asset, InputNoteDetails } from './types';

export type Adapter =
  | WalletAdapter
  | SignerWalletAdapter
  | MessageSignerWalletAdapter;

export interface SignerWalletAdapterProps<Name extends string = string>
  extends WalletAdapterProps<Name> {}

export type SignerWalletAdapter<Name extends string = string> =
  WalletAdapter<Name> & SignerWalletAdapterProps<Name>;

export abstract class BaseSignerWalletAdapter<Name extends string = string>
  extends BaseWalletAdapter<Name>
  implements SignerWalletAdapter<Name> {}

export interface MessageSignerWalletAdapterProps<Name extends string = string>
  extends WalletAdapterProps<Name> {
  requestTransaction(transaction: MidenTransaction): Promise<string>;
  requestAssets(): Promise<Asset[]>;
  requestPrivateNotes(): Promise<InputNoteDetails[]>;
  signMessage(message: Uint8Array): Promise<Uint8Array>;
}

export type MessageSignerWalletAdapter<Name extends string = string> =
  WalletAdapter<Name> & MessageSignerWalletAdapterProps<Name>;

export abstract class BaseMessageSignerWalletAdapter<
    Name extends string = string
  >
  extends BaseSignerWalletAdapter<Name>
  implements MessageSignerWalletAdapter<Name>
{
  abstract requestSend(transaction: MidenSendTransaction): Promise<string>;
  abstract requestConsume(transaction: MidenConsumeTransaction): Promise<string>;
  abstract requestTransaction(transaction: MidenTransaction): Promise<string>;
  abstract requestAssets(): Promise<Asset[]>;
  abstract requestPrivateNotes(): Promise<InputNoteDetails[]>;
  abstract signMessage(message: Uint8Array): Promise<Uint8Array>;
}
