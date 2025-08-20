[**@demox-labs/miden-wallet-adapter-miden**](../README.md)

***

[@demox-labs/miden-wallet-adapter-miden](../globals.md) / MidenWalletAdapter

# Class: MidenWalletAdapter

## Extends

- `BaseMessageSignerWalletAdapter`

## Constructors

### new MidenWalletAdapter()

> **new MidenWalletAdapter**(`__namedParameters`): [`MidenWalletAdapter`](MidenWalletAdapter.md)

#### Parameters

##### \_\_namedParameters

[`MidenWalletAdapterConfig`](../interfaces/MidenWalletAdapterConfig.md) = `{}`

#### Returns

[`MidenWalletAdapter`](MidenWalletAdapter.md)

#### Overrides

`BaseMessageSignerWalletAdapter.constructor`

## Properties

### icon

> **icon**: `string` = `'data:image/png;base64,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+d+QHitReQ6CQfjdhRVkpcTp36GifqVUhNH+vdtWzsYryF2lxqmT9yAYhMM8KVVVG5gaFRv9k2l97Qd+pYKEeZoSU9T2DS1wYlW1XvEJzVFtJO6oIFlVTWkudTA37aogRf4ul82mp/WKKokE1XakItqyCW+Ujq4KlP0uw+meiUhn1XekDyqYS2j11y1h+9rem8b2DXNUpcIVP/p6pTPi+8oSflav35WIZIJq1a3w+aIteKS0Mln89lU62zedigpEjKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhABggpEgKACESCoQAQIKhCBmoBIDWra/ofUUQIIKqLV2XH79rCvBND6AhEgqEAECCoQAYIKRICgAhEgqEAECCoQAYIKRICgAhEgqEAECCoQAYIKRICgAnP4qeUbj1q+roLx1zPAhBDGj0O1nHRDXmveq+6cGuG5TwN7scf1215y2rfn+/Zu3z73gz12v6ypt33wVz0LRVAB88Nt37Tg3bX4tS2MdXfsOefO+SILsL1eCy/2dS17fPLnIAtx1zu9+ldVO4sKLUFF0h7c8W3ndd+C1rTgLUrTvmfTQvvL+h3fuVbV5s87rq8rIKhIkgUoVMAtC2dDefJZhW5fNbAsJiEpYf5premuBeh17iE97iCwew++9Y90CQQVyVj/zj/8NNSeQpu7HGFRaisMFGHAmOcLCSqSYHPRLY20PV4AWramDRi7P37j12b9AoKKUgvHPG1Fd88Wdy7VcubG2u5RRXtW5e/P8ukEFaUVQvrXQLv+4BDKahqpM0tYCSpKKYqQHpohrAQVpfTHUE+iCOkhmz9fNGclqCidB7f9k5Wbk05XH1X1un3OecQEFaUSDns4aUMxsgWm6sCO756BoKJUwmEPxa0ZTmuc/CBBRWmElrfQs41yYm371mQLTFBRClnL69RWOdRrg5NzbIKKUrCWtxTV9JCtWD88XlUJKqI3Pm+2qXI5UVUJKqL3cZj9LWlDJROq6uHbBBXRq/jPO3TJ1LMrT4igInKh7Y3qDKQ5eafs1EKCiqhlbW+Z+exaTAQVcXPSXZVbPZwDTFARu9K2vYes/W0SVEQrO85YwtXeSRbUBkFFtOw4Y+mracYTVETMKs0qXP8ofxXdIKiIli0kNZQCrzpBRbxW44qCRSCoQAwIKhABgop4hdsepmGfoCJao2EaQbVFsz5BRbSqX6inNFBREa9Pyu72XXpe+kBQEa1OuJu3L39YvVOPoCJuFf2mkqsOCSoiZwst5Z6nOvWf/eoIKuI2qKqjcuuGVwQVUcvmqeOduYyc16vwSFARPef0RmVkbe/zd64b3iSoiF7W/pbwLCU7LLN5+DZBRfRC+2st4lOViVXTUfVzS09QUQqDmrbLVFXD3NQGoP7h+wQVpRCq6vFWMWoHc9ON4x8iqCiNl2/dtkqwAnzWgENQUSqVmh5H3QI7dWzA6Ux+mKCiVJ7tuF60LbC1vMOqDTRnIKgonXELHNcqsHUBFtJb4xM4TiGoKKUX71y4t2hXkRiHtH/e8wQVpTWs6Z4iOGm/4vS9hfTC/ydBRWmFNtLCekvj82VXjrW7Trr17IzFo0kEFaUWwvrivWu7VVtgOlg4unl4Lu80BBVJCCcQeGsxQ0C0bE47IaQXzUknEVQkIxyfDIs2FpTltMLW6obB4sVbd++81d3zEFQkJVQxC0pohW8VVl0P5qKbNkhcfznDfPQsNQEJGs8Nr6/f8S3n9dBLTS1aCKjX00FV2/NW0EkEFUmz6rpjDzvtlm9UhmpVvO77q9zF3GXX4N3xttJsAe1dNaCHCCqgg5bYHsIZTdshtNWh1qwarjmnGxa6hg93jnPHbvMYziceWcV02UtvKH2oVtV9NuV4KAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs1d/ArZRIBz8JggAAAABJRU5ErkJggg=='`

