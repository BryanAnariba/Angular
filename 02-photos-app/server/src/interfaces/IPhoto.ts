import { Document } from 'mongoose';

interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string;
}

export {
    IPhoto,
}