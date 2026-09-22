# MongoDB Operations from MongoDB_task.pdf

This repository implements the MongoDB commands and practical examples shown in `MongoDB_task.pdf`.

## Database

All operations use the `ecommerce` database.

Collections referenced by the PDF:
- `products`
- `orders`
- `contacts`
- `sales`

## Requirements

- MongoDB server
- `mongosh`

The PDF gives a local connection example at `mongodb://localhost:27010`. Use the port that matches your MongoDB instance.

## Run

Open `mongosh` and run the scripts in order:

```bash
mongosh mongodb://localhost:27010/ecommerce
load("mongodb/01_mongodb_fundamentals.js")
load("mongodb/02_insert_operations.js")
load("mongodb/03_find_operations.js")
load("mongodb/04_filtering_and_operators.js")
load("mongodb/05_projection_sort_limit.js")
load("mongodb/06_update_operations.js")
load("mongodb/07_array_updates.js")
load("mongodb/08_delete_operations.js")
```

## PDF-to-code mapping

| PDF topic | File |
|---|---|
| Basic database and collection commands | `01_mongodb_fundamentals.js` |
| insertOne(), insertMany(), arrays, dates | `02_insert_operations.js` |
| find(), findOne() | `03_find_operations.js` |
| Filtering and comparison/logical operators | `04_filtering_and_operators.js` |
| Projection, sort(), limit() | `05_projection_sort_limit.js` |
| updateOne(), updateMany(), $set, $inc | `06_update_operations.js` |
| Array updates with $push | `07_array_updates.js` |
| deleteOne(), deleteMany() | `08_delete_operations.js` |
