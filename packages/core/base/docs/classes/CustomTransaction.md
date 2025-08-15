[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / CustomTransaction

# Class: CustomTransaction

Defined in: [transaction.ts:76](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L76)

## Implements

- [`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md)

## Constructors

### new CustomTransaction()

> **new CustomTransaction**(`accountId`, `transactionRequest`, `inputNotesIds`?, `inputNoteBytes`?): [`CustomTransaction`](CustomTransaction.md)

Defined in: [transaction.ts:82](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L82)

#### Parameters

##### accountId

`string`

##### transactionRequest

`TransactionRequest`

##### inputNotesIds?

`string`[]

##### inputNoteBytes?

`Uint8Array`[]

#### Returns

[`CustomTransaction`](CustomTransaction.md)

## Properties

### accountId

> **accountId**: `string`

Defined in: [transaction.ts:77](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L77)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`accountId`](../interfaces/MidenCustomTransaction.md#accountid)

***

### importNotes?

> `optional` **importNotes**: `string`[]

Defined in: [transaction.ts:80](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L80)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`importNotes`](../interfaces/MidenCustomTransaction.md#importnotes)

***

### inputNoteIds?

> `optional` **inputNoteIds**: `string`[]

Defined in: [transaction.ts:79](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L79)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`inputNoteIds`](../interfaces/MidenCustomTransaction.md#inputnoteids)

***

### transactionRequest

> **transactionRequest**: `string`

Defined in: [transaction.ts:78](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L78)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`transactionRequest`](../interfaces/MidenCustomTransaction.md#transactionrequest)
