[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / SendTransaction

# Class: SendTransaction

Defined in: [transaction.ts:40](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L40)

## Implements

- [`MidenSendTransaction`](../interfaces/MidenSendTransaction.md)

## Constructors

### new SendTransaction()

> **new SendTransaction**(`sender`, `recipient`, `faucetId`, `noteType`, `amount`, `recallBlocks`?): [`SendTransaction`](SendTransaction.md)

Defined in: [transaction.ts:48](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L48)

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

Defined in: [transaction.ts:45](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L45)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`amount`](../interfaces/MidenSendTransaction.md#amount)

***

### faucetId

> **faucetId**: `string`

Defined in: [transaction.ts:43](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L43)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`faucetId`](../interfaces/MidenSendTransaction.md#faucetid)

***

### noteType

> **noteType**: [`NoteTypeString`](../type-aliases/NoteTypeString.md)

Defined in: [transaction.ts:44](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L44)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`noteType`](../interfaces/MidenSendTransaction.md#notetype)

***

### recallBlocks?

> `optional` **recallBlocks**: `number`

Defined in: [transaction.ts:46](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L46)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`recallBlocks`](../interfaces/MidenSendTransaction.md#recallblocks)

***

### recipientAccountId

> **recipientAccountId**: `string`

Defined in: [transaction.ts:42](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L42)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`recipientAccountId`](../interfaces/MidenSendTransaction.md#recipientaccountid)

***

### senderAccountId

> **senderAccountId**: `string`

Defined in: [transaction.ts:41](https://github.com/demox-labs/miden-wallet-adapter/blob/8b5adc4c88745063c897a11791e0a6bf5e53b32c/packages/core/base/transaction.ts#L41)

#### Implementation of

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md).[`senderAccountId`](../interfaces/MidenSendTransaction.md#senderaccountid)
