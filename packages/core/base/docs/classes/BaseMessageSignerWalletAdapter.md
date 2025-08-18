[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / BaseMessageSignerWalletAdapter

# Class: `abstract` BaseMessageSignerWalletAdapter\<Name\>

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

### accountId

> `abstract` **accountId**: `string`

Defined in: [adapter.ts:82](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/adapter.ts#L82)

#### Implementation of

`MessageSignerWalletAdapter.accountId`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`accountId`](BaseSignerWalletAdapter.md#accountid)

***

### connecting

> `abstract` **connecting**: `boolean`

#### Implementation of

`MessageSignerWalletAdapter.connecting`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`connecting`](BaseSignerWalletAdapter.md#connecting)

***

### icon

> `abstract` **icon**: `string`

#### Implementation of

`MessageSignerWalletAdapter.icon`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`icon`](BaseSignerWalletAdapter.md#icon)

***

### name

> `abstract` **name**: [`WalletName`](../type-aliases/WalletName.md)\<`Name`\>

#### Implementation of

`MessageSignerWalletAdapter.name`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`name`](BaseSignerWalletAdapter.md#name)

***

### readyState

> `abstract` **readyState**: [`WalletReadyState`](../enumerations/WalletReadyState.md)

#### Implementation of

`MessageSignerWalletAdapter.readyState`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`readyState`](BaseSignerWalletAdapter.md#readystate)

***

### supportedTransactionVersions

> `abstract` **supportedTransactionVersions**: `ReadonlySet`\<`any`\>

#### Implementation of

`MessageSignerWalletAdapter.supportedTransactionVersions`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`supportedTransactionVersions`](BaseSignerWalletAdapter.md#supportedtransactionversions)

***

### url

> `abstract` **url**: `string`

#### Implementation of

`MessageSignerWalletAdapter.url`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`url`](BaseSignerWalletAdapter.md#url)

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`prefixed`](BaseSignerWalletAdapter.md#prefixed)

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

##### Returns

`boolean`

#### Implementation of

`MessageSignerWalletAdapter.connected`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`connected`](BaseSignerWalletAdapter.md#connected)

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

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

#### Returns

`Promise`\<`void`\>

#### Implementation of

`MessageSignerWalletAdapter.disconnect`

#### Inherited from

[`BaseSignerWalletAdapter`](BaseSignerWalletAdapter.md).[`disconnect`](BaseSignerWalletAdapter.md#disconnect)

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

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

#### Parameters

##### transaction

[`MidenConsumeTransaction`](../interfaces/MidenConsumeTransaction.md)

#### Returns

`Promise`\<`string`\>

***

### requestPrivateNotes()

> `abstract` **requestPrivateNotes**(): `Promise`\<`any`[]\>

#### Returns

`Promise`\<`any`[]\>

#### Implementation of

`MessageSignerWalletAdapter.requestPrivateNotes`

***

### requestSend()

> `abstract` **requestSend**(`transaction`): `Promise`\<`string`\>

#### Parameters

##### transaction

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md)

#### Returns

`Promise`\<`string`\>

***

### requestTransaction()

> `abstract` **requestTransaction**(`transaction`): `Promise`\<`string`\>

#### Parameters

##### transaction

[`MidenTransaction`](../interfaces/MidenTransaction.md)

#### Returns

`Promise`\<`string`\>

#### Implementation of

`MessageSignerWalletAdapter.requestTransaction`
