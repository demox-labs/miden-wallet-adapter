[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / Transaction

# Class: Transaction

Defined in: [transaction.ts:85](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L85)

## Implements

- [`MidenTransaction`](../interfaces/MidenTransaction.md)

## Constructors

### new Transaction()

> **new Transaction**(`type`, `payload`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:89](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L89)

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

Defined in: [transaction.ts:87](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L87)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`payload`](../interfaces/MidenTransaction.md#payload)

***

### type

> **type**: [`TransactionType`](../enumerations/TransactionType.md)

Defined in: [transaction.ts:86](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L86)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`type`](../interfaces/MidenTransaction.md#type)

## Methods

### createCustomTransaction()

> `static` **createCustomTransaction**(`accountId`, `transactionRequest`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:128](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L128)

#### Parameters

##### accountId

`string`

##### transactionRequest

`TransactionRequest`

#### Returns

[`Transaction`](Transaction.md)

***

### createMintTransaction()

> `static` **createMintTransaction**(`recipient`, `faucetId`, `noteType`, `amount`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:94](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L94)

#### Parameters

##### recipient

`string`

##### faucetId

`string`

##### noteType

[`NoteTypeString`](../type-aliases/NoteTypeString.md)

##### amount

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### createSendTransaction()

> `static` **createSendTransaction**(`sender`, `recipient`, `faucetId`, `noteType`, `amount`, `recallBlocks`?): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:109](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L109)

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
