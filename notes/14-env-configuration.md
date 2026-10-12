# Environment Configuration

Keep environment-specific settings outside source code.

Examples include database URLs, session secrets, and third-party API keys. Commit a `.env.example` containing placeholder values, never real secrets. Ensure local secret files are ignored by Git and rotate any credential that was accidentally committed.

Validate required variables at startup and fail with a clear configuration error rather than crashing later during a request.