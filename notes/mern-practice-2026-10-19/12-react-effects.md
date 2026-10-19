# React Effects

Use `useEffect` to synchronize a component with an external system, such as a subscription or browser API. It is not a general-purpose place to calculate derived render values.

- Include reactive dependencies used by the effect.
- Clean up subscriptions and event listeners.
- Handle stale requests when components unmount or inputs change.
- Avoid effects that repeatedly update their own dependencies.

Prefer event handlers for work triggered directly by a user action.
