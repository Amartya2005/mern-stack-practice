# API Rate Limiting

Rate limiting restricts how frequently a client can call an endpoint within a defined window. It helps reduce accidental overload and abuse.

## Design decisions
- Choose keys carefully: authenticated user, API key, IP address, or a combination.
- Apply stricter limits to expensive or abuse-prone routes such as login and password reset.
- Return HTTP 429 and a useful retry hint when appropriate.
- Use a shared store for distributed deployments; in-memory counters reset per process.
- Trust proxy headers only when the proxy chain is configured correctly.

Rate limits are not a replacement for authentication, authorization, input validation, or bot detection. Monitor legitimate traffic before setting thresholds.