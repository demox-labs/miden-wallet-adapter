[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../README.md) / WalletAdapterProps

# Interface: WalletAdapterProps\<Name\>

## Extended by

- [`SignerWalletAdapterProps`](SignerWalletAdapterProps.md)
- [`MessageSignerWalletAdapterProps`](MessageSignerWalletAdapterProps.md)

## Type Parameters

### Name

`Name` *extends* `string` = `string`

## Properties

### accountId

> **accountId**: `string`

***

### connected

> **connected**: `boolean`

***

### connecting

> **connecting**: `boolean`

***

### icon

> **icon**: `string`

***

### name

> **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

***

### readyState

> **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

***

### supportedTransactionVersions

> **supportedTransactionVersions**: `ReadonlySet`

***

### url

> **url**: `string`

## Methods

### connect()

> **connect**(`decryptPermission`, `network`, `programs?`): `Promise`\<`void`\>

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

#### Returns

`Promise`\<`void`\>
