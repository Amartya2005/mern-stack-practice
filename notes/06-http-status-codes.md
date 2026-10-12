# Useful HTTP Status Codes

- `200 OK`: request succeeded.
- `201 Created`: a resource was created.
- `204 No Content`: succeeded with no response body.
- `400 Bad Request`: malformed or invalid client input.
- `401 Unauthorized`: valid authentication is missing.
- `403 Forbidden`: caller lacks permission.
- `404 Not Found`: resource does not exist or is not exposed.
- `409 Conflict`: request conflicts with current state.
- `422 Unprocessable Content`: syntactically valid input fails validation.
- `500 Internal Server Error`: unexpected server failure.

Choose codes consistently and include a safe, useful error message.