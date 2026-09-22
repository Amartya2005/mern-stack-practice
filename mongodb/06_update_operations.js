use("ecommerce");

// updateOne() with $set
db.products.updateOne(
  { name: "Wireless Mouse" },
  { $set: { price: 899 } }
);

// updateMany() with $inc
db.products.updateMany(
  { category: "Electronics" },
  { $inc: { stock: 10 } }
);
