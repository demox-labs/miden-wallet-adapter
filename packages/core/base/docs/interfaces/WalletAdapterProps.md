[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / WalletAdapterProps

# Interface: WalletAdapterProps\<Name\>

Defined in: [adapter.ts:24](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L24)

## Extended by

- [`SignerWalletAdapterProps`](SignerWalletAdapterProps.md)
- [`MessageSignerWalletAdapterProps`](MessageSignerWalletAdapterProps.md)

## Type Parameters

• **Name** *extends* `string` = `string`

## Properties

### accountId

> **accountId**: `string`

Defined in: [adapter.ts:29](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L29)

***

### connected

> **connected**: `boolean`

Defined in: [adapter.ts:31](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L31)

***

### connecting

> **connecting**: `boolean`

Defined in: [adapter.ts:30](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L30)

***

### icon

> **icon**: `string`

Defined in: [adapter.ts:27](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L27)

***

### name

> **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

Defined in: [adapter.ts:25](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L25)

***

### readyState

> **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

Defined in: [adapter.ts:28](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L28)

***

### supportedTransactionVersions

> **supportedTransactionVersions**: `ReadonlySet`\<`any`\>

Defined in: [adapter.ts:32](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L32)

***

### url

> **url**: `string`

Defined in: [adapter.ts:26](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L26)

## Methods

### connect()

> **connect**(`decryptPermission`, `network`, `programs`?): `Promise`\<`void`\>

Defined in: [adapter.ts:34](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L34)

#### Parameters

##### decryptPermission

[`DecryptPermission`](../enumerations/DecryptPermission.md)

##### network

[`WalletAdapterNetwork`](../enumerations/WalletAdapterNetwork.md)

##### programs?

`string`[]

#### Returns

`Promise`\<`void`\>

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: [adapter.ts:39](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L39)

#### Returns

`Promise`\<`void`\>
