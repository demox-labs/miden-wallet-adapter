[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / Transaction

# Class: Transaction

Defined in: [transaction.ts:74](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L74)

## Implements

- [`MidenTransaction`](../interfaces/MidenTransaction.md)

## Constructors

### new Transaction()

> **new Transaction**(`type`, `payload`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:78](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L78)

#### Parameters

##### type

[`TransactionType`](../enumerations/TransactionType.md)

##### payload

[`TransactionPayload`](../type-aliases/TransactionPayload.md)

#### Returns

[`Transaction`](Transaction.md)

## Properties

### payload

> **payload**: [`TransactionPayload`](../type-aliases/TransactionPayload.md)

Defined in: [transaction.ts:76](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L76)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`payload`](../interfaces/MidenTransaction.md#payload)

***

### type

> **type**: [`TransactionType`](../enumerations/TransactionType.md)

Defined in: [transaction.ts:75](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L75)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`type`](../interfaces/MidenTransaction.md#type)

## Methods

### createCustomTransaction()

> `static` **createCustomTransaction**(`accountId`, `transactionRequest`, `inputNotes`?): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:102](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L102)

#### Parameters

##### accountId

`string`

##### transactionRequest

`TransactionRequest`

##### inputNotes?

`string`[]

#### Returns

[`Transaction`](Transaction.md)

***

### createSendTransaction()

> `static` **createSendTransaction**(`sender`, `recipient`, `faucetId`, `noteType`, `amount`, `recallBlocks`?): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:83](https://github.com/demox-labs/miden-wallet-adapter/blob/a795f9d3e359fa653418e9d00c02ece3d62ee138/packages/core/base/transaction.ts#L83)

#### Parameters

##### sender

`string`

##### recipient

`string`

##### faucetId

`string`

##### noteType

[`NoteTypeString`](../type-aliases/NoteTypeString.md)

##### amount

`number`

##### recallBlocks?

`number`

#### Returns

[`Transaction`](Transaction.md)
