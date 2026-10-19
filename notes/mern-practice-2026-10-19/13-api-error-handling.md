# API Error Handling

Return predictable errors to clients and keep detailed diagnostics on the server.

Example response:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Check the submitted fields."
  }
}
```

Use a centralized Express error handler. Do not expose stack traces, database queries, filesystem paths, or secrets in production responses.
