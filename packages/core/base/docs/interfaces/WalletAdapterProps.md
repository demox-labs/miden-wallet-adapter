[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / WalletAdapterProps

# Interface: WalletAdapterProps\<Name\>

Defined in: [adapter.ts:24](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L24)

## Extended by

- [`SignerWalletAdapterProps`](SignerWalletAdapterProps.md)
- [`MessageSignerWalletAdapterProps`](MessageSignerWalletAdapterProps.md)

## Type Parameters

• **Name** *extends* `string` = `string`

## Properties

### connected

> **connected**: `boolean`

Defined in: [adapter.ts:31](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L31)

***

### connecting

> **connecting**: `boolean`

Defined in: [adapter.ts:30](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L30)

***

### icon

> **icon**: `string`

Defined in: [adapter.ts:27](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L27)

***

### name

> **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

Defined in: [adapter.ts:25](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L25)

***

### publicKey

> **publicKey**: `string`

Defined in: [adapter.ts:29](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L29)

***

### readyState

> **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

Defined in: [adapter.ts:28](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L28)

***

### supportedTransactionVersions

> **supportedTransactionVersions**: `ReadonlySet`\<`any`\>

Defined in: [adapter.ts:32](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L32)

***

### url

> **url**: `string`

Defined in: [adapter.ts:26](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L26)

## Methods

### connect()

> **connect**(`decryptPermission`, `network`, `programs`?): `Promise`\<`void`\>

Defined in: [adapter.ts:34](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L34)

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

Defined in: [adapter.ts:39](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L39)

#### Returns

`Promise`\<`void`\>
