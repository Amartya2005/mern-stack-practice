# Logging and Monitoring

Useful application logs help diagnose failures without collecting unnecessary personal data.

- Prefer structured logs with severity and timestamps.
- Record request IDs, route names, latency, and safe error context.
- Never log passwords, access tokens, session cookies, or secret environment values.
- Track error rates and slow endpoints.
- Add health checks that distinguish process health from dependency health.

Use log levels consistently so production incidents are easier to investigate.