# CRUD Checklist

For each resource, consider:
1. Create: validate payload and return the created resource.
2. Read: support pagination and predictable ordering.
3. Update: whitelist editable fields and validate the result.
4. Delete: define whether deletion is permanent or soft.
5. Authorization: verify the caller can access the specific resource.
6. Errors: handle missing records and database failures.
7. Tests: cover success, invalid input, and unauthorized access.

Never trust an ID supplied by the client as proof of ownership.