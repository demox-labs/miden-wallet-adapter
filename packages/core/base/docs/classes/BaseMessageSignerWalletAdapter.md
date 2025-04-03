[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / BaseMessageSignerWalletAdapter

# Class: `abstract` BaseMessageSignerWalletAdapter\<Name\>

Defined in: [signer.ts:32](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/signer.ts#L32)

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Extends

- [`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md)\<`Name`\>

## Type Parameters

• **Name** *extends* `string` = `string`

## Implements

- [`MessageSignerWalletAdapter`](../type-aliases/MessageSignerWalletAdapter.md)\<`Name`\>

## Constructors

### new BaseMessageSignerWalletAdapter()

> **new BaseMessageSignerWalletAdapter**\<`Name`\>(): [`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)\<`Name`\>

#### Returns

[`BaseMessageSignerWalletAdapter`](BaseMessageSignerWalletAdapter.md)\<`Name`\>

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`constructor`](BaseSignerWalletAdapter.md#constructors)

## Properties

### connecting

> `abstract` **connecting**: `boolean`

Defined in: [adapter.ts:83](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L83)

#### Implementation of

`MessageSignerWalletAdapter.connecting`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`connecting`](BaseSignerWalletAdapter.md#connecting)

***

### icon

> `abstract` **icon**: `string`

Defined in: [adapter.ts:80](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L80)

#### Implementation of

`MessageSignerWalletAdapter.icon`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`icon`](BaseSignerWalletAdapter.md#icon)

***

### name

> `abstract` **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

Defined in: [adapter.ts:78](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L78)

#### Implementation of

`MessageSignerWalletAdapter.name`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`name`](BaseSignerWalletAdapter.md#name)

***

### publicKey

> `abstract` **publicKey**: `string`

Defined in: [adapter.ts:82](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L82)

#### Implementation of

`MessageSignerWalletAdapter.publicKey`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`publicKey`](BaseSignerWalletAdapter.md#publickey)

***

### readyState

> `abstract` **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

Defined in: [adapter.ts:81](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L81)

#### Implementation of

`MessageSignerWalletAdapter.readyState`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`readyState`](BaseSignerWalletAdapter.md#readystate)

***

### supportedTransactionVersions

> `abstract` **supportedTransactionVersions**: `ReadonlySet`\<`any`\>

Defined in: [adapter.ts:84](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L84)

#### Implementation of

`MessageSignerWalletAdapter.supportedTransactionVersions`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`supportedTransactionVersions`](BaseSignerWalletAdapter.md#supportedtransactionversions)

***

### url

> `abstract` **url**: `string`

Defined in: [adapter.ts:79](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L79)

#### Implementation of

`MessageSignerWalletAdapter.url`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`url`](BaseSignerWalletAdapter.md#url)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

Defined in: node\_modules/eventemitter3/index.d.ts:9

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`prefixed`](BaseSignerWalletAdapter.md#prefixed)

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

Defined in: [adapter.ts:86](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L86)

##### Returns

`boolean`

#### Implementation of

`MessageSignerWalletAdapter.connected`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`connected`](BaseSignerWalletAdapter.md#connected)

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:45

#### Type Parameters

• **T** *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.addListener`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`addListener`](BaseSignerWalletAdapter.md#addlistener)

***

### connect()

> `abstract` **connect**(`decryptPermission`, `network`, `programs`?): `Promise`\<`void`\>

Defined in: [adapter.ts:90](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L90)

#### Parameters

##### decryptPermission

[`DecryptPermission`](../enumerations/DecryptPermission.md)

##### network

[`WalletAdapterNetwork`](../enumerations/WalletAdapterNetwork.md)

##### programs?

`string`[]

#### Returns

`Promise`\<`void`\>

#### Implementation of

`MessageSignerWalletAdapter.connect`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`connect`](BaseSignerWalletAdapter.md#connect)

***

### disconnect()

> `abstract` **disconnect**(): `Promise`\<`void`\>

Defined in: [adapter.ts:95](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/adapter.ts#L95)

#### Returns

`Promise`\<`void`\>

#### Implementation of

`MessageSignerWalletAdapter.disconnect`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`disconnect`](BaseSignerWalletAdapter.md#disconnect)

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Defined in: node\_modules/eventemitter3/index.d.ts:32

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### args

...[`ArgumentMap`](../namespaces/EventEmitter/type-aliases/ArgumentMap.md)\<[`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>\[`Extract`\<`T`, keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)\>\]

#### Returns

`boolean`

#### Implementation of

`MessageSignerWalletAdapter.emit`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`emit`](BaseSignerWalletAdapter.md#emit)

***

### eventNames()

> **eventNames**(): keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

Defined in: node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)[]

#### Implementation of

`MessageSignerWalletAdapter.eventNames`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`eventNames`](BaseSignerWalletAdapter.md#eventnames)

***

### listenerCount()

> **listenerCount**(`event`): `number`

Defined in: node\_modules/eventemitter3/index.d.ts:27

Return the number of listeners listening to a given event.

#### Parameters

##### event

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Returns

`number`

#### Implementation of

`MessageSignerWalletAdapter.listenerCount`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`listenerCount`](BaseSignerWalletAdapter.md#listenercount)

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Defined in: node\_modules/eventemitter3/index.d.ts:20

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

#### Returns

(...`args`) => `void`[]

#### Implementation of

`MessageSignerWalletAdapter.listeners`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`listeners`](BaseSignerWalletAdapter.md#listeners)

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:69

#### Type Parameters

• **T** *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn?

(...`args`) => `void`

##### context?

`any`

##### once?

`boolean`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.off`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`off`](BaseSignerWalletAdapter.md#off)

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:40

Add a listener for a given event.

#### Type Parameters

• **T** *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.on`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`on`](BaseSignerWalletAdapter.md#on)

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:54

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.once`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`once`](BaseSignerWalletAdapter.md#once-1)

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:79

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.removeAllListeners`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`removeAllListeners`](BaseSignerWalletAdapter.md#removealllisteners)

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:63

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* keyof [`WalletAdapterEvents`](../interfaces/WalletAdapterEvents.md)

#### Parameters

##### event

`T`

##### fn?

(...`args`) => `void`

##### context?

`any`

##### once?

`boolean`

#### Returns

`this`

#### Implementation of

`MessageSignerWalletAdapter.removeListener`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`removeListener`](BaseSignerWalletAdapter.md#removelistener)

***

### requestConsume()

> `abstract` **requestConsume**(`transaction`): `Promise`\<`string`\>

Defined in: [signer.ts:39](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/signer.ts#L39)

#### Parameters

##### transaction

[`MidenConsumeTransaction`](../interfaces/MidenConsumeTransaction.md)

#### Returns

`Promise`\<`string`\>

***

### requestSend()

> `abstract` **requestSend**(`transaction`): `Promise`\<`string`\>

Defined in: [signer.ts:38](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/signer.ts#L38)

#### Parameters

##### transaction

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md)

#### Returns

`Promise`\<`string`\>

***

### requestTransaction()

> `abstract` **requestTransaction**(`transaction`): `Promise`\<`string`\>

Defined in: [signer.ts:40](https://github.com/demox-labs/miden-wallet-adapter/blob/4e4ca8998b01f40befb8850757ab37009c071cf2/packages/core/base/signer.ts#L40)

#### Parameters

##### transaction

[`MidenTransaction`](../interfaces/MidenTransaction.md)

#### Returns

`Promise`\<`string`\>

#### Implementation of

`MessageSignerWalletAdapter.requestTransaction`
