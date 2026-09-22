use("ecommerce");

// Insert One Document
db.products.insertOne({
  name: "Wireless Mouse",
  price: 799,
  category: "Electronics",
  stock: 120
});

// Check the inserted document
db.products.findOne({ name: "Wireless Mouse" });

// Insert Many Documents
db.products.insertMany([
  {
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    stock: 120,
    ratings: 4.5,
    tags: ["computer", "accessory", "wireless"],
    createdAt: new Date()
  },
  {
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
    stock: 80,
    ratings: 4.8,
    tags: ["keyboard", "mechanical"],
    createdAt: new Date()
  },
  {
    name: "Gaming Laptop",
    price: 85999,
    category: "Computers",
    stock: 30,
    ratings: 4.6,
    tags: ["gaming", "laptop"],
    createdAt: new Date()
  }
]);
