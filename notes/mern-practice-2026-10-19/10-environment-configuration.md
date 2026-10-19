# Environment Configuration

Keep environment-specific values outside source code. Store database URLs, signing secrets, and API keys in environment variables or a managed secret store.

- Commit a `.env.example` containing placeholder values only.
- Ensure real `.env` files are ignored by Git.
- Validate required variables during startup.
- Rotate credentials that may have been exposed.

A frontend environment variable may be bundled into public assets; never put server secrets in client-side configuration.
