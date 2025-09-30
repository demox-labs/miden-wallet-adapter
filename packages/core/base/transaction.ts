import { TransactionRequest } from '@demox-labs/miden-sdk';
import { u8ToB64 } from './helpers';

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
    this.noteBytes = noteBytes ? u8ToB64(noteBytes) : undefined;
  }
}

export interface MidenCustomTransaction {
  accountId: string;
  recipientAccountId: string;
  transactionRequest: string;
  inputNoteIds?: string[];
  importNotes?: string[];
}

export class CustomTransaction implements MidenCustomTransaction {
  accountId: string;
  recipientAccountId: string;
  transactionRequest: string;
  inputNoteIds?: string[];
  importNotes?: string[];

  constructor(
    accountId: string,
    recipientAccountId: string,
    transactionRequest: TransactionRequest,
    inputNotesIds?: string[],
    inputNoteBytes?: Uint8Array[]
  ) {
    this.accountId = accountId;
    this.recipientAccountId = recipientAccountId;
    const requestBytes = transactionRequest.serialize();
    const base64 = u8ToB64(requestBytes);
    this.transactionRequest = base64;
    this.inputNoteIds = inputNotesIds;
    this.importNotes = inputNoteBytes?.map((note) => u8ToB64(note));
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
    recipientAccountId: string,
    transactionRequest: TransactionRequest,
    inputNoteIds?: string[],
    noteBytes?: Uint8Array[]
  ) {
    const transactionBytes = new CustomTransaction(
      accountId,
      recipientAccountId,
      transactionRequest,
      inputNoteIds,
      noteBytes
    );
    return new Transaction(TransactionType.Custom, transactionBytes);
  }
}
