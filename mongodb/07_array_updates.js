use("ecommerce");

// Add a value to the tags array
db.products.updateOne(
  { name: "Wireless Mouse" },
  { $push: { tags: "new" } }
);
