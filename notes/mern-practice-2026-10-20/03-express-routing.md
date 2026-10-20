# Express Route Organization

Separate route registration from business logic as an application grows.

A practical layout might be:

```text
src/
  routes/
  controllers/
  services/
  models/
  middleware/
```

Routes define endpoints, controllers translate HTTP requests and responses, services hold reusable business rules, and models handle persistence. Keep the structure proportional to project complexity rather than creating folders for sport.
