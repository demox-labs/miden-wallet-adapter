[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../README.md) / WalletAdapterEvents

# Interface: WalletAdapterEvents

## Methods

### connect()

> **connect**(`accountId`, `programs?`): `void`

#### Parameters

##### accountId

`string`

##### programs?

`string`[]

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

#### Returns

`void`

***

### error()

> **error**(`error`): `void`

#### Parameters

##### error

[`WalletError`](../classes/WalletError.md)

#### Returns

`void`

***

### readyStateChange()

> **readyStateChange**(`readyState`): `void`

#### Parameters

##### readyState

[`WalletReadyState`](../enumerations/WalletReadyState.md)

#### Returns

`void`
