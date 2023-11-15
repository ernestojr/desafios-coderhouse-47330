import mongoose from 'mongoose';

export const URI = 'mongo uri';

export const init = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Database is ok 🚀');
  } catch (error) {
    console.error('Ha ocurrido un problema al tratar de acceder a la mongodb 😨', error.message);
  }
};