// Problem 4: Hospital Patient System

db.patients.insertMany([
  { patient_id: 1, name: "Rahul", age: 65, admission_date: new Date("2026-01-01"), discharge_date: new Date("2026-01-10"), diagnosis: "Diabetes", treatment_cost: 10000, insurance_covered: false, bill_amount: 10000 },
  { patient_id: 2, name: "Priya", age: 45, admission_date: new Date("2026-02-01"), discharge_date: new Date("2026-02-05"), diagnosis: "Flu", treatment_cost: 3000, insurance_covered: true, bill_amount: 0 },
  { patient_id: 3, name: "Amit", age: 70, admission_date: new Date("2026-03-01"), discharge_date: new Date("2026-03-10"), diagnosis: "Diabetes", treatment_cost: 12000, insurance_covered: false, bill_amount: 12000 },
  { patient_id: 4, name: "Neha", age: 30, admission_date: new Date("2019-01-01"), discharge_date: new Date("2019-01-10"), diagnosis: "Cold", treatment_cost: 1000, insurance_covered: false, bill_amount: 0 },
  { patient_id: 5, name: "Arjun", age: 50, admission_date: new Date("2026-04-01"), discharge_date: new Date("2026-04-05"), diagnosis: "Fever", treatment_cost: 2000, insurance_covered: true, bill_amount: 0 }
]);

// Total pending bill
db.patients.aggregate([
  { $match: { insurance_covered: false } },
  { $group: { _id: null, total_pending: { $sum: "$bill_amount" } } }
]);

// Add 10% cost
db.patients.updateMany(
  {
    age: { $gt: 60 },
    diagnosis: { $regex: "Diabetes" }
  },
  { $mul: { treatment_cost: 1.1 } }
);

// Delete old zero bill
db.patients.deleteMany({
  discharge_date: { $lt: new Date("2020-01-01") },
  bill_amount: 0
});

// Avg cost by diagnosis
db.patients.aggregate([
  { $group: { _id: "$diagnosis", avg_cost: { $avg: "$treatment_cost" } } },
  { $sort: { avg_cost: -1 } }
]);
