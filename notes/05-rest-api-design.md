# REST API Design

Prefer resource-oriented paths and consistent HTTP semantics.

| Operation | Method | Example |
|---|---|---|
| List resources | GET | `/api/tasks` |
| Create resource | POST | `/api/tasks` |
| Replace/update | PUT or PATCH | `/api/tasks/:id` |
| Delete | DELETE | `/api/tasks/:id` |

Use appropriate status codes, validate inputs, return predictable JSON, and document error response shapes. Avoid exposing internal stack traces to clients.