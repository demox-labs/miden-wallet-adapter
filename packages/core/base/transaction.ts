import { TransactionRequest } from '@demox-labs/miden-sdk';

export type NoteTypeString = 'public' | 'private';

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
  inputNotes?: string[];
}

export class CustomTransaction implements MidenCustomTransaction {
  accountId: string;
  transactionRequest: string;
  inputNotes?: string[];

  constructor(
    accountId: string,
    transactionRequest: TransactionRequest,
    inputNoteBytes?: string[]
  ) {
    this.accountId = accountId;
    const requestBytes = transactionRequest.serialize();
    const base64 = Buffer.from(requestBytes).toString('base64');
    this.transactionRequest = base64;
    this.inputNotes = inputNoteBytes;
  }
}

export enum TransactionType {
  Send = 'send',
  Custom = 'custom',
}
export type TransactionPayload = MidenSendTransaction | MidenCustomTransaction;

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
    transactionRequest: TransactionRequest,
    inputNotes?: string[]
  ) {
    const transactionBytes = new CustomTransaction(
      accountId,
      transactionRequest,
      inputNotes
    );
    return new Transaction(TransactionType.Custom, transactionBytes);
  }
}
