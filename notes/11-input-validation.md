# Request Validation

Treat all client input as untrusted, including query parameters, route IDs, headers, and JSON bodies.

- Require fields that the operation needs.
- Enforce type, length, range, and format constraints.
- Reject unexpected fields where useful.
- Normalize values consistently.
- Return actionable validation errors without leaking secrets.
- Validate on the server even if the frontend already validates.

Use a schema validation library as the API grows to keep rules consistent.