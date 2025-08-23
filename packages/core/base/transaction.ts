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

export interface MidenConsumeTransaction {
  faucetId: string;
  noteId: string;
  noteType: NoteTypeString;
  amount: number;
  noteBytes?: string;
}

export class ConsumeTransaction implements MidenConsumeTransaction {
  faucetId: string;
  noteId: string;
  noteType: NoteTypeString;
  amount: number;
  noteBytes?: string;

  constructor(
    faucetId: string,
    noteId: string,
    noteType: NoteTypeString,
    amount: number,
    noteBytes?: Uint8Array
  ) {
    this.faucetId = faucetId;
    this.noteId = noteId;
    this.noteType = noteType;
    this.amount = amount;
    this.noteBytes = noteBytes ? Buffer.from(noteBytes).toString('base64') : undefined;
  }
}

export interface MidenCustomTransaction {
  accountId: string;
  transactionRequest: string;
  inputNoteIds?: string[];
  importNotes?: string[];
}

export class CustomTransaction implements MidenCustomTransaction {
  accountId: string;
  transactionRequest: string;
  inputNoteIds?: string[];
  importNotes?: string[];

  constructor(
    accountId: string,
    transactionRequest: TransactionRequest,
    inputNotesIds?: string[],
    inputNoteBytes?: Uint8Array[]
  ) {
    this.accountId = accountId;
    const requestBytes = transactionRequest.serialize();
    const base64 = Buffer.from(requestBytes).toString('base64');
    this.transactionRequest = base64;
    this.inputNoteIds = inputNotesIds;
    this.importNotes = inputNoteBytes?.map((note) =>
      Buffer.from(note).toString('base64')
    );
  }
}

export enum TransactionType {
  Send = 'send',
  Consume = 'consume',
  Custom = 'custom',
}
export type TransactionPayload =
  | MidenSendTransaction
  | MidenConsumeTransaction
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

  static createConsumeTransaction(
    faucetId: string,
    noteId: string,
    noteType: NoteTypeString,
    amount: number,
    noteBytes?: Uint8Array
  ) {
    const consumeTransaction = new ConsumeTransaction(
      faucetId,
      noteId,
      noteType,
      amount,
      noteBytes
    );
    return new Transaction(TransactionType.Consume, consumeTransaction);
  }

  static createCustomTransaction(
    accountId: string,
    transactionRequest: TransactionRequest,
    inputNoteIds?: string[],
    noteBytes?: Uint8Array[]
  ) {
    const transactionBytes = new CustomTransaction(
      accountId,
      transactionRequest,
      inputNoteIds,
      noteBytes
    );
    return new Transaction(TransactionType.Custom, transactionBytes);
  }
}
