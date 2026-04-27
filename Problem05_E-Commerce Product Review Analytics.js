// Problem 5: Product Review Analytics

db.reviews.insertMany([
  { review_id: 1, product_name: "Phone", product_category: "Electronics", user_name: "Rahul", rating: 5, helpful_count: 10, verified_purchase: true, review_date: new Date("2026-01-01") },
  { review_id: 2, product_name: "Shoes", product_category: "Fashion", user_name: "Priya", rating: 4, helpful_count: 5, verified_purchase: true, review_date: new Date("2026-02-01") },
  { review_id: 3, product_name: "Laptop", product_category: "Electronics", user_name: "Amit", rating: 3, helpful_count: 2, verified_purchase: false, review_date: new Date("2026-03-01") },
  { review_id: 4, product_name: "Watch", product_category: "Accessories", user_name: "Neha", rating: 1, helpful_count: 0, verified_purchase: false, review_date: new Date("2023-01-01") },
  { review_id: 5, product_name: "Tablet", product_category: "Electronics", user_name: "Arjun", rating: 5, helpful_count: 8, verified_purchase: true, review_date: new Date("2026-04-01") }
]);

// Create index
db.reviews.createIndex({ product_category: 1, rating: 1 });

// Avg rating (min 3 reviews)
db.reviews.aggregate([
  { $group: { _id: "$product_category", avg_rating: { $avg: "$rating" }, count: { $sum: 1 } } },
  { $match: { count: { $gte: 3 } } }
]);

// Mark suspicious
db.reviews.updateMany(
  { verified_purchase: false },
  { $set: { suspicious_review: true } }
);

// Delete bad reviews
db.reviews.deleteMany({
  rating: 1,
  helpful_count: 0,
  review_date: { $lt: new Date("2024-01-01") }
});
