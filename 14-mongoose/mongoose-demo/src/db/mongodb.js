import mongoose from 'mongoose';

export const init = async () => {
  try {
    const URI = 'mongodb://localhost:27017/ecommerce';
    await mongoose.connect(URI);
    console.log('Database connected 🚀');
  } catch (error) {
    console.error('Error to connect to database', error.message);
  }
};
