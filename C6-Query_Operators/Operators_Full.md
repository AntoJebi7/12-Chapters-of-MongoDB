# 🧠 MongoDB Query Operators Cheat Sheet

MongoDB provides powerful **query operators** that let you filter documents with precision.

This guide covers:

- 🔍 Comparison Operators
- ⚖️ Logical Operators
- 🧪 Evaluation Operators

---

## 🔍 Comparison Operators

Used to compare values in fields.

| Operator | Description | Example |
|----------|-------------|---------|
| `$eq`    | Equals                | `{ price: { $eq: 100 } }` |
| `$ne`    | Not equal             | `{ status: { $ne: "shipped" } }` |
| `$gt`    | Greater than          | `{ age: { $gt: 30 } }` |
| `$gte`   | Greater than or equal | `{ score: { $gte: 90 } }` |
| `$lt`    | Less than             | `{ age: { $lt: 18 } }` |
| `$lte`   | Less than or equal    | `{ price: { $lte: 500 } }` |
| `$in`    | Value in array        | `{ color: { $in: ["red", "blue"] } }` |
| `$nin`   | Value not in array    | `{ type: { $nin: ["expired", "archived"] } }` |

🎯 **Example**: Find items that cost more than 50 and less than 150
```
db.items.find({ price: { $gt: 50, $lt: 150 } })
```

### ⚖️ Logical Operators
Used to combine multiple conditions.

```
Operator	Description	                                Example

$and	    All conditions must be true	            { $and: [ { age: { $gt: 20 } }, { active: true } ] }
$or	        At least one condition is true	        { $or: [ { role: "admin" }, { role: "editor" } ] }
$not	    Inverts a condition	                    { age: { $not: { $gte: 18 } } }
$nor	    None of the conditions are true	        { $nor: [ { banned: true }, { suspended: true } ] }

```

🧩 Example: Find users who are either under 18 or over 60

```
db.users.find({ $or: [ { age: { $lt: 18 } }, { age: { $gt: 60 } } ] })
```

### 🧪 Evaluation Operators
Used to evaluate field values with conditions like regex or expressions.

```
Operator	Description	                                    Example
$regex	    Match using regular expression	            { name: { $regex: "^A", $options: "i" } }
$expr	    Use aggregation expressions in queries	    { $expr: { $gt: ["$spend", "$budget"] } }
$mod	    Modulus (remainder) match	                { qty: { $mod: [4, 0] } } // divisible by 4
$text	    Full-text search (needs text index)	        { $text: { $search: "mongodb tutorial" } }
```
🔍 Example: Find documents where the name starts with "J"

```
db.users.find({ name: { $regex: "^J", $options: "i" } })
```
🧠 Example: Compare two fields using $expr

```
db.orders.find({ $expr: { $gt: ["$amountPaid", "$amountDue"] } })
```