#### Overrides

`BaseMessageSignerWalletAdapter.icon`

***

### name

> **name**: `WalletName`\<`"Miden Wallet"`\> = `MidenWalletName`

#### Overrides

`BaseMessageSignerWalletAdapter.name`

***

### supportedTransactionVersions

> `readonly` **supportedTransactionVersions**: `any` = `null`

#### Overrides

`BaseMessageSignerWalletAdapter.supportedTransactionVersions`

***

### url

> **url**: `string` = `'https://miden.fi/'`

#### Overrides

`BaseMessageSignerWalletAdapter.url`

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

#### Inherited from

`BaseMessageSignerWalletAdapter.prefixed`

## Accessors

### accountId

#### Get Signature

> **get** **accountId**(): `string`

##### Returns

`string`

#### Overrides

`BaseMessageSignerWalletAdapter.accountId`

***

### connected

#### Get Signature

> **get** **connected**(): `boolean`

##### Returns

`boolean`

#### Inherited from

`BaseMessageSignerWalletAdapter.connected`

***

### connecting

#### Get Signature

> **get** **connecting**(): `boolean`

##### Returns

`boolean`

#### Overrides

`BaseMessageSignerWalletAdapter.connecting`

***

### decryptPermission

#### Get Signature

> **get** **decryptPermission**(): `string`

##### Returns

`string`

***

### readyState

#### Get Signature

> **get** **readyState**(): `WalletReadyState`

##### Returns

`WalletReadyState`

#### Set Signature

> **set** **readyState**(`readyState`): `void`

##### Parameters

###### readyState

`WalletReadyState`

##### Returns

`void`

#### Overrides

`BaseMessageSignerWalletAdapter.readyState`

## Methods

### addListener()

> **addListener**\<`T`\>(`event`, `fn`, `context`?): `this`

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

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

`BaseMessageSignerWalletAdapter.addListener`

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

#### Overrides

`BaseMessageSignerWalletAdapter.connect`

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseMessageSignerWalletAdapter.disconnect`

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

#### Parameters

##### event

`T`

##### args

...`ArgumentMap`\<`WalletAdapterEvents`\>\[`Extract`\<`T`, keyof `WalletAdapterEvents`\>\]

#### Returns

`boolean`

#### Inherited from

`BaseMessageSignerWalletAdapter.emit`

***

### eventNames()

> **eventNames**(): keyof `WalletAdapterEvents`[]

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof `WalletAdapterEvents`[]

#### Inherited from

`BaseMessageSignerWalletAdapter.eventNames`

***

### listenerCount()

> **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

##### event

keyof `WalletAdapterEvents`

#### Returns

`number`

#### Inherited from

`BaseMessageSignerWalletAdapter.listenerCount`

***

### listeners()

> **listeners**\<`T`\>(`event`): (...`args`) => `void`[]

Return the listeners registered for a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

#### Parameters

##### event

`T`

#### Returns

(...`args`) => `void`[]

#### Inherited from

`BaseMessageSignerWalletAdapter.listeners`

***

### off()

> **off**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

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

`BaseMessageSignerWalletAdapter.off`

***

### on()

> **on**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a listener for a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

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

`BaseMessageSignerWalletAdapter.on`

***

### once()

> **once**\<`T`\>(`event`, `fn`, `context`?): `this`

Add a one-time listener for a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

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

`BaseMessageSignerWalletAdapter.once`

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Remove all listeners, or those of the specified event.

#### Parameters

##### event?

keyof `WalletAdapterEvents`

#### Returns

`this`

#### Inherited from

`BaseMessageSignerWalletAdapter.removeAllListeners`

***

### removeListener()

> **removeListener**\<`T`\>(`event`, `fn`?, `context`?, `once`?): `this`

Remove the listeners of a given event.

#### Type Parameters

• **T** *extends* keyof `WalletAdapterEvents`

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

`BaseMessageSignerWalletAdapter.removeListener`

***

### requestConsume()

> **requestConsume**(`transaction`): `Promise`\<`string`\>

#### Parameters

##### transaction

`MidenConsumeTransaction`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestConsume`

***

### requestPrivateNotes()

> **requestPrivateNotes**(): `Promise`\<`any`[]\>

#### Returns

`Promise`\<`any`[]\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestPrivateNotes`

***

### requestSend()

> **requestSend**(`transaction`): `Promise`\<`string`\>

#### Parameters

##### transaction

`MidenSendTransaction`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestSend`

***

### requestTransaction()

> **requestTransaction**(`transaction`): `Promise`\<`string`\>

#### Parameters

##### transaction

`MidenTransaction`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestTransaction`
