# Authentication vs Authorization

**Authentication** answers: who is making this request? **Authorization** answers: may that identity perform this action on this resource?

A secure request flow commonly:
1. Verifies the session or token.
2. Loads the relevant user identity.
3. Checks the required role or resource ownership.
4. Executes the operation only after the checks pass.

Hiding a button in the UI is not authorization. Enforce permissions in the backend on every protected operation.