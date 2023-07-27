import { Schema, model } from "mongoose";

const roleSchema = Schema(
    {
        role: {
            type: String,
            required: [ true, 'Role is required' ]
        },
        roleStatus: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model( 'Role', roleSchema );