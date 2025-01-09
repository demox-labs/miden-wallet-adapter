[**@demox-labs/miden-wallet-adapter-base**](../README.md)

***

[@demox-labs/miden-wallet-adapter-base](../globals.md) / Transaction

# Class: Transaction

Defined in: [transaction.ts:44](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/core/base/transaction.ts#L44)

## Implements

- [`MidenTransaction`](../interfaces/MidenTransaction.md)

## Constructors

### new Transaction()

> **new Transaction**(`sendTransaction`?, `transactionResult`?): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:48](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/core/base/transaction.ts#L48)

#### Parameters

##### sendTransaction?

[`MidenSendTransaction`](../interfaces/MidenSendTransaction.md)

##### transactionResult?

`TransactionResult`

#### Returns

[`Transaction`](Transaction.md)

## Properties

### sendTransaction?

> `optional` **sendTransaction**: [`MidenSendTransaction`](../interfaces/MidenSendTransaction.md)

Defined in: [transaction.ts:46](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/core/base/transaction.ts#L46)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`sendTransaction`](../interfaces/MidenTransaction.md#sendtransaction)

***

### transactionResult?

> `optional` **transactionResult**: `TransactionResult`

Defined in: [transaction.ts:45](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/core/base/transaction.ts#L45)

#### Implementation of

[`MidenTransaction`](../interfaces/MidenTransaction.md).[`transactionResult`](../interfaces/MidenTransaction.md#transactionresult)

## Methods

### createSendTransaction()

> `static` **createSendTransaction**(`sender`, `recipient`, `faucetId`, `noteType`, `amount`, `recallBlocks`?): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:56](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/core/base/transaction.ts#L56)

#### Parameters

##### sender

`string`

##### recipient

`string`

##### faucetId

`string`

##### noteType

[`NoteTypeString`](../type-aliases/NoteTypeString.md)

##### amount

`number`

##### recallBlocks?

`number`

#### Returns

[`Transaction`](Transaction.md)

***

### createTransactionResult()

> `static` **createTransactionResult**(`transactionResult`): [`Transaction`](Transaction.md)

Defined in: [transaction.ts:75](https://github.com/demox-labs/miden-wallet-adapter/blob/1af414b0061ffb570410647de775211199a69766/packages/core/base/transaction.ts#L75)

#### Parameters

##### transactionResult

`TransactionResult`

#### Returns

[`Transaction`](Transaction.md)
