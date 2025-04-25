# MongoDB: Finding Data with `mongosh` CLI and Using Cursors

This guide shows how to find data in MongoDB using the `mongosh` CLI, along with how cursors work and how to use them effectively.

## Getting Started

### Open `mongosh`
Start your MongoDB shell with:
```
mongosh
```

## Connect to a specific database:

use myDatabase

## Finding Documents

## Basic find() Query
To find all documents in a collection:

```
db.users.find()
This returns a cursor, not an array. You can iterate through it using .forEach() or methods like .toArray().
```

## Example Documents
Let's say the users collection has:
```
json

{ "_id": 1, "name": "Alice", "age": 30 }
{ "_id": 2, "name": "Bob", "age": 25 }
{ "_id": 3, "name": "Charlie", "age": 35 }

```

## Query with a Condition
Find users older than 30:

```
db.users.find({ age: { $gt: 30 } })
```

## Using Cursors
Store Cursor in a Variable
```
let cursor = db.users.find({ age: { $gt: 25 } })
```

## Loop Through Cursor

```
cursor.forEach(doc => printjson(doc))
```

## Convert Cursor to Array
```
let results = cursor.toArray()
print(results.length)
```
## Limit Results
```
db.users.find().limit(2)
```
## Sort Results
```
db.users.find().sort({ age: 1 }) // ascending
```
