import mongoose from 'mongoose';

const { MONGODB_URI, MONGODB_DB } = process.env;
console.log(MONGODB_DB, MONGODB_URI);
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

export default async (): Promise<void> => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log('Conectado');
      return;
    }

    await mongoose.connect(
      MONGODB_URI,
      {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true,
      },
      () => console.log(`Connected on: ${MONGODB_DB}`)
    );
  } catch (err) {
    console.log(err);
  }
};
