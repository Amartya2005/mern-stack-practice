# MongoDB Index Strategy

Indexes speed up matching and sorting by maintaining additional data structures, at the cost of storage and slower writes.

## Practical workflow
1. Identify frequent query shapes from application behavior.
2. Use `explain("executionStats")` to inspect examined documents and index use.
3. Add indexes for measured query patterns, including sort fields where appropriate.
4. Re-check read performance and write overhead after deployment.

## Compound indexes
Field order matters. Equality fields commonly come before sort or range fields, but the best order depends on the actual query workload.

## Cautions
- Avoid indexing every field.
- Enforce uniqueness with a unique index when it is a data invariant.
- Consider index size and memory pressure.
- Validate changes against realistic data volumes before production.