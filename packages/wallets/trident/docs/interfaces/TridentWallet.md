[**@demox-labs/miden-wallet-adapter-trident**](../README.md)

***

[@demox-labs/miden-wallet-adapter-trident](../globals.md) / TridentWallet

# Interface: TridentWallet

Defined in: [adapter.ts:23](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/wallets/trident/adapter.ts#L23)

## Extends

- `EventEmitter`\<[`TridentWalletEvents`](TridentWalletEvents.md)\>

## Properties

### publicKey?

> `optional` **publicKey**: `string`

Defined in: [adapter.ts:24](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/wallets/trident/adapter.ts#L24)

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:45

#### Type Parameters

• **T** *extends* keyof [`TridentWalletEvents`](TridentWalletEvents.md)

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

Defined in: [adapter.ts:28](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/wallets/trident/adapter.ts#L28)

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

Defined in: [adapter.ts:33](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/wallets/trident/adapter.ts#L33)

#### Returns

`Promise`\<`void`\>

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Defined in: node\_modules/eventemitter3/index.d.ts:32

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof [`TridentWalletEvents`](TridentWalletEvents.md)

#### Parameters

##### event

`T`

##### args

...`ArgumentMap`\<[`TridentWalletEvents`](TridentWalletEvents.md)\>\[`Extract`\<`T`, keyof [`TridentWalletEvents`](TridentWalletEvents.md)\>\]

#### Returns

`boolean`

#### Inherited from

`EventEmitter.emit`

***

### eventNames()

> **eventNames**(): keyof [`TridentWalletEvents`](TridentWalletEvents.md)[]

Defined in: node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof [`TridentWalletEvents`](TridentWalletEvents.md)[]

#### Inherited from

`EventEmitter.eventNames`

***

### listenerCount()

> **listenerCount**(`event`): `number`

Defined in: node\_modules/eventemitter3/index.d.ts:27

Return the number of listeners listening to a given event.

#### Parameters

##### event

keyof [`TridentWalletEvents`](TridentWalletEvents.md)

#### Returns

`number`

#### Inherited from

`EventEmitter.listenerCount`

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Defined in: node\_modules/eventemitter3/index.d.ts:20

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof [`TridentWalletEvents`](TridentWalletEvents.md)

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

Defined in: node\_modules/eventemitter3/index.d.ts:69

#### Type Parameters

• **T** *extends* keyof [`TridentWalletEvents`](TridentWalletEvents.md)

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

Defined in: node\_modules/eventemitter3/index.d.ts:40

Add a listener for a given event.

#### Type Parameters

• **T** *extends* keyof [`TridentWalletEvents`](TridentWalletEvents.md)

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

Defined in: node\_modules/eventemitter3/index.d.ts:54

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* keyof [`TridentWalletEvents`](TridentWalletEvents.md)

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

Defined in: node\_modules/eventemitter3/index.d.ts:79

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

keyof [`TridentWalletEvents`](TridentWalletEvents.md)

#### Returns

`this`

#### Inherited from

`EventEmitter.removeAllListeners`

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:63

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* keyof [`TridentWalletEvents`](TridentWalletEvents.md)

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

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<\{ `transactionId`: `string`; \}\>

Defined in: [adapter.ts:25](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/wallets/trident/adapter.ts#L25)

#### Parameters

##### transaction

`MidenTransaction`

#### Returns

`Promise`\<\{ `transactionId`: `string`; \}\>