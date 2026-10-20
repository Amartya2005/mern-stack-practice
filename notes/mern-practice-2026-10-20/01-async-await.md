# Async/Await in Node.js

Async functions always return a promise. Use `await` to pause that function until a promise settles, and handle failures with `try/catch`.

```js
async function loadProfile(id) {
  try {
    return await Profile.findById(id);
  } catch (error) {
    throw new Error("Unable to load profile", { cause: error });
  }
}
```

Avoid swallowing errors silently. At API boundaries, translate known failures into safe HTTP responses and log unexpected failures on the server.
