# Refresh Token Rotation

Short-lived access tokens limit the impact of token theft. Refresh tokens allow a session to obtain new access tokens without asking the user to sign in repeatedly.

## Rotation flow
1. Client sends its refresh token over HTTPS.
2. Server validates the token and its session record.
3. Server invalidates the old refresh token and issues a new one.
4. Server detects reuse of an invalidated token and can revoke the token family/session.

## Security notes
- Store refresh tokens securely and avoid exposing them to JavaScript when an HttpOnly cookie design is suitable.
- Use Secure and appropriate SameSite cookie settings.
- Protect cookie-based refresh endpoints against CSRF.
- Support logout and session revocation.
- Never put secrets in browser local storage by default without understanding the XSS risk.

Rotation needs server-side state; a self-contained JWT alone cannot provide reliable reuse detection.