# 🧵 MongoDB Shell and Drivers (Node.js)

Learn the difference between working with MongoDB via the CLI (`mongosh`) and using **Drivers** in code (like Node.js).

---

## ⚡ Shell (`mongosh`)

- CLI tool for direct interaction with MongoDB.
- Great for **quick learning**, testing queries, and exploring data.
- Fast feedback: no setup needed.
- Example:

```
use myDB
db.users.insertOne({ name: "John" })
db.users.find()
```
## 🔌 MongoDB Drivers
Used in backend languages (e.g., Node.js, Python, Java) to connect to MongoDB from your application.

Acts as a bridge between your code and the MongoDB database.

Enables full programmatic control.

Most common package for Node.js: mongodb (includes MongoClient).

## 📦 Install MongoDB Driver for Node.js

```
npm install mongodb
```

## 🚀 Quick Start (Node.js)
```
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('myDB');
    const users = db.collection('users');
    
    await users.insertOne({ name: 'Alice', age: 25 });
    const result = await users.find().toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```

## For docs:
🔗 visit : MongoDB Node.js Driver Quick Start