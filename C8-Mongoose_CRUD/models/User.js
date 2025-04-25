import e from "express";
import mongoose from "mongoose";

// mongoose schema creation
// structure of document object
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
// create model with structured schema
//                         SchemaName, Schema
const User = mongoose.model("User", userSchema);


// export to use it in app.js
export default User;