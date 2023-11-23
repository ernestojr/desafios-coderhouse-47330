import mongoose from 'mongoose';

const URI = 'mongodb://localhost:27017/school';

export const init = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Database connected 🚀');
  } catch (error) {
    console.error('Error to connect to database 😨:', error.message);
  }
} 
