import { model, Schema, Types, Model } from 'mongoose';
import { Car } from '../interfaces';

const carSchema = new Schema<Car>(
  {
    color: {
      type: String,
      required: [ true, 'Color is required' ],
      trim: true,
      uppercase: true,
    },
    year: {
      type: Number,
      required: [ true, 'Year is required' ],
    },
    gas: {
      type: String,
      required: [ true, 'Gas is required' ],
      enum: ['Electric', 'Gasoline'],
    },
    description: {
      type: String,
      required: [ true, 'Description is required' ],
      trim: true,
    },
    price: {
      type: Number,
      required: [ true, 'Proce is required' ],
    },
    image: {
      type: String,
      default: '',
      trim: true,
    },
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CarModel = model<Car>('Car', carSchema)
export { CarModel };