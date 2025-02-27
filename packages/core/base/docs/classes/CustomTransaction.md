[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / CustomTransaction

# Class: CustomTransaction

Defined in: [transaction.ts:46](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L46)

## Implements

- [`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md)

## Constructors

### new CustomTransaction()

> **new CustomTransaction**(`accountId`, `transactionRequest`, `inputNotesIds`?, `inputNoteBytes`?): [`CustomTransaction`](CustomTransaction.md)

Defined in: [transaction.ts:52](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L52)

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

Defined in: [transaction.ts:47](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L47)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`accountId`](../interfaces/MidenCustomTransaction.md#accountid)

***

### importNotes?

> `optional` **importNotes**: `string`[]

Defined in: [transaction.ts:50](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L50)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`importNotes`](../interfaces/MidenCustomTransaction.md#importnotes)

***

### inputNoteIds?

> `optional` **inputNoteIds**: `string`[]

Defined in: [transaction.ts:49](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L49)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`inputNoteIds`](../interfaces/MidenCustomTransaction.md#inputnoteids)

***

### transactionRequest

> **transactionRequest**: `string`

Defined in: [transaction.ts:48](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L48)

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`transactionRequest`](../interfaces/MidenCustomTransaction.md#transactionrequest)
