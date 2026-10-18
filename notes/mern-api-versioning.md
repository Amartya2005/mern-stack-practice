# REST API Versioning

Versioning gives clients a predictable contract while the server evolves.

## Practical guidance
- Prefer backward-compatible additions when possible.
- Avoid silently changing the meaning or type of existing fields.
- Choose one clear strategy, such as a URL prefix (`/api/v1`) or a documented header strategy.
- Validate and serialize responses consistently.
- Publish deprecation timelines and migration guidance for breaking changes.
- Test supported versions as part of CI.

Do not create a new version for every small feature. Version when compatibility requires it, and keep the contract documented so frontend and backend teams do not have to infer behavior from source code.