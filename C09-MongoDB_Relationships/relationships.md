### 📚 MongoDB Relationships Explained
A quick, colorful guide to handling One-to-One, One-to-Many, and Many-to-Many relationships in MongoDB using $lookup.


## 🧩 1. One-to-One Relationship
Definition:
One document in a collection relates to one document in another collection.

## Example:

Let's say we have a customers collection and a phones collection:
```
// customers
{ _id: 1, name: "Alice" }

// phones
{ _id: 101, number: "123-456-7890", customer_id: 1 }
💡 To join them together:
```
```
db.customers.aggregate([
  {
    $lookup: {
      from: "phones",
      localField: "_id",
      foreignField: "customer_id",
      as: "customer_contact"
    }
  }
])
```
## 🔹 Result:
```
{
  _id: 1,
  name: "Alice",
  customer_contact: [
    { _id: 101, number: "123-456-7890", customer_id: 1 }
  ]
}
```
## 🌳 2. One-to-Many Relationship
Definition:
One document relates to many documents in another collection.

Example:

Imagine authors writing multiple books:
```
// authors
{ _id: 1, name: "J.K. Rowling" }

// books
{ _id: 201, title: "Harry Potter 1", author_id: 1 }
{ _id: 202, title: "Harry Potter 2", author_id: 1 }
```
## 🔹 To join:
```
db.authors.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "_id",
      foreignField: "author_id",
      as: "written_books"
    }
  }
])
```
## 🔹 Result:
```
{
  _id: 1,
  name: "J.K. Rowling",
  written_books: [
    { _id: 201, title: "Harry Potter 1", author_id: 1 },
    { _id: 202, title: "Harry Potter 2", author_id: 1 }
  ]
}
```
## 🕸️ 3. Many-to-Many Relationship
Definition:
Multiple documents in a collection relate to multiple documents in another collection.

Example:

Think of students enrolling in multiple courses:
```
// students
{ _id: 1, name: "John" }
{ _id: 2, name: "Emma" }

// courses
{ _id: 301, title: "Math" }
{ _id: 302, title: "Science" }

// enrollment
{ student_id: 1, course_id: 301 }
{ student_id: 1, course_id: 302 }
{ student_id: 2, course_id: 301 }

```

## 🔹 To join (step-by-step):

First, link students to enrollment:
```
db.students.aggregate([
  {
    $lookup: {
      from: "enrollment",
      localField: "_id",
      foreignField: "student_id",
      as: "enrollments"
    }
  }
])
```
Then, optionally, nested lookup to fetch course details too!

## Result:
```
[
  {
    _id: 1,
    name: "John",
    enrollments: [
      { student_id: 1, course_id: 301 },
      { student_id: 1, course_id: 302 }
    ]
  },
  {
    _id: 2,
    name: "Emma",
    enrollments: [
      { student_id: 2, course_id: 301 }
    ]
  }
]
```

## 📢 Quick Tip

MongoDB $lookup works only if the collections are in the same database.
For cross-database joins, use "from": "<db>.<collection>" in MongoDB 4.4+ 🚀.