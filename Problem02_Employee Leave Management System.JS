// Problem 2: Employee Leave Management

db.employees.insertMany([
  { emp_id: 1, name: "Rahul", department: "Sales", total_leaves: 20, leaves_taken: 12, leaves_remaining: 8 },
  { emp_id: 2, name: "Priya", department: "Support", total_leaves: 18, leaves_taken: 17, leaves_remaining: 1 },
  { emp_id: 3, name: "Amit", department: "Sales", total_leaves: 22, leaves_taken: 10, leaves_remaining: 12 },
  { emp_id: 4, name: "Neha", department: "HR", total_leaves: 15, leaves_taken: 5, leaves_remaining: 10 },
  { emp_id: 5, name: "Arjun", department: "Support", total_leaves: 20, leaves_taken: 19, leaves_remaining: 1 }
]);

// More than 10 leaves
db.employees.find({ leaves_taken: { $gt: 10 } });

// Update Sales department
db.employees.updateMany(
  { department: "Sales" },
  [{ $set: { leaves_remaining: { $subtract: ["$total_leaves", "$leaves_taken"] } } }]
);

// Delete by emp_id
db.employees.deleteOne({ emp_id: 1 });

// Low leaves & Support
db.employees.find({
  leaves_remaining: { $lt: 2 },
  department: "Support"
});
