# Express Middleware

Middleware receives `req`, `res`, and `next`. It can inspect a request, modify request state, end the response, or pass control onward.

```js
function requestLogger(req, res, next) {
  console.info(`${req.method} ${req.path}`);
  next();
}
```

Register middleware before the routes that need it. Error middleware uses four parameters: `(err, req, res, next)`. Avoid logging credentials, tokens, or sensitive request bodies.
