# Password Storage

Never store plaintext passwords or reversible password encryption.

- Hash passwords with a password-hashing algorithm such as Argon2id or bcrypt.
- Use a maintained library with safe defaults.
- Do not write custom cryptography.
- Keep reset tokens short-lived and single-use.
- Rate-limit login and password-reset attempts.
- Avoid logging credentials, tokens, or full authentication headers.

A fast general-purpose hash such as plain SHA-256 is not appropriate for password storage.