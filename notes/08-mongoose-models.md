# Mongoose Models

A Mongoose schema defines document structure, validation, and behavior. A model provides methods for querying and writing documents.

```js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

export const Task = mongoose.model("Task", taskSchema);
```

Validate at the API boundary too. Database schemas do not replace authorization or request validation.