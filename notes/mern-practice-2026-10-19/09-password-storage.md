# Password Storage

Never store plaintext passwords or reversible password encryption. Use a password-hashing function designed for credentials, such as Argon2id or bcrypt, with appropriate parameters and unique salts.

Additional safeguards:
- Rate-limit login attempts.
- Avoid revealing whether an account exists.
- Keep password-reset tokens short-lived and single-use.
- Never log passwords or reset tokens.
