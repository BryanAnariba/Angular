import { Schema, model } from 'mongoose';
import { Role } from '../interfaces/role.interface';

const roleSchema = new Schema<Role>(
    {
        roleName: {
            type: String,
            required: [ true, 'Role Name is required' ]
        },
        roleDescription: {
            type: String,
            required: [ true, 'Role Description is required' ]
        },
        roleStatus: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model<Role>( 'Role', roleSchema );
