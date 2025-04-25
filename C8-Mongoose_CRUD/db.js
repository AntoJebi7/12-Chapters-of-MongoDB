// npm install mongoose, install driver package before importing
import mongoose from 'mongoose';

let database; // Database variable to hold the MongoDB connection

// db connection should be asynchronous
async function connectToDatabase() {
    // you can create db inside connection string like path
    mongoose.connect('mongodb://localhost:27017/UserServer_New').then(()=>{
        console.log("Connected to database");
    }).catch(()=>{
        console.log("not connected");
    })
   
}
// Export the function to connect to the database and the ObjectId
export { connectToDatabase };
 