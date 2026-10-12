# ES Modules

Use named exports for related utilities and default exports when a module has one primary value.

```js
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
```

Keep modules focused and avoid circular imports. In Node.js, configure the project for ESM or use the CommonJS syntax consistently.