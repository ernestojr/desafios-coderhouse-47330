import mongoose from 'mongoose';

export const init = async () => {
  try {
    const URI = 'mongodb+srv://developer:EP2dJ1E10aQmWh3H@cluster0.wzpvdnu.mongodb.net/school';
    await mongoose.connect(URI);
    console.log('Database conected 🚀');
  } catch (error) {
    console.log('Ah ocurrido un error al intentar conectarnos a la DB', error.message);
  }
}