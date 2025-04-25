// npm install mongodb, install driver package before importing
import { MongoClient, ObjectId } from 'mongodb';

let database; // Database variable to hold the MongoDB connection

// db connection should be asynchronous
async function connectToDatabase() {
    if (database) {
        console.log('Already connected to the database');
        return database; // If already connected, return the existing connection
    }

    try {
        // Connecting to MongoDB with the provided connection string
        const client = await MongoClient.connect('mongodb://localhost:27017', {
        });

        database = client.db('UserServer'); // Specify the database name

        if (!database) {
            throw new Error('Failed to connect to the database');
        }

        console.log('Connected to MongoDB');
        return database; // Return the database instance
    } catch (err) {
        console.error('Error connecting to the database:', err);
        throw err; // Rethrow error for further handling
    }
}

// Export the function to connect to the database and the ObjectId
export { connectToDatabase, ObjectId };
