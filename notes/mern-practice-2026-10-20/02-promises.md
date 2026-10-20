# JavaScript Promise Patterns

A promise represents a result that may be available now, later, or never because it failed.

- Use `Promise.all` when every operation must succeed.
- Use `Promise.allSettled` when each result should be inspected independently.
- Return promises from helper functions so callers can await them.
- Handle rejections deliberately.

Do not run dependent database operations concurrently just because parallelism looks impressive. Dependencies still exist, despite JavaScript's enthusiasm.
