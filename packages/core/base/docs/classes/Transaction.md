[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / Transaction

# Class: Transaction

## Implements

- [`MidenTransaction`](../interfaces/MidenTransaction.md)

## Constructors

### new Transaction()

> **new Transaction**(`type`, `payload`): [`Transaction`](Transaction.md)

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

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`payload`](../interfaces/MidenTransaction.md#payload)

***

### type

> **type**: [`TransactionType`](../enumerations/TransactionType.md)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`type`](../interfaces/MidenTransaction.md#type)

## Methods

### createConsumeTransaction()

> `static` **createConsumeTransaction**(`faucetId`, `noteId`, `noteType`, `amount`, `noteBytes`?): [`Transaction`](Transaction.md)

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
