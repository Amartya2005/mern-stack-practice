# Secure File Uploads

File uploads accept untrusted input and should be treated as a security boundary.

## Checklist
- Enforce file-size and request-size limits.
- Allowlist supported file types and inspect content signatures where practical.
- Generate server-side filenames instead of trusting supplied paths.
- Store uploads outside executable application directories or in object storage.
- Require authorization for private files and use short-lived signed URLs where suitable.
- Scan files when the threat model requires it.
- Avoid exposing raw filesystem paths or internal storage keys.

Do not trust a filename extension or client-provided MIME type alone. Stream large files where possible and clean up abandoned uploads.