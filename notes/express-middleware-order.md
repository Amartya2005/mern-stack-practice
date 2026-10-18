# Express Middleware Ordering

Express processes middleware in registration order. A handler can modify the request/response, end the response, or pass control onward.

## Typical order
1. Request ID and logging
2. Security headers
3. CORS policy
4. Body parsing
5. Authentication where needed
6. Route handlers
7. Not-found handler
8. Central error handler

## Rules
- Call `next()` only when the request should continue.
- Do not send a response and then call `next()` accidentally.
- Register error middleware with the four-argument signature: `(err, req, res, next)`.
- Keep route-specific authorization close to protected routes.
- Avoid logging secrets or full sensitive request bodies.

A misplaced middleware can make correct code look broken, because order is part of the behavior.