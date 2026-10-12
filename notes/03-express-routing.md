# Express Routing

Routes map an HTTP method and path to request-handling logic.

```js
import express from "express";
const router = express.Router();

router.get("/", (req, res) => res.json({ items: [] }));
router.get("/:id", getItemById);

export default router;
```

Mount feature routers with `app.use("/api/items", itemRouter)`. Keep routing declarations separate from database access and business rules as the app grows.