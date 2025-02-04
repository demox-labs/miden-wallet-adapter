[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / Transaction

# Class: Transaction

Defined in: [transaction.ts:80](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L80)

## Implements

- [`MidenTransaction`](../interfaces/MidenTransaction.md)

## Constructors

### new Transaction()

> **new Transaction**(`type`, `payload`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:84](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L84)

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

Defined in: [transaction.ts:82](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L82)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`payload`](../interfaces/MidenTransaction.md#payload)

***

### type

> **type**: [`TransactionType`](../enumerations/TransactionType.md)

Defined in: [transaction.ts:81](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L81)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`type`](../interfaces/MidenTransaction.md#type)

## Methods

### createCustomTransaction()

> `static` **createCustomTransaction**(`transactionRequest`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:123](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L123)

#### Parameters

##### transactionRequest

`TransactionRequest`

#### Returns

[`Transaction`](Transaction.md)

***

### createMintTransaction()

> `static` **createMintTransaction**(`recipient`, `faucetId`, `noteType`, `amount`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:89](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L89)

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

Defined in: [transaction.ts:104](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L104)

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
