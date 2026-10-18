# React Hooks

Hooks let function components use React features such as state and effects.

## Core hooks
- `useState`: stores local component state and provides a setter.
- `useEffect`: synchronizes with external systems; declare every reactive dependency it uses.
- `useRef`: keeps a mutable value that does not trigger a render.
- `useMemo` and `useCallback`: cache values or functions when profiling shows a real benefit.

## Good practices
1. Call hooks at the top level, never inside loops or conditions.
2. Keep effects focused on external synchronization, not derived state.
3. Clean up subscriptions, timers, and event listeners in effect cleanup.
4. Avoid memoization by default; measure before adding complexity.

## Common pitfall
An effect that updates a dependency it watches can create a render loop. Check the dependency list and whether the state can be derived during render instead.