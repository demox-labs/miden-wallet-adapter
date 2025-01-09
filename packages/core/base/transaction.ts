import { TransactionResult } from '@demox-labs/miden-sdk/dist/crates/miden_client_web';

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

export interface MidenTransaction {
  transactionResult?: TransactionResult;
  sendTransaction?: MidenSendTransaction;
}

export class Transaction implements MidenTransaction {
  transactionResult?: TransactionResult;
  sendTransaction?: MidenSendTransaction;

  constructor(
    sendTransaction?: MidenSendTransaction,
    transactionResult?: TransactionResult
  ) {
    this.sendTransaction = sendTransaction;
    this.transactionResult = transactionResult;
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
    return new Transaction(sendTransaction);
  }

  static createTransactionResult(transactionResult: TransactionResult) {
    return new Transaction(undefined, transactionResult);
  }
}
