# Handling Fetch API Errors

The Fetch API generally rejects on network failures, not merely because the server returned a 4xx or 5xx response.

```js
const response = await fetch("/api/tasks");
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}
const tasks = await response.json();
```

Handle network errors, non-success HTTP responses, and invalid response bodies where appropriate. Avoid displaying raw internal error details to users.
