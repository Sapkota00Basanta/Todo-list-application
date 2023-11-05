// Module Definations
import mongoose from 'mongoose';
import logger from '../../helpers/logger';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_LOCAL_URI!);
    logger.info('Database connect successfully.');
  } catch (error: any) {
    logger.error(error.message);
    // Try to reconnect if possible
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
