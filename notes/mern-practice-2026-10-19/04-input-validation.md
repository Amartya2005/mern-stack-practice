# API Input Validation

Treat all client input as untrusted, including query parameters, route parameters, headers, and JSON bodies.

Validation should check:
- Required fields and data types
- String lengths and allowed values
- Numeric ranges
- Array size and nested object shape
- IDs and pagination limits

Reject invalid input early with a clear `400 Bad Request` response. Validation improves reliability but does not replace authorization.
