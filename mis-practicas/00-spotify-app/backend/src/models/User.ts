import { Schema, model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const userSchema = new Schema<User>({
    nombreUsuario: {
        type: String,
        required: [ true, 'Nombre Usuario is required' ]
    },
    playlists: Array
},{
    timestamps: true,
    versionKey: false
});

export default model<User>( 'User', userSchema );