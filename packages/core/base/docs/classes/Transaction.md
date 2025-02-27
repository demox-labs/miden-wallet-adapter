[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / Transaction

# Class: Transaction

Defined in: [transaction.ts:80](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L80)

## Implements

- [`MidenTransaction`](../interfaces/MidenTransaction.md)

## Constructors

### new Transaction()

> **new Transaction**(`type`, `payload`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:84](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L84)

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

Defined in: [transaction.ts:82](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L82)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`payload`](../interfaces/MidenTransaction.md#payload)

***

### type

> **type**: [`TransactionType`](../enumerations/TransactionType.md)

Defined in: [transaction.ts:81](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L81)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`type`](../interfaces/MidenTransaction.md#type)

## Methods

### createCustomTransaction()

> `static` **createCustomTransaction**(`accountId`, `transactionRequest`, `inputNoteIds`?, `noteBytes`?): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:108](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L108)

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

Defined in: [transaction.ts:89](https://github.com/demox-labs/miden-wallet-adapter/blob/22591ca132b14748ff986f82f27cfe8773be90bd/packages/core/base/transaction.ts#L89)

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
