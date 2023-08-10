import { connect } from "mongoose";

export const connectDB = async () => {
    return await connect( `${ process.env.MONGO_URI }` );
}