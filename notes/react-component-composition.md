# React Component Composition

Composition builds complex interfaces from small components with clear responsibilities.

## Patterns
- Children: let a layout component wrap arbitrary content.
- Slots: pass named pieces such as a header, footer, or actions area as props.
- Compound components: coordinate related pieces through a shared parent or context.
- Custom hooks: extract reusable behavior without forcing a visual abstraction.

## Example
```jsx
function Panel({ title, children, actions }) {
  return (
    <section className="panel">
      <header><h2>{title}</h2>{actions}</header>
      <div>{children}</div>
    </section>
  );
}
```

Prefer composition over giant components with many boolean props. Keep abstractions tied to repeated needs rather than hypothetical future flexibility.