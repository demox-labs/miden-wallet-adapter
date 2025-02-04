[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / MintTransaction

# Class: MintTransaction

Defined in: [transaction.ts:12](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L12)

## Implements

- [`MidenMintTransaction`](../interfaces/MidenMintTransaction.md)

## Constructors

### new MintTransaction()

> **new MintTransaction**(`recipient`, `faucetId`, `noteType`, `amount`): [`MintTransaction`](MintTransaction.md)

Defined in: [transaction.ts:18](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L18)

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

[`MintTransaction`](MintTransaction.md)

## Properties

### amount

> **amount**: `number`

Defined in: [transaction.ts:16](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L16)

#### Implementation of

[`MidenMintTransaction`](../interfaces/MidenMintTransaction.md).[`amount`](../interfaces/MidenMintTransaction.md#amount)

***

### faucetId

> **faucetId**: `string`

Defined in: [transaction.ts:14](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L14)

#### Implementation of

[`MidenMintTransaction`](../interfaces/MidenMintTransaction.md).[`faucetId`](../interfaces/MidenMintTransaction.md#faucetid)

***

### noteType

> **noteType**: [`NoteTypeString`](../type-aliases/NoteTypeString.md)

Defined in: [transaction.ts:15](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L15)

#### Implementation of

[`MidenMintTransaction`](../interfaces/MidenMintTransaction.md).[`noteType`](../interfaces/MidenMintTransaction.md#notetype)

***

### recipientAccountId

> **recipientAccountId**: `string`

Defined in: [transaction.ts:13](https://github.com/demox-labs/miden-wallet-adapter/blob/2c75496fbd917d06ce4a82202350716b4f0b6484/packages/core/base/transaction.ts#L13)

#### Implementation of

[`MidenMintTransaction`](../interfaces/MidenMintTransaction.md).[`recipientAccountId`](../interfaces/MidenMintTransaction.md#recipientaccountid)
