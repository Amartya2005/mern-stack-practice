use("ecommerce");

// Find all products
db.products.find();

// Readable result
db.products.find().pretty();

// Find contacts
db.contacts.find();

// Find one product
db.products.findOne({ name: "Wireless Mouse" });
