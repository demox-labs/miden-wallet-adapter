[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / Transaction

# Class: Transaction

Defined in: [transaction.ts:114](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/transaction.ts#L114)

## Implements

- [`MidenTransaction`](../interfaces/MidenTransaction.md)

## Constructors

### new Transaction()

> **new Transaction**(`type`, `payload`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:118](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/transaction.ts#L118)

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

Defined in: [transaction.ts:116](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/transaction.ts#L116)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`payload`](../interfaces/MidenTransaction.md#payload)

***

### type

> **type**: [`TransactionType`](../enumerations/TransactionType.md)

Defined in: [transaction.ts:115](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/transaction.ts#L115)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`type`](../interfaces/MidenTransaction.md#type)

## Methods

### createConsumeTransaction()

> `static` **createConsumeTransaction**(`faucetId`, `noteId`, `noteType`, `amount`, `noteBytes`?): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:142](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/transaction.ts#L142)

#### Parameters

##### faucetId

`string`

##### noteId

`string`

##### noteType

[`NoteTypeString`](../type-aliases/NoteTypeString.md)

##### amount

`number`

##### noteBytes?

`Uint8Array`

#### Returns

[`Transaction`](Transaction.md)

***

### createCustomTransaction()

> `static` **createCustomTransaction**(`accountId`, `transactionRequest`, `inputNoteIds`?, `noteBytes`?): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:159](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/transaction.ts#L159)

#### Parameters

##### accountId

`string`

##### transactionRequest

`TransactionRequest`

##### inputNoteIds?

`string`[]

##### noteBytes?

`Uint8Array`[]

#### Returns

[`Transaction`](Transaction.md)

***

### createSendTransaction()

> `static` **createSendTransaction**(`sender`, `recipient`, `faucetId`, `noteType`, `amount`, `recallBlocks`?): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:123](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/transaction.ts#L123)

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
