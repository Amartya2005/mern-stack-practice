# Express Middleware

Middleware runs in request order and can inspect or modify `req` and `res`, end the response, or pass control with `next()`.

Common uses:
- JSON body parsing
- Authentication and authorization
- Request logging
- Validation
- Centralized error handling

Register ordinary middleware before routes that need it. Error middleware uses four parameters: `(err, req, res, next)`.