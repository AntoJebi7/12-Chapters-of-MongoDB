// npm install mongoose, install driver package before importing
import mongoose from 'mongoose';

let database; // Database variable to hold the MongoDB connection
// db connection should be asynchronous
async function connectToDatabase() {
    // you can create db inside connection string like path
    mongoose.connect('mongodb+srv://Anto:anto123@cluster0.21nanem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log("Connected to database");
    }).catch(()=>{
        console.log("not connected");
    })
   
}
// Export the function to connect to the database and the ObjectId
export { connectToDatabase };
 