[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / WalletSignTransactionError

# Class: WalletSignTransactionError

Defined in: [errors.ts:63](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/errors.ts#L63)

## Extends

- [`WalletError`](WalletError.md)

## Constructors

### new WalletSignTransactionError()

> **new WalletSignTransactionError**(`message`?, `error`?): [`WalletSignTransactionError`](WalletSignTransactionError.md)

Defined in: [errors.ts:5](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/errors.ts#L5)

#### Parameters

##### message?

`string`

##### error?

`any`

#### Returns

[`WalletSignTransactionError`](WalletSignTransactionError.md)

#### Inherited from

[`WalletError`](WalletError.md).[`constructor`](WalletError.md#constructors)

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`WalletError`](WalletError.md).[`cause`](WalletError.md#cause)

***

### error

> **error**: `any`

Defined in: [errors.ts:2](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/errors.ts#L2)

#### Inherited from

[`WalletError`](WalletError.md).[`error`](WalletError.md#error-1)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`WalletError`](WalletError.md).[`message`](WalletError.md#message-1)

***

### name

> **name**: `string` = `'WalletSignTransactionError'`

Defined in: [errors.ts:64](https://github.com/demox-labs/miden-wallet-adapter/blob/1ef8b04773cb8b7272bbf6a4eb810ab074d47de8/packages/core/base/errors.ts#L64)

#### Overrides

[`WalletError`](WalletError.md).[`name`](WalletError.md#name)

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`WalletError`](WalletError.md).[`stack`](WalletError.md#stack)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

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

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`WalletError`](WalletError.md).[`stackTraceLimit`](WalletError.md#stacktracelimit)

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

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
