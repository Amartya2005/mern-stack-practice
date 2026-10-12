# MongoDB Schema Design

Model data around access patterns, not just object shape.

- Embed small, bounded data commonly read with its parent.
- Reference entities that are large, independently updated, or many-to-many.
- Index fields used frequently in filters and sorts.
- Avoid unbounded arrays that grow indefinitely.
- Use schema validation where practical.

Check query patterns before adding indexes: indexes improve reads but consume storage and add write overhead.