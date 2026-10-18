# React State Management

Keep state as close as possible to the components that use it.

## Choosing a pattern
- Local state: form inputs, toggles, and isolated UI state.
- Lifted state: sibling components that must stay in sync.
- Context: app-wide values such as theme or authenticated-user metadata.
- External state library: shared, complex client state when simpler patterns become hard to maintain.
- Server-state library: fetching, caching, retries, and invalidation for API data.

## Principles
- Store the minimum state needed; derive totals and filtered lists from existing data.
- Update arrays and objects immutably.
- Separate server data from temporary UI state.
- Give state one clear owner to avoid competing sources of truth.

Start simple. A global store for one modal is architecture cosplay.