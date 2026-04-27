// Problem 1: Student Record Management System

// Insert one student
db.students.insertOne({
  name: "Rahul",
  age: 20,
  department: "CSE",
  marks: 85,
  city: "Kolkata"
});

// Insert multiple students
db.students.insertMany([
  { name: "Priya", age: 21, department: "ECE", marks: 78, city: "Delhi" },
  { name: "Amit", age: 22, department: "CSE", marks: 90, city: "Mumbai" },
  { name: "Neha", age: 20, department: "IT", marks: 88, city: "Bangalore" },
  { name: "Arjun", age: 23, department: "ME", marks: 70, city: "Chennai" },
  { name: "Sneha", age: 21, department: "CSE", marks: 92, city: "Pune" }
]);

// Retrieve all students
db.students.find();

// Projection: name and marks
db.students.find({}, { _id: 0, name: 1, marks: 1 });

// Delete by name
db.students.deleteOne({ name: "Rahul" });
