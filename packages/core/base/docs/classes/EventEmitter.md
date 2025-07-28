[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / EventEmitter

# Class: EventEmitter\<EventTypes, Context\>

Defined in: node\_modules/eventemitter3/index.d.ts:5

Minimal `EventEmitter` interface that is molded against the Node.js
`EventEmitter` interface.

## Extended by

- [`BaseWalletAdapter`](BaseWalletAdapter.md)

## Type Parameters

• **EventTypes** *extends* [`ValidEventTypes`](../namespaces/EventEmitter/type-aliases/ValidEventTypes.md) = `string` \| `symbol`

• **Context** *extends* `any` = `any`

## Constructors

### new EventEmitter()

> **new EventEmitter**\<`EventTypes`, `Context`\>(): [`EventEmitter`](EventEmitter.md)\<`EventTypes`, `Context`\>

#### Returns

[`EventEmitter`](EventEmitter.md)\<`EventTypes`, `Context`\>

## Properties

### prefixed

> `static` **prefixed**: `string` \| `boolean`

Defined in: node\_modules/eventemitter3/index.d.ts:9

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:45

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn

[`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

#### Returns

`this`

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Defined in: node\_modules/eventemitter3/index.d.ts:32

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### args

...`Parameters`\<[`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>\>

#### Returns

`boolean`

***

### eventNames()

> **eventNames**(): [`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>[]

Defined in: node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

[`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>[]

***

### listenerCount()

> **listenerCount**(`event`): `number`

Defined in: node\_modules/eventemitter3/index.d.ts:27

Return the number of listeners listening to a given event.

#### Parameters

##### event

[`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>

#### Returns

`number`

***

### listeners()

> **listeners**\<`T`\>(`event`): [`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>[]

Defined in: node\_modules/eventemitter3/index.d.ts:20

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

#### Returns

[`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>[]

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:69

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn?

[`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

##### once?

`boolean`

#### Returns

`this`

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:40

Add a listener for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn

[`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

#### Returns

`this`

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:54

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn

[`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

#### Returns

`this`

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:79

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

[`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>

#### Returns

`this`

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Defined in: node\_modules/eventemitter3/index.d.ts:63

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* `string` \| `symbol`

#### Parameters

##### event

`T`

##### fn?

[`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>

##### context?

`Context`

##### once?

`boolean`

#### Returns

`this`
