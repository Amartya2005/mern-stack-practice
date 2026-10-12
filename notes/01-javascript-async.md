# JavaScript Async Patterns

## Promises
A Promise represents a value that may be available later. It can be pending, fulfilled, or rejected.

```js
const response = await fetch("/api/tasks");
if (!response.ok) throw new Error("Request failed");
const tasks = await response.json();
```

## Practical rules
- Use `try/catch` around awaited operations that can fail.
- Use `Promise.all` for independent requests that should run concurrently.
- Avoid mixing callbacks and promises without a clear reason.
- Always handle rejected promises in server-side code.