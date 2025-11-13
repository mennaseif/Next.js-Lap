import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/shopdb";

if (!MONGODB_URI) {
  throw new Error("MongoDB URI not found");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
}
