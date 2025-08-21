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

### decryptPermission?

> `optional` **decryptPermission**: `DecryptPermission`

***

### disconnecting

> **disconnecting**: `boolean`

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

### wallet

> **wallet**: [`Wallet`](Wallet.md)

***

### wallets

> **wallets**: [`Wallet`](Wallet.md)[]

## Methods

### connect()

> **connect**(`decryptPermission`, `network`, `programs?`): `Promise`\<`void`\>

#### Parameters

##### decryptPermission

`DecryptPermission`

##### network

`WalletAdapterNetwork`

##### programs?

`string`[]

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
