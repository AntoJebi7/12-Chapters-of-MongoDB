# 🛠️ MongoDB CRUD Operations in Shell (`mongosh`)

This guide covers basic CRUD (Create, Read, Update, Delete) operations using MongoDB Shell.

---

## 📁 Check Existing Databases

```
show dbs
```
Lists all databases.

## 📦 Create or Switch to a Database
```
use myDB
```
Creates or switches to myDB.

## 📂 Create a Collection (optional)
```
db.createCollection("users")
```
Creates a users collection.
📌 Note: MongoDB auto-creates collections when you insert data too.

## 📝 INSERT
## ➕ Insert One Document
```
db.users.insertOne({ name: "Alice", age: 25 })
```
## ➕ Insert Many Documents
```
db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
])
```
## 🔍 READ
## 🔎 Find One Document
```
db.users.findOne()
```
## 🔎 Find All Documents
```
db.users.find()
```
## 🔄 UPDATE
## 📝 Update One Document
```
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
)
```
## 📝 Update Multiple Documents
```
db.users.updateMany(
  { age: { $gt: 25 } },
  { $set: { status: "active" } }
)
```
## ❌ DELETE
## 🗑️ Delete One Document
```
db.users.deleteOne({ name: "Bob" })
```
## 🗑️ Delete Multiple Documents
```
db.users.deleteMany({ age: { $lt: 30 } })
```
## Summary
```yaml
show dbs → list databases

use dbname → create/switch database

insertOne, insertMany → add data

findOne, find → read data

updateOne, updateMany → modify data

deleteOne, deleteMany → remove data