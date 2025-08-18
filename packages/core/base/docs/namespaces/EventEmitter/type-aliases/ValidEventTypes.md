[**@demox-labs/miden-wallet-adapter-base**](../../../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../../../globals.md) / [EventEmitter](../README.md) / ValidEventTypes

# Type Alias: ValidEventTypes

> **ValidEventTypes**: `string` \| `symbol` \| `object`

`object` should be in either of the following forms:
```
interface EventTypes {
  'event-with-parameters': any[]
  'event-with-example-handler': (...args: any[]) => void
}
```
