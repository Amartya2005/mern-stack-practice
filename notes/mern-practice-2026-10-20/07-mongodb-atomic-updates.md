# Atomic MongoDB Updates

Prefer a single conditional update when a change depends on the current value.

```js
const result = await Inventory.updateOne(
  { _id: itemId, quantity: { $gte: requested } },
  { $inc: { quantity: -requested } }
);
```

Check whether the update matched a document before reporting success. Atomic updates can prevent common read-modify-write races on a single document; multi-document workflows may require transactions.
