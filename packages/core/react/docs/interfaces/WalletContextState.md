[**@demox-labs/miden-wallet-adapter-react**](../README.md)

***

[@demox-labs/miden-wallet-adapter-react](../README.md) / WalletContextState

# Interface: WalletContextState

## Properties

### accountId

> **accountId**: `string`

***

### autoConnect

> **autoConnect**: `boolean`

***

### connected

> **connected**: `boolean`

***

### connecting

> **connecting**: `boolean`

***

### disconnecting

> **disconnecting**: `boolean`

***

### privateDataPermission?

> `optional` **privateDataPermission**: `PrivateDataPermission`

***

### publicKey

> **publicKey**: `Uint8Array`\<`ArrayBufferLike`\>

***

### requestAssets()

> **requestAssets**: () => `Promise`\<`Asset`[]\>

#### Returns

`Promise`\<`Asset`[]\>

***

### requestPrivateNotes()

> **requestPrivateNotes**: () => `Promise`\<`any`[]\>

#### Returns

`Promise`\<`any`[]\>

***

### requestTransaction()

> **requestTransaction**: (`transaction`) => `Promise`\<`string`\>

#### Parameters

##### transaction

`MidenTransaction`

#### Returns

`Promise`\<`string`\>

***

### signMessage()

> **signMessage**: (`message`) => `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

#### Parameters

##### message

`Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

***

### wallet

> **wallet**: [`Wallet`](Wallet.md)

***

### wallets

> **wallets**: [`Wallet`](Wallet.md)[]

## Methods

### connect()

> **connect**(`privateDataPermission`, `network`, `allowedPrivateData?`): `Promise`\<`void`\>

#### Parameters

##### privateDataPermission

`PrivateDataPermission`

##### network

`WalletAdapterNetwork`

##### allowedPrivateData?

`AllowedPrivateData`

#### Returns

`Promise`\<`void`\>

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### select()

> **select**(`walletName`): `void`

#### Parameters

##### walletName

`WalletName`

#### Returns

`void`
