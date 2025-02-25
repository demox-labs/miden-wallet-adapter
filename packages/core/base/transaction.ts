import { TransactionRequest } from '@demox-labs/miden-sdk';

export type NoteTypeString = 'public' | 'private';

export interface MidenMintTransaction {
  recipientAccountId: string;
  faucetId: string;
  noteType: NoteTypeString;
  amount: number;
}

export class MintTransaction implements MidenMintTransaction {
  recipientAccountId: string;
  faucetId: string;
  noteType: NoteTypeString;
  amount: number;

  constructor(
    recipient: string,
    faucetId: string,
    noteType: NoteTypeString,
    amount: number
  ) {
    this.recipientAccountId = recipient;
    this.faucetId = faucetId;
    this.noteType = noteType;
    this.amount = amount;
  }
}

export interface MidenSendTransaction {
  senderAccountId: string;
  recipientAccountId: string;
  faucetId: string;
  noteType: NoteTypeString;
  amount: number;
  recallBlocks?: number;
}

export class SendTransaction implements MidenSendTransaction {
  senderAccountId: string;
  recipientAccountId: string;
  faucetId: string;
  noteType: NoteTypeString;
  amount: number;
  recallBlocks?: number;

  constructor(
    sender: string,
    recipient: string,
    faucetId: string,
    noteType: NoteTypeString,
    amount: number,
    recallBlocks?: number
  ) {
    this.senderAccountId = sender;
    this.recipientAccountId = recipient;
    this.faucetId = faucetId;
    this.noteType = noteType;
    this.amount = amount;
    this.recallBlocks = recallBlocks;
  }
}

export interface MidenCustomTransaction {
  accountId: string;
  transactionRequest: string;
}

export enum TransactionType {
  Mint = 'mint',
  Send = 'send',
  Custom = 'custom',
}
export type TransactionPayload =
  | MidenMintTransaction
  | MidenSendTransaction
  | MidenCustomTransaction;

export interface MidenTransaction {
  type: TransactionType;
  payload: TransactionPayload;
}

export class Transaction implements MidenTransaction {
  type: TransactionType;
  payload: TransactionPayload;

  constructor(type: TransactionType, payload: TransactionPayload) {
    this.type = type;
    this.payload = payload;
  }

  static createMintTransaction(
    recipient: string,
    faucetId: string,
    noteType: NoteTypeString,
    amount: number
  ) {
    const mintTransaction = new MintTransaction(
      recipient,
      faucetId,
      noteType,
      amount
    );
    return new Transaction(TransactionType.Mint, mintTransaction);
  }

  static createSendTransaction(
    sender: string,
    recipient: string,
    faucetId: string,
    noteType: NoteTypeString,
    amount: number,
    recallBlocks?: number
  ) {
    const sendTransaction = new SendTransaction(
      sender,
      recipient,
      faucetId,
      noteType,
      amount,
      recallBlocks
    );
    return new Transaction(TransactionType.Send, sendTransaction);
  }

  static createCustomTransaction(
    accountId: string,
    transactionRequest: TransactionRequest
  ) {
    const requestBytes = transactionRequest.serialize();
    const base64 = Buffer.from(requestBytes).toString('base64');
    const customTransaction = {
      accountId,
      transactionRequest: base64,
    };
    return new Transaction(TransactionType.Custom, customTransaction);
  }
}
