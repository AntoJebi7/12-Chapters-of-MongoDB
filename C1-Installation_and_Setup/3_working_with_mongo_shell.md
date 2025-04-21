# 🧑‍💻 Working with MongoDB Shell (`mongosh`)

Follow these steps to start working with MongoDB using the shell.

---

## 🚪 1. Launch the Shell

1. Navigate to the **MongoDB Shell** directory (where `mongosh.exe` is located)
2. Open the `bin` folder
3. Double-click **`mongosh.exe`**

- Skip configuration if prompted  
- Press **Enter** to continue  
- You are now inside the MongoDB shell 🎉

---

## 💡 2. Basic Commands to Get Started

### 📂 Switch to or Create a Database

```
use myDatabase
```

## 🧾 Check Current Database

```
db
```
Returns the name of the currently selected database.

## 🧠 Insert a Document
```
db.myCollection.insertOne({ name: "Alice", age: 25 })
```
Adds a single document to myCollection.

## 🔍 Find One Document
```
db.myCollection.findOne()
```
Returns the first document it finds.

## 📃 Find All Documents
```
db.myCollection.find()
```
Returns all documents in the collection.

📌 Example Workflow

```
use usersDB

db.users.insertOne({ username: "john_doe", email: "john@example.com" })

db.users.findOne()

db.users.find()

```