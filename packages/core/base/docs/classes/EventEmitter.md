[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / EventEmitter

# Class: EventEmitter\<EventTypes, Context\>

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

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

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

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

[`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>[]

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

##### event

[`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>

#### Returns

`number`

***

### listeners()

> **listeners**\<`T`\>(`event`): [`EventListener`](../namespaces/EventEmitter/type-aliases/EventListener.md)\<`EventTypes`, `T`\>[]

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

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

[`EventNames`](../namespaces/EventEmitter/type-aliases/EventNames.md)\<`EventTypes`\>

#### Returns

`this`

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

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
