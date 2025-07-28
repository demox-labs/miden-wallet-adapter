[**@demox-labs/miden-wallet-adapter-base**](../../../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../../../globals.md) / [EventEmitter](../README.md) / ArgumentMap

# Type Alias: ArgumentMap\<T\>

> **ArgumentMap**\<`T`\>: `{ [K in keyof T]: T[K] extends (args: any[]) => void ? Parameters<T[K]> : T[K] extends any[] ? T[K] : any[] }`

Defined in: node\_modules/eventemitter3/index.d.ts:109

## Type Parameters

• **T** *extends* `object`
