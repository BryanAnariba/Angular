import { model, Schema } from 'mongoose';
import { Car } from '../interfaces';

const carSchema = new Schema<Car>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [ true, 'User is required' ]
    },
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
    status: {
      type: Boolean,
      default: true
    },
    image: {
      type: String,
      default: '',
      trim: true,
    },
    path: {
      type: String,
      default: '',
      trim: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CarModel = model<Car>('Car', carSchema)
export { CarModel };