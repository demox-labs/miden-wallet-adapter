[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / WalletError

# Class: WalletError

Defined in: [errors.ts:1](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/errors.ts#L1)

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
- [`WalletPublicKeyError`](WalletPublicKeyError.md)
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

Defined in: [errors.ts:5](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/errors.ts#L5)

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

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### error

> **error**: `any`

Defined in: [errors.ts:2](https://github.com/demox-labs/miden-wallet-adapter/blob/945eae693dfd04e72f79c45431d1d0335907d921/packages/core/base/errors.ts#L2)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

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

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

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

`Error.captureStackTrace`
