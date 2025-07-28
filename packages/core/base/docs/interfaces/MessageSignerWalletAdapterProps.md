[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / MessageSignerWalletAdapterProps

# Interface: MessageSignerWalletAdapterProps\<Name\>

Defined in: [signer.ts:24](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/signer.ts#L24)

## Extends

- [`WalletAdapterProps`](WalletAdapterProps.md)\<`Name`\>

## Type Parameters

• **Name** *extends* `string` = `string`

## Properties

### connected

> **connected**: `boolean`

Defined in: [adapter.ts:31](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L31)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`connected`](WalletAdapterProps.md#connected)

***

### connecting

> **connecting**: `boolean`

Defined in: [adapter.ts:30](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L30)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`connecting`](WalletAdapterProps.md#connecting)

***

### icon

> **icon**: `string`

Defined in: [adapter.ts:27](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L27)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`icon`](WalletAdapterProps.md#icon)

***

### name

> **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

Defined in: [adapter.ts:25](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L25)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`name`](WalletAdapterProps.md#name)

***

### publicKey

> **publicKey**: `string`

Defined in: [adapter.ts:29](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L29)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`publicKey`](WalletAdapterProps.md#publickey)

***

### readyState

> **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

Defined in: [adapter.ts:28](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L28)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`readyState`](WalletAdapterProps.md#readystate)

***

### supportedTransactionVersions

> **supportedTransactionVersions**: `ReadonlySet`\<`any`\>

Defined in: [adapter.ts:32](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L32)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`supportedTransactionVersions`](WalletAdapterProps.md#supportedtransactionversions)

***

### url

> **url**: `string`

Defined in: [adapter.ts:26](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L26)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`url`](WalletAdapterProps.md#url)

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

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`connect`](WalletAdapterProps.md#connect)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Defined in: [adapter.ts:39](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L39)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`disconnect`](WalletAdapterProps.md#disconnect)

***

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<`string`\>

Defined in: [signer.ts:26](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/signer.ts#L26)

#### Parameters

##### transaction

[`MidenTransaction`](MidenTransaction.md)

#### Returns

`Promise`\<`string`\>
