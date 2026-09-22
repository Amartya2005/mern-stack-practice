use("ecommerce");

// Safe practice: inspect matching documents before deleting.

// Verify before deleting one
db.contacts.find({ name: "Alice" });

// Delete one
db.contacts.deleteOne({ name: "Alice" });

// Verify before deleting many
db.orders.find({ status: "Delivered" });

// Delete many
db.orders.deleteMany({ status: "Delivered" });
