import mongoose, { model, Schema } from "mongoose";

const userSchema = Schema(
    {
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
            require: [ true, 'User Name is required' ],
            unique: true
        },
        email: {
            type: String,
            require: [ true, 'User Email is required' ],
            unique: true
        },
        password: {
            type: String,
            required: [ true, 'Password is required' ]
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profileImage: {
            type: String,
            required: false,
            default: 'https://cdn-icons-png.flaticon.com/512/149/149071.png?w=740&t=st=1690292917~exp=1690293517~hmac=e9c77fccb73255e9bb90fe78f04792fd55a3270f92e5d1f9b054b51f4fa42302'
        },
        role: {
            type: Schema.Types.ObjectId,
            required: [ true, 'Role is required' ],
            ref: 'Role'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model( 'User', userSchema );