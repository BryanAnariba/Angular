import mongoose from 'mongoose';

export const connectMe = async () => {
    return mongoose.connect( process.env.MONGODB );
}