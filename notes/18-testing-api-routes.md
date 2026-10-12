# API Route Testing Checklist

For each route, test:
- Expected successful response and status code.
- Missing and malformed fields.
- Invalid resource IDs.
- Nonexistent resources.
- Missing authentication.
- Insufficient permissions.
- Database or dependency failures.
- Boundary values and pagination limits.

Use isolated test data and clean it up. Tests should assert observable behavior rather than depend on internal implementation details.