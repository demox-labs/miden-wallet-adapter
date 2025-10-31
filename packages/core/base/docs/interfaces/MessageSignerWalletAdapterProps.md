[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../README.md) / MessageSignerWalletAdapterProps

# Interface: MessageSignerWalletAdapterProps\<Name\>

## Extends

- [`WalletAdapterProps`](WalletAdapterProps.md)\<`Name`\>

## Type Parameters

### Name

`Name` *extends* `string` = `string`

## Properties

### accountId

> **accountId**: `string`

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`accountId`](WalletAdapterProps.md#accountid)

***

### connected

> **connected**: `boolean`

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`connected`](WalletAdapterProps.md#connected)

***

### connecting

> **connecting**: `boolean`

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`connecting`](WalletAdapterProps.md#connecting)

***

### icon

> **icon**: `string`

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`icon`](WalletAdapterProps.md#icon)

***

### name

> **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`name`](WalletAdapterProps.md#name-1)

***

### publicKey

> **publicKey**: `Uint8Array`\<`ArrayBufferLike`\>

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`publicKey`](WalletAdapterProps.md#publickey)

***

### readyState

> **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`readyState`](WalletAdapterProps.md#readystate)

***

### supportedTransactionVersions

> **supportedTransactionVersions**: `ReadonlySet`

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`supportedTransactionVersions`](WalletAdapterProps.md#supportedtransactionversions)

***

### url

> **url**: `string`

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`url`](WalletAdapterProps.md#url)

## Methods

### connect()

> **connect**(`privateDataPermission`, `network`, `allowedPrivateData?`): `Promise`\<`void`\>

#### Parameters

##### privateDataPermission

[`PrivateDataPermission`](../enumerations/PrivateDataPermission.md)

##### network

[`WalletAdapterNetwork`](../enumerations/WalletAdapterNetwork.md)

##### allowedPrivateData?

[`AllowedPrivateData`](../enumerations/AllowedPrivateData.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`connect`](WalletAdapterProps.md#connect)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`WalletAdapterProps`](WalletAdapterProps.md).[`disconnect`](WalletAdapterProps.md#disconnect)

***

### importPrivateNote()

> **importPrivateNote**(`note`): `Promise`\<`string`\>

#### Parameters

##### note

`Uint8Array`

#### Returns

`Promise`\<`string`\>

***

### requestAssets()

> **requestAssets**(): `Promise`\<[`Asset`](Asset.md)[]\>

#### Returns

`Promise`\<[`Asset`](Asset.md)[]\>

***

### requestConsumableNotes()

> **requestConsumableNotes**(): `Promise`\<[`InputNoteDetails`](../type-aliases/InputNoteDetails.md)[]\>

#### Returns

`Promise`\<[`InputNoteDetails`](../type-aliases/InputNoteDetails.md)[]\>

***

### requestPrivateNotes()

> **requestPrivateNotes**(`noteFilterType`, `noteIds?`): `Promise`\<[`InputNoteDetails`](../type-aliases/InputNoteDetails.md)[]\>

#### Parameters

##### noteFilterType

`NoteFilterTypes`

##### noteIds?

`string`[]

#### Returns

`Promise`\<[`InputNoteDetails`](../type-aliases/InputNoteDetails.md)[]\>

***

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<`string`\>

#### Parameters

##### transaction

[`MidenTransaction`](MidenTransaction.md)

#### Returns

`Promise`\<`string`\>

***

### signBytes()

> **signBytes**(`data`, `kind`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Parameters

##### data

`Uint8Array`

##### kind

[`SignKind`](../type-aliases/SignKind.md)

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>
