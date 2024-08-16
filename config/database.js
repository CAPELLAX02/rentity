import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If the database already connected, do not connect again
  if (connected) {
    console.log('MongoDB is already connected.');
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(`Could not connect to MongoDB [${error}]`);
  }
};

export default connectDB;
