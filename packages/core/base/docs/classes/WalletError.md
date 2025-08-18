[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / WalletError

# Class: WalletError

## Extends

- `Error`

## Extended by

- [`WalletNotReadyError`](WalletNotReadyError.md)
- [`WalletLoadError`](WalletLoadError.md)
- [`WalletConfigError`](WalletConfigError.md)
- [`WalletConnectionError`](WalletConnectionError.md)
- [`WalletNotSelectedError`](WalletNotSelectedError.md)
- [`WalletDisconnectedError`](WalletDisconnectedError.md)
- [`WalletDisconnectionError`](WalletDisconnectionError.md)
- [`WalletAccountError`](WalletAccountError.md)
- [`WalletAccountIdError`](WalletAccountIdError.md)
- [`WalletKeypairError`](WalletKeypairError.md)
- [`WalletNotConnectedError`](WalletNotConnectedError.md)
- [`WalletSendTransactionError`](WalletSendTransactionError.md)
- [`WalletSignMessageError`](WalletSignMessageError.md)
- [`WalletSignTransactionError`](WalletSignTransactionError.md)
- [`WalletTimeoutError`](WalletTimeoutError.md)
- [`WalletWindowBlockedError`](WalletWindowBlockedError.md)
- [`WalletWindowClosedError`](WalletWindowClosedError.md)
- [`WalletDecryptionNotAllowedError`](WalletDecryptionNotAllowedError.md)
- [`WalletDecryptionError`](WalletDecryptionError.md)
- [`WalletRecordsError`](WalletRecordsError.md)
- [`WalletTransactionError`](WalletTransactionError.md)

## Constructors

### new WalletError()

> **new WalletError**(`message`?, `error`?): [`WalletError`](WalletError.md)

#### Parameters

##### message?

`string`

##### error?

`any`

#### Returns

[`WalletError`](WalletError.md)

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`Error.cause`

***

### error

> **error**: `any`

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

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

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

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

`Error.captureStackTrace`
