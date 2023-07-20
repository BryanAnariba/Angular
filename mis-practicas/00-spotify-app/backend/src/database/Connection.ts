import { connect } from "mongoose";

export const connectDB = async (): Promise<any> => {
    return await connect( `${ process.env.MONGO_URI }` );
}