[**@demox-labs/miden-wallet-adapter-trident**](../README.md)

***

[@demox-labs/miden-wallet-adapter-trident](../globals.md) / TridentWalletAdapter

# Class: TridentWalletAdapter

Defined in: [wallets/trident/adapter.ts:58](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L58)

## Extends

- `BaseMessageSignerWalletAdapter`

## Constructors

### new TridentWalletAdapter()

> **new TridentWalletAdapter**(`__namedParameters`): [`TridentWalletAdapter`](TridentWalletAdapter.md)

Defined in: [wallets/trident/adapter.ts:74](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L74)

#### Parameters

##### \_\_namedParameters

[`TridentWalletAdapterConfig`](../interfaces/TridentWalletAdapterConfig.md) = `{}`

#### Returns

[`TridentWalletAdapter`](TridentWalletAdapter.md)

#### Overrides

`BaseMessageSignerWalletAdapter.constructor`

## Properties

### icon

> **icon**: `string` = `'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJERjI1N0M3NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJERjI1N0M4NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRGMjU3QzU1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRGMjU3QzY1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZyM59AAACz0lEQVR42uzdT2vTYADH8d+Tpo3oYeph4g4iE6boZV68idKDiHj1spt7BYL4DgTfgKDgTdxZr4JXD4LCRMGLghtUGPgHpbWmaRuTsWOTOpfkyZ5+v+xWlrT5dE+ewJPFrLRjkb08DgEAABAAABAAAFD1+TmvxbFGQ5VxmdBoyMumT3Y6dujixPdlzO4BkqPvNzV/PO+X/7vuL/W6k7ec7PfovILAHYAf3zQIMw9jJsBwqGMLuvcoBSy8tYd6tqaDhya8FA20ekvLF9wBuHtb798oOLD7IShBawV5Y8VehqCcms30j8+d06y3h5PweFzKe4pjCzu1Vf6HZRbENBQAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAmgGArGWUTubX7Q01fD1/qvVXU1b0FVs00KkzungFgO11uy9faDSqdKf9ntrXAbA3BBljbdzjJMxJGAACAAACYDar4zQ0uSwq4zYx46nVAmBaw0g3VrV4uvgtb3X05MHOrB+AzJLv/tllnTtf/Ja/bO4AcA6Y0iAsZbPhH07CBAAABAAABAAABAAABAAAABAAABAAABAAABAAABAAABAAABAAAFippMdnNFt1BKjd2lBj0kWcc4cLfnqTkTobAPzb9/Tx/RJ1AZheebdoA7BfDxOzIAAIAAAIAOeyMwuKIvV/y6t2tmO8Ov4rKDsAi0u6dLXSw5FY97r68BaA7S5fS38qrrOhOzdrd50xQ+eAku5+BYBZEAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAGwrwBculuonp/Fy3/HjYZD37Xcz2I8O/BmpT35nsQ4VhDo5JI7fwRhX58/Tn5pPNbcES2cKGW/m5/ShdleBrCf4xaGevfaoSEo+zFWydH5+V1ft0rZb7OVefSVvzzd4kNerQxQgY3xllkQ01AACAAACAAAyEJ/BRgAJph5IP1XFpwAAAAASUVORK5CYII='`

Defined in: [wallets/trident/adapter.ts:61](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L61)

#### Overrides

`BaseMessageSignerWalletAdapter.icon`

***

### name

> **name**: `WalletName`\<`"Trident Wallet"`\> = `TridentWalletName`

Defined in: [wallets/trident/adapter.ts:59](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L59)

#### Overrides

`BaseMessageSignerWalletAdapter.name`

***

### supportedTransactionVersions

> `readonly` **supportedTransactionVersions**: `any` = `null`

Defined in: [wallets/trident/adapter.ts:63](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L63)

#### Overrides

`BaseMessageSignerWalletAdapter.supportedTransactionVersions`

***

### url

> **url**: `string` = `'https://leo.app/miden'`

Defined in: [wallets/trident/adapter.ts:60](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L60)

#### Overrides

`BaseMessageSignerWalletAdapter.url`

***

### prefixed

> `static` **prefixed**: `string` \| `boolean`

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:9

#### Inherited from

`BaseMessageSignerWalletAdapter.prefixed`

## Accessors

### connected

#### Get Signature

> **get** **connected**(): `boolean`

Defined in: core/base/dist/adapter.d.ts:63

##### Returns

`boolean`

#### Inherited from

`BaseMessageSignerWalletAdapter.connected`

***

### connecting

#### Get Signature

> **get** **connecting**(): `boolean`

Defined in: [wallets/trident/adapter.ts:101](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L101)

##### Returns

`boolean`

#### Overrides

`BaseMessageSignerWalletAdapter.connecting`

***

### decryptPermission

#### Get Signature

> **get** **decryptPermission**(): `string`

Defined in: [wallets/trident/adapter.ts:97](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L97)

##### Returns

`string`

***

### publicKey

#### Get Signature

> **get** **publicKey**(): `string`

Defined in: [wallets/trident/adapter.ts:93](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L93)

##### Returns

`string`

#### Overrides

`BaseMessageSignerWalletAdapter.publicKey`

***

### readyState

#### Get Signature

> **get** **readyState**(): `WalletReadyState`

Defined in: [wallets/trident/adapter.ts:105](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L105)

##### Returns

`WalletReadyState`

#### Set Signature

> **set** **readyState**(`readyState`): `void`

Defined in: [wallets/trident/adapter.ts:109](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L109)

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

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:45

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

Defined in: [wallets/trident/adapter.ts:163](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L163)

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

Defined in: [wallets/trident/adapter.ts:200](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L200)

#### Returns

`Promise`\<`void`\>

#### Overrides

`BaseMessageSignerWalletAdapter.disconnect`

***

### emit()

> **emit**\<`T`\>(`event`, ...`args`): `boolean`

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:32

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

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

#### Returns

keyof `WalletAdapterEvents`[]

#### Inherited from

`BaseMessageSignerWalletAdapter.eventNames`

***

### listenerCount()

> **listenerCount**(`event`): `number`

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:27

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

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:20

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

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:69

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

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:40

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

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:54

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

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:79

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

Defined in: core/base/node\_modules/eventemitter3/index.d.ts:63

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

Defined in: [wallets/trident/adapter.ts:129](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L129)

#### Parameters

##### transaction

`MidenConsumeTransaction`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestConsume`

***

### requestSend()

> **requestSend**(`transaction`): `Promise`\<`string`\>

Defined in: [wallets/trident/adapter.ts:113](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L113)

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

Defined in: [wallets/trident/adapter.ts:147](https://github.com/demox-labs/miden-wallet-adapter/blob/46e4cf9b66d74a1c5eb19ca70ee28c2507dce28f/packages/wallets/trident/adapter.ts#L147)

#### Parameters

##### transaction

`MidenTransaction`

#### Returns

`Promise`\<`string`\>

#### Overrides

`BaseMessageSignerWalletAdapter.requestTransaction`
