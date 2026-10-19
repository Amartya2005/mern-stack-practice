# Mongoose Schema Design

A Mongoose schema defines document fields, types, validation, defaults, and indexes.

```js
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 120 },
  completed: { type: Boolean, default: false }
}, { timestamps: true });
```

Keep schema constraints close to the data model. Add indexes for common query patterns, but remember that every index costs storage and adds work to writes.
