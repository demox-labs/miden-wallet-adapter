[**@demox-labs/miden-wallet-adapter-miden**](../README.md)

***

[@demox-labs/miden-wallet-adapter-miden](../globals.md) / MidenWallet

# Interface: MidenWallet

## Extends

- `EventEmitter`\<[`MidenWalletEvents`](MidenWalletEvents.md)\>

## Properties

### accountId?

> `optional` **accountId**: `string`

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* keyof [`MidenWalletEvents`](MidenWalletEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

`EventEmitter.addListener`

***

### connect()

> **connect**(`decryptPermission`, `network`, `programs`?): `Promise`\<`void`\>

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

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof [`MidenWalletEvents`](MidenWalletEvents.md)

#### Parameters

##### event

`T`

##### args

...`ArgumentMap`\<[`MidenWalletEvents`](MidenWalletEvents.md)\>\[`Extract`\<`T`, keyof [`MidenWalletEvents`](MidenWalletEvents.md)\>\]

#### Returns

`boolean`

#### Inherited from

`EventEmitter.emit`

***

### eventNames()

> **eventNames**(): keyof [`MidenWalletEvents`](MidenWalletEvents.md)[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`MidenWalletEvents`](MidenWalletEvents.md)[]

#### Inherited from

`EventEmitter.eventNames`

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

##### event

keyof [`MidenWalletEvents`](MidenWalletEvents.md)

#### Returns

`number`

#### Inherited from

`EventEmitter.listenerCount`

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof [`MidenWalletEvents`](MidenWalletEvents.md)

#### Parameters

##### event

`T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

`EventEmitter.listeners`

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** *extends* keyof [`MidenWalletEvents`](MidenWalletEvents.md)

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

#### Inherited from

`EventEmitter.off`

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** *extends* keyof [`MidenWalletEvents`](MidenWalletEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

`EventEmitter.on`

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* keyof [`MidenWalletEvents`](MidenWalletEvents.md)

#### Parameters

##### event

`T`

##### fn

(...`args`) => `void`

##### context?

`any`

#### Returns

`this`

#### Inherited from

`EventEmitter.once`

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

keyof [`MidenWalletEvents`](MidenWalletEvents.md)

#### Returns

`this`

#### Inherited from

`EventEmitter.removeAllListeners`

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* keyof [`MidenWalletEvents`](MidenWalletEvents.md)

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

#### Inherited from

`EventEmitter.removeListener`

***

### requestConsume()

> **requestConsume**(`transaction`): `Promise`\<\{ `transactionId`: `string`; \}\>

#### Parameters

##### transaction

`MidenConsumeTransaction`

#### Returns

`Promise`\<\{ `transactionId`: `string`; \}\>

***

### requestPrivateNotes()

> **requestPrivateNotes**(): `Promise`\<\{ `privateNotes`: `any`[]; \}\>

#### Returns

`Promise`\<\{ `privateNotes`: `any`[]; \}\>

***

### requestSend()

> **requestSend**(`transaction`): `Promise`\<\{ `transactionId`: `string`; \}\>

#### Parameters

##### transaction

`MidenSendTransaction`

#### Returns

`Promise`\<\{ `transactionId`: `string`; \}\>

***

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<\{ `transactionId`: `string`; \}\>

#### Parameters

##### transaction

`MidenTransaction`

#### Returns

`Promise`\<\{ `transactionId`: `string`; \}\>
