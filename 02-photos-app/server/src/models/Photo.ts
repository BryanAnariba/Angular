import { Schema, model } from 'mongoose';
import { IPhoto } from '../interfaces/IPhoto';

const PhotoSchema = new Schema({
    title: {
        type: String,
        required: [ true, 'Title is required' ]
    },
    description: {
        type: String,
        required: [ true, 'Title is required' ]
    },
    imagePath: {
        type: String,
    }
},{
    timestamps: true,
    versionKey: false,
});

export default model<IPhoto>( 'Photo', PhotoSchema );