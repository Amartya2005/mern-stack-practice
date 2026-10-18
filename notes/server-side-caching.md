# Server-Side Caching

Caching stores computed or fetched results so repeated requests can be served faster and with less backend load.

## Common patterns
- Cache-aside: read cache first, fetch the database on a miss, then populate the cache.
- Time-to-live: expire entries after a bounded duration.
- Explicit invalidation: remove or update entries after relevant writes.

## Design questions
- What is the cache key, and does it include tenant/user scope where needed?
- How stale can the result safely be?
- What happens when the cache is unavailable?
- Could many simultaneous misses stampede the database?

Never cache sensitive personalized responses under a shared key. Measure hit rate, latency, and database load before adding layers of caching.