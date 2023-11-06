import mongoose from 'mongoose';

const URI = 'mongodb+srv://developer:EP2dJ1E10aQmWh3H@cluster0.wzpvdnu.mongodb.net/school';

export const init = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Database connected 🚀');
  } catch (error) {
    console.error('Error to connect to database 😨:', error.message);
  }
} 
