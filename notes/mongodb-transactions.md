# MongoDB Transactions

Transactions group multiple database operations so they commit together or roll back together. They are useful when a business operation must update multiple documents consistently.

## Use a transaction when
- Several writes must succeed or fail as one unit.
- A multi-document invariant cannot be maintained safely with a single-document atomic update.

## Considerations
- Keep transactions short.
- Use a deployment configuration that supports transactions, such as a replica set.
- Handle transient transaction errors and retry according to driver guidance.
- Avoid external side effects inside a transaction callback unless they are safely repeatable.

MongoDB writes are atomic at the single-document level. Prefer a schema that uses that property before reaching for transactions everywhere.