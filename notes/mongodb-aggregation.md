# MongoDB Aggregation Pipelines

Aggregation transforms documents through an ordered sequence of stages.

## Common stages
- `$match`: filter documents.
- `$project`: include, exclude, or compute fields.
- `$group`: aggregate values by a key.
- `$sort`: order results.
- `$unwind`: expand array elements into separate documents.
- `$lookup`: join data from another collection.

## Example
```javascript
db.orders.aggregate([
  { $match: { status: "paid" } },
  { $group: { _id: "$customerId", totalSpent: { $sum: "$total" } } },
  { $sort: { totalSpent: -1 } }
]);
```

Filter early when possible, inspect the execution plan, and avoid returning unnecessary fields. Treat aggregation output as data that may need validation before API serialization.