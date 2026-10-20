# Mongoose Validation

Schema validation helps protect stored data from invalid values.

```js
const userSchema = new mongoose.Schema({
  displayName: { type: String, required: true, trim: true, maxlength: 80 },
  role: { type: String, enum: ["member", "admin"], default: "member" }
});
```

Validate request input before persistence as well. Update operations may need options such as `runValidators: true`; understand the behavior of the specific Mongoose operation you use.
