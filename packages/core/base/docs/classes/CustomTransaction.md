[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / CustomTransaction

# Class: CustomTransaction

Defined in: [transaction.ts:45](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L45)

## Implements

- [`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md)

## Constructors

### new CustomTransaction()

> **new CustomTransaction**(`accountId`, `transactionRequest`, `inputNoteBytes`?): [`CustomTransaction`](CustomTransaction.md)

Defined in: [transaction.ts:50](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L50)

#### Parameters

##### accountId

`string`

##### transactionRequest

`TransactionRequest`

##### inputNoteBytes?

`string`[]

#### Returns

[`CustomTransaction`](CustomTransaction.md)

## Properties

### accountId

> **accountId**: `string`

Defined in: [transaction.ts:46](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L46)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`accountId`](../interfaces/MidenCustomTransaction.md#accountid)

***

### inputNotes?

> `optional` **inputNotes**: `string`[]

Defined in: [transaction.ts:48](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L48)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`inputNotes`](../interfaces/MidenCustomTransaction.md#inputnotes)

***

### transactionRequest

> **transactionRequest**: `string`

Defined in: [transaction.ts:47](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L47)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`transactionRequest`](../interfaces/MidenCustomTransaction.md#transactionrequest)
