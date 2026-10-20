# JWT Security Checklist

- Verify tokens with a trusted library and an explicit algorithm policy.
- Validate issuer, audience, expiry, and relevant claims.
- Keep signing keys out of source control.
- Use short-lived access tokens where appropriate.
- Plan revocation or refresh-token rotation deliberately.
- Never trust client-supplied claims without signature and claim validation.

A decoded JWT is not necessarily a verified JWT. Base64 decoding is not a security feature.
