# Mongoose Populate

`populate()` replaces referenced document IDs with documents from another collection for a query result.

## Example
```javascript
const posts = await Post.find({ published: true })
  .select("title author createdAt")
  .populate({ path: "author", select: "name avatar" })
  .lean();
```

## Tradeoffs
- Useful for convenient reads across references.
- Can add query cost and return more data than needed.
- Deep or repeated population can become expensive.
- It does not create a relational foreign-key constraint.

Select only required fields, paginate parent results, and measure query counts. For high-volume endpoints, consider aggregation or a deliberate denormalized read model.