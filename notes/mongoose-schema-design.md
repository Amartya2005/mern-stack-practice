# Mongoose Schema Design

A Mongoose schema defines document structure, validation, defaults, indexes, and middleware for a MongoDB collection.

## Design checklist
- Use appropriate field types and explicit required/enumeration rules.
- Add defaults only when they represent valid domain behavior.
- Model frequently accessed together data together, while considering document growth.
- Choose references when related entities change independently or have separate lifecycles.
- Add indexes for known query patterns and uniqueness constraints.

## Validation
Schema validation protects writes made through Mongoose, but it does not replace request validation or database-level constraints where available. Validate untrusted input at the API boundary too.

Keep schema definitions aligned with domain rules, not just the shape of the current UI.