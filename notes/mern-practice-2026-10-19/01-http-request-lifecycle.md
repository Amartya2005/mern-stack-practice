# HTTP Request Lifecycle

1. A client sends an HTTP request to the server.
2. Express middleware runs in registration order.
3. A matching route validates input and invokes application logic.
4. The application layer calls the database or another service.
5. The server returns a status code and response body.

## Debugging checklist

- Confirm the URL and HTTP method.
- Check middleware order and body parsing.
- Validate input before database operations.
- Return an appropriate status code.
- Log unexpected failures without exposing secrets.
