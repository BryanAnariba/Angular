import mongoose from "mongoose";

export const connectMe = async () => {
  return await mongoose.connect(`${process.env.MONGODB}`)
}