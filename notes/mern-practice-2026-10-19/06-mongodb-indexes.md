# MongoDB Indexes

Indexes can speed up reads and sorting by avoiding full collection scans. Use `explain()` to inspect query plans.

```js
db.tasks.createIndex({ ownerId: 1, createdAt: -1 });
```

Choose indexes based on real query patterns. Compound index field order matters. Too many indexes increase storage use and write cost, so measure before adding them.
