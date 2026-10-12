# Error Handling

Use a consistent error response and log enough context for debugging without exposing secrets.

- Forward asynchronous route errors to the error handler.
- Distinguish expected client errors from unexpected server failures.
- Do not return stack traces in production.
- Include a request ID in logs when possible.
- Avoid swallowing errors and returning fake success responses.

A centralized Express error middleware keeps response behavior consistent across routes.