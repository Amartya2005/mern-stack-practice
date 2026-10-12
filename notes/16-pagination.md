# API Pagination

Avoid returning an entire collection by default.

Offset pagination is simple for small datasets:

```js
const page = Math.max(1, Number(req.query.page) || 1);
const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
const items = await Task.find(filter)
  .sort({ createdAt: -1, _id: -1 })
  .skip((page - 1) * limit)
  .limit(limit);
```

For large or frequently changing collections, cursor pagination is often more efficient and stable. Always cap user-supplied limits.