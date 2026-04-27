// Problem 3: Food Delivery Order Tracker

db.orders.insertMany([
  { order_id: 1, customer_name: "Rahul", restaurant: "Dominos", items: ["Pizza","Coke"], total_amount: 400, status: "Pending", order_date: new Date("2025-01-01") },
  { order_id: 2, customer_name: "Priya", restaurant: "KFC", items: ["Burger"], total_amount: 250, status: "Delivered", order_date: new Date("2025-03-01") },
  { order_id: 3, customer_name: "Amit", restaurant: "Pizza Hut", items: ["Pizza"], total_amount: 350, status: "Pending", order_date: new Date("2025-01-15") },
  { order_id: 4, customer_name: "Neha", restaurant: "McD", items: ["Fries"], total_amount: 150, status: "Pending", order_date: new Date("2024-12-01") },
  { order_id: 5, customer_name: "Arjun", restaurant: "Dominos", items: ["Pizza","Pasta"], total_amount: 500, status: "Delivered", order_date: new Date("2025-02-10") }
]);

// Pending & amount > 300
db.orders.find({
  status: "Pending",
  total_amount: { $gt: 300 }
});

// Update delivered
db.orders.updateMany(
  { order_date: { $lt: new Date("2025-02-01") } },
  { $set: { status: "Delivered" } }
);

// Delete order
db.orders.deleteOne({ order_id: 2 });

// Items contain Pizza
db.orders.find({
  items: "Pizza"
});
