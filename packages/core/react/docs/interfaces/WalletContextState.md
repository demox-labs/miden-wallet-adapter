[**@demox-labs/miden-wallet-adapter-react**](../README.md)

***

[@demox-labs/miden-wallet-adapter-react](../globals.md) / WalletContextState

# Interface: WalletContextState

Defined in: [useWallet.ts:17](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L17)

## Properties

### autoConnect

> **autoConnect**: `boolean`

Defined in: [useWallet.ts:18](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L18)

***

### connected

> **connected**: `boolean`

Defined in: [useWallet.ts:23](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L23)

***

### connecting

> **connecting**: `boolean`

Defined in: [useWallet.ts:22](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L22)

***

### disconnecting

> **disconnecting**: `boolean`

Defined in: [useWallet.ts:24](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L24)

***

### publicKey

> **publicKey**: `string`

Defined in: [useWallet.ts:21](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L21)

***

### requestTransaction()

> **requestTransaction**: (`transaction`) => `Promise`\<`string`\>

Defined in: [useWallet.ts:34](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L34)

#### Parameters

##### transaction

`MidenTransaction`

#### Returns

`Promise`\<`string`\>

***

### wallet

> **wallet**: [`Wallet`](Wallet.md)

Defined in: [useWallet.ts:20](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L20)

***

### wallets

> **wallets**: [`Wallet`](Wallet.md)[]

Defined in: [useWallet.ts:19](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L19)

## Methods

### connect()

> **connect**(`decryptPermission`, `network`, `programs`?): `Promise`\<`void`\>

Defined in: [useWallet.ts:27](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L27)

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

Defined in: [useWallet.ts:32](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L32)

#### Returns

`Promise`\<`void`\>

***

### select()

> **select**(`walletName`): `void`

Defined in: [useWallet.ts:26](https://github.com/demox-labs/miden-wallet-adapter/blob/936af832afefbf69ccca2be9df2bcc84be315019/packages/core/react/useWallet.ts#L26)

#### Parameters

##### walletName

`WalletName`

#### Returns

`void`
