use("ecommerce");

// Projection: show only name and price, hide _id
db.products.find(
  {},
  {
    name: 1,
    price: 1,
    _id: 0
  }
);

// Sort by price descending and return the top two
db.products.find()
  .sort({ price: -1 })
  .limit(2);
