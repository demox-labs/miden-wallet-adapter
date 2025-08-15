[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / SendTransaction

# Class: SendTransaction

Defined in: [transaction.ts:14](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L14)

## Implements

- [`MidenSendTransaction`](../interfaces/MidenSendTransaction.md)

## Constructors

### new SendTransaction()

> **new SendTransaction**(`sender`, `recipient`, `faucetId`, `noteType`, `amount`, `recallBlocks`?): [`SendTransaction`](SendTransaction.md)

Defined in: [transaction.ts:22](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L22)

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

[`SendTransaction`](SendTransaction.md)

## Properties

### amount

> **amount**: `number`

Defined in: [transaction.ts:19](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L19)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`amount`](../interfaces/MidenSendTransaction.md#amount)

***

### faucetId

> **faucetId**: `string`

Defined in: [transaction.ts:17](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L17)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`faucetId`](../interfaces/MidenSendTransaction.md#faucetid)

***

### noteType

> **noteType**: [`NoteTypeString`](../type-aliases/NoteTypeString.md)

Defined in: [transaction.ts:18](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L18)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`noteType`](../interfaces/MidenSendTransaction.md#notetype)

***

### recallBlocks?

> `optional` **recallBlocks**: `number`

Defined in: [transaction.ts:20](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L20)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`recallBlocks`](../interfaces/MidenSendTransaction.md#recallblocks)

***

### recipientAccountId

> **recipientAccountId**: `string`

Defined in: [transaction.ts:16](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L16)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`recipientAccountId`](../interfaces/MidenSendTransaction.md#recipientaccountid)

***

### senderAccountId

> **senderAccountId**: `string`

Defined in: [transaction.ts:15](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/transaction.ts#L15)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`senderAccountId`](../interfaces/MidenSendTransaction.md#senderaccountid)
