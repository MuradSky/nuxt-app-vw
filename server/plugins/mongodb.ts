import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
    const mongodbUri: string = process.env.MONGODB_URI || ''
  try {
    await mongoose.connect(mongodbUri);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error(e);
  }
}