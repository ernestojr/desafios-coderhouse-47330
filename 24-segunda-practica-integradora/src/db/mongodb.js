import mongoose from 'mongoose';

export const init = async () => {
  try {
    const URI = 'mongodb://localhost:27017/school';
    await mongoose.connect(URI);
    console.log('Conectados a la DB 👽');
  } catch (error) {
    console.error('Ha ocurrido un error durantela conexion a la db 😨')
  }
}