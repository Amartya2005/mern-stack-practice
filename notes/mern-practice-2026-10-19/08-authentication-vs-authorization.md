# Authentication vs Authorization

**Authentication** establishes who the user is. **Authorization** decides what that user is allowed to do.

A protected route should verify identity and then check permission for the specific action and resource. Never rely on a hidden button or a client-side role check as the security boundary. Deny access by default when permissions are unclear.
