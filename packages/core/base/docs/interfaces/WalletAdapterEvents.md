[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / WalletAdapterEvents

# Interface: WalletAdapterEvents

Defined in: [adapter.ts:11](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L11)

## Methods

### connect()

> **connect**(`publicKey`, `programs`?): `void`

Defined in: [adapter.ts:12](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L12)

#### Parameters

##### publicKey

`string`

##### programs?

`string`[]

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [adapter.ts:13](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L13)

#### Returns

`void`

***

### error()

> **error**(`error`): `void`

Defined in: [adapter.ts:14](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L14)

#### Parameters

##### error

[`WalletError`](../classes/WalletError.md)

#### Returns

`void`

***

### readyStateChange()

> **readyStateChange**(`readyState`): `void`

Defined in: [adapter.ts:15](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/adapter.ts#L15)

#### Parameters

##### readyState

[`WalletReadyState`](../enumerations/WalletReadyState.md)

#### Returns

`void`
