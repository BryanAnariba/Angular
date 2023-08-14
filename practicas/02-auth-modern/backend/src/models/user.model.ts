import { Schema, Types, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
    {
        role: {
            type: Types.ObjectId,
            ref: "Role",
            required: [ true, "Role is required" ]
        },
        firstName: {
            type: String,
            required: [ true, 'First Name is required' ]
        },
        lastName: {
            type: String,
            required: [ true, 'Last Name is required' ]
        },
        userName: {
            type: String,
            required: [ true, 'Username Name is required' ],
            unique: true
        },
        email: {
            type: String,
            required: [ true, 'Email is required' ],
            unique: true
        },
        password: {
            type: String,
            required: [ true, 'Password is required' ]
        },
        profileImage: {
            type: String,
            required: false,
            default: 'https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?w=740&t=st=1691942275~exp=1691942875~hmac=31fe5ea0e62eef4fcaf00bbbb9d7e9f6091b51d1aa117feb2792824b81db373d'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model<User>('User', userSchema);