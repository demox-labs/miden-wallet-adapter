[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../README.md) / CustomTransaction

# Class: CustomTransaction

## Implements

- [`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md)

## Constructors

### Constructor

> **new CustomTransaction**(`accountId`, `recipientAccountId`, `transactionRequest`, `inputNotesIds?`, `inputNoteBytes?`): `CustomTransaction`

#### Parameters

##### accountId

`string`

##### recipientAccountId

`string`

##### transactionRequest

`TransactionRequest`

##### inputNotesIds?

`string`[]

##### inputNoteBytes?

`Uint8Array`\<`ArrayBufferLike`\>[]

#### Returns

`CustomTransaction`

## Properties

### accountId

> **accountId**: `string`

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`accountId`](../interfaces/MidenCustomTransaction.md#accountid)

***

### importNotes?

> `optional` **importNotes**: `string`[]

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`importNotes`](../interfaces/MidenCustomTransaction.md#importnotes)

***

### inputNoteIds?

> `optional` **inputNoteIds**: `string`[]

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`inputNoteIds`](../interfaces/MidenCustomTransaction.md#inputnoteids)

***

### recipientAccountId

> **recipientAccountId**: `string`

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`recipientAccountId`](../interfaces/MidenCustomTransaction.md#recipientaccountid)

***

### transactionRequest

> **transactionRequest**: `string`

#### Implementation of

[`MidenCustomTransaction`](../interfaces/MidenCustomTransaction.md).[`transactionRequest`](../interfaces/MidenCustomTransaction.md#transactionrequest)
