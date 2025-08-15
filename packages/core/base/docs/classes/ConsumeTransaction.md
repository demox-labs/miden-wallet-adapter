[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / ConsumeTransaction

# Class: ConsumeTransaction

Defined in: [transaction.ts:47](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L47)

## Implements

- [`MidenConsumeTransaction`](../interfaces/MidenConsumeTransaction.md)

## Constructors

### new ConsumeTransaction()

> **new ConsumeTransaction**(`faucetId`, `noteId`, `noteType`, `amount`, `noteBytes`?): [`ConsumeTransaction`](ConsumeTransaction.md)

Defined in: [transaction.ts:54](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L54)

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

[`ConsumeTransaction`](ConsumeTransaction.md)

## Properties

### amount

> **amount**: `number`

Defined in: [transaction.ts:51](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L51)

#### Implementation of

[`MidenConsumeTransaction`](../interfaces/MidenConsumeTransaction.md).[`amount`](../interfaces/MidenConsumeTransaction.md#amount)

***

### faucetId

> **faucetId**: `string`

Defined in: [transaction.ts:48](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L48)

#### Implementation of

[`MidenConsumeTransaction`](../interfaces/MidenConsumeTransaction.md).[`faucetId`](../interfaces/MidenConsumeTransaction.md#faucetid)

***

### noteBytes?

> `optional` **noteBytes**: `string`

Defined in: [transaction.ts:52](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L52)

#### Implementation of

[`MidenConsumeTransaction`](../interfaces/MidenConsumeTransaction.md).[`noteBytes`](../interfaces/MidenConsumeTransaction.md#notebytes)

***

### noteId

> **noteId**: `string`

Defined in: [transaction.ts:49](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L49)

#### Implementation of

[`MidenConsumeTransaction`](../interfaces/MidenConsumeTransaction.md).[`noteId`](../interfaces/MidenConsumeTransaction.md#noteid)

***

### noteType

> **noteType**: [`NoteTypeString`](../type-aliases/NoteTypeString.md)

Defined in: [transaction.ts:50](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L50)

#### Implementation of

[`MidenConsumeTransaction`](../interfaces/MidenConsumeTransaction.md).[`noteType`](../interfaces/MidenConsumeTransaction.md#notetype)
