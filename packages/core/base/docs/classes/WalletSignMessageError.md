[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / WalletSignMessageError

# Class: WalletSignMessageError

## Extends

- [`WalletError`](WalletError.md)

## Constructors

### new WalletSignMessageError()

> **new WalletSignMessageError**(`message`?, `error`?): [`WalletSignMessageError`](WalletSignMessageError.md)

#### Parameters

##### message?

`string`

##### error?

`any`

#### Returns

[`WalletSignMessageError`](WalletSignMessageError.md)

#### Inherited from

[`WalletError`](WalletError.md).[`constructor`](WalletError.md#constructors)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

[`WalletError`](WalletError.md).[`cause`](WalletError.md#cause)

***

### error

> **error**: `any`

#### Inherited from

[`WalletError`](WalletError.md).[`error`](WalletError.md#error-1)

***

### message

> **message**: `string`

#### Inherited from

[`WalletError`](WalletError.md).[`message`](WalletError.md#message-1)

***

### name

> **name**: `string` = `'WalletSignMessageError'`

#### Overrides

[`WalletError`](WalletError.md).[`name`](WalletError.md#name)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`WalletError`](WalletError.md).[`stack`](WalletError.md#stack)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`WalletError`](WalletError.md).[`prepareStackTrace`](WalletError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`WalletError`](WalletError.md).[`stackTraceLimit`](WalletError.md#stacktracelimit)

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`WalletError`](WalletError.md).[`captureStackTrace`](WalletError.md#capturestacktrace)
