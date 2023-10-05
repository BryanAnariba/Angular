import { Car } from "../interfaces";
import { CarModel } from "../models";

export class CarService {

  async createNewCar( car: Car ): Promise<Car> {
    return await CarModel.create(car);
  }

  async getAllCars(limit: number =10,skip: number=0): Promise<Car[]> {
    return await CarModel.find({ status: true }).limit(limit).skip(skip).populate('user', 'email');
  }
  
  async getCar(carId: string): Promise<Car | null> {
    return await CarModel.findOne({_id: carId, status: true}).populate('user', 'email');
  }

  async editCarData( car: Car, carId: string ): Promise<Car | null> {
    return await CarModel.findByIdAndUpdate({ _id: carId }, car, { new: true });
  }

  async softDeleteCar( carId: string ): Promise<Car | null> {
    return await CarModel.findByIdAndUpdate({ _id: carId }, { status: false }, { new: true });
  }

}