# REST API Conventions

- Use nouns for resource paths, such as `/api/tasks`.
- Use HTTP methods consistently: GET, POST, PATCH, and DELETE.
- Return `201 Created` after successful resource creation.
- Return `400` for invalid input, `404` for missing resources, and `500` for unexpected server errors.
- Keep response shapes consistent and document pagination.

Do not return stack traces or internal database details to clients.
