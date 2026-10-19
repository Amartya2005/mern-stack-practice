# API Pagination

For small datasets, limit/offset pagination is straightforward:

```js
const page = Math.max(1, Number(req.query.page) || 1);
const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 10));
const skip = (page - 1) * limit;
```

Always cap `limit` and validate numeric values. For large or frequently changing datasets, cursor pagination can avoid some offset-related performance and consistency problems.
