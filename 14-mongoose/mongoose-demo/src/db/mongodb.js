import mongoose from 'mongoose';

export const init = async () => {
  try {
    const URI = 'mongodb+srv://developer:EP2dJ1E10aQmWh3H@cluster0.wzpvdnu.mongodb.net/ecommerce';
    await mongoose.connect(URI);
    console.log('Database connected 🚀');
  } catch (error) {
    console.error('Error to connect to database', error.message);
  }
};
