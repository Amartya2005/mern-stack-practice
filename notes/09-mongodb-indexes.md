# MongoDB Indexes

Indexes can speed up reads and sorts by avoiding full collection scans.

```js
taskSchema.index({ ownerId: 1, createdAt: -1 });
```

Compound index field order matters. Put equality fields before sort/range fields when appropriate, then verify the actual query plan with `explain()`. Do not create indexes speculatively because every index has write and storage costs.