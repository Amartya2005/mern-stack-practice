use("ecommerce");

// Filter by category
db.products.find({ category: "Electronics" });

// Filter by price
db.products.find({ price: 799 });

// Empty filter
db.products.find({});

// Greater than
db.products.find({ price: { $gt: 1000 } });

// Greater than or equal
db.products.find({ price: { $gte: 1000 } });

// Price range
db.products.find({
  price: {
    $gte: 1000,
    $lte: 50000
  }
});

// Logical OR
db.products.find({
  $or: [
    { category: "Electronics" },
    { stock: { $lt: 50 } }
  ]
});

// Logical AND
db.products.find({
  $and: [
    { category: "Electronics" },
    { stock: { $gte: 50 } }
  ]
});
