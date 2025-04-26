# MongoDB: Projections, Default Fields, Limit, Skip, and Sort

This guide explains how to use **projections** to control which fields appear in query results using the `mongosh` CLI. It also covers how to use `limit()`, `skip()`, and `sort()`.

## What is a Projection?

A **projection** specifies which fields to include or exclude in the documents returned by a query.

### Syntax
```
db.collection.find(query, projection)
```
Examples
Sample Collection: products

{ "_id": 1, "name": "Laptop", "price": 1200, "stock": 15 }
{ "_id": 2, "name": "Phone", "price": 800, "stock": 30 }
{ "_id": 3, "name": "Tablet", "price": 600, "stock": 20 }
## 1. Include Specific Fields
Only show name and price:

```
db.products.find({}, { name: 1, price: 1 })


Output:


{ "_id": 1, "name": "Laptop", "price": 1200 }
{ "_id": 2, "name": "Phone", "price": 800 }
```
## 2. Exclude Fields
Exclude the stock field:

```
db.products.find({}, { stock: 0 })
```
## 3. Remove _id Field (default is included)
```
db.products.find({}, { name: 1, _id: 0 })
Output:


{ "name": "Laptop" }
{ "name": "Phone" }
⚠️ You can't mix inclusion and exclusion (except _id).
```

### limit(), skip(), and sort()
## 1. Limit Number of Results
Return only the first 2 results:

```
db.products.find().limit(2)
```
### 2. Skip Documents
Skip the first result and return the next:

```
db.products.find().skip(1).limit(1)
```
### 3. Sort Documents
## Sort by price in ascending order:

```
db.products.find().sort({ price: 1 })
```
## Sort by stock in descending order:

```
db.products.find().sort({ stock: -1 })
```
## You can chain these:
```
db.products.find({}, { name: 1, price: 1 }).sort({ price: -1 }).limit(2)
```