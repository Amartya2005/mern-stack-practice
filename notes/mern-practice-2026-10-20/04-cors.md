# CORS Configuration

Cross-Origin Resource Sharing tells browsers which origins may read responses from a server. It is not authentication and does not stop non-browser clients from making requests.

- Allow only trusted frontend origins in production.
- Avoid wildcard origins when credentials are enabled.
- Handle preflight OPTIONS requests.
- Keep authorization checks on the server.

A permissive CORS policy is not a substitute for a security model.
