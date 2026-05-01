// db.js
import mongoose from "mongoose";

  const connectDB = async (mongoURL) => {
  try {
    if (!mongoURL) {
      throw new Error("MongoDB URL not provided");
    }

    const conn = await mongoose.connect(mongoURL)

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
export default connectDB;