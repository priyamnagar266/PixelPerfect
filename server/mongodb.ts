import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/webAgency';
console.log('MongoDB URI:', MONGODB_URI);

// MongoDB connection with mongoose
export async function connectToDatabase() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully via Mongoose');
    return mongoose.connection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.warn('Running in fallback mode without MongoDB. Some features may be limited.');
    // Don't exit the process, allow the app to continue without MongoDB
    return null;
  }
}

// MongoDB connection with native driver (alternative method)
let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToMongoDB() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db();
    
    cachedClient = client;
    cachedDb = db;
    
    console.log('MongoDB connected successfully via native driver');
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

// Initialize connection on import
connectToDatabase().catch(console.error);