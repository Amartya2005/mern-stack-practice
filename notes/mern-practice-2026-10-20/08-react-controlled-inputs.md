# Controlled Inputs in React

A controlled input gets its value from React state and updates that state in its change handler.

```jsx
const [title, setTitle] = useState("");

<input
  value={title}
  onChange={(event) => setTitle(event.target.value)}
/>
```

Keep the state update simple, validate before submission, and provide useful labels and error messages. Use stable values so inputs do not unexpectedly switch between controlled and uncontrolled modes.
