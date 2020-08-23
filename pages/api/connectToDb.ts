import mongoose from "mongoose";

export default async () => {
  try {
    if (mongoose.connections[0].readyState) return;

    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      err => console.log(err)
    )
  }
  
  catch(err) {
    console.log(err)
  }
}