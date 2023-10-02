import { Request, Response } from "express";
import { errorHandle } from "../utils";
import { Car } from "../interfaces";
import { CarService } from "../services/cars.service";

export class CarController {

  private static statusCode: number = 0;

  public static async getItem (req: Request, res: Response): Promise<Response> {
    try {
      const { cardId } = req.params;
      const carService = new CarService();
      const dbResponse = await carService.getCar(cardId);
      if ( !dbResponse ) {
        CarController.statusCode = 400;
        throw new Error(`This car does not exists!`);
      }
      return res.status(200).json(dbResponse);
    } catch (e) {
      CarController.statusCode = ( CarController.statusCode !== 0) ? CarController.statusCode : 500;
      return errorHandle(res, CarController.statusCode, e);
    }
  }

  public static async getItems (req: Request, res: Response): Promise<Response> {
    try {
      const { limit, skip } = req.query;
      const carService = new CarService();
      const dbResponse = await carService.getAllCars(Number(limit), Number(skip));
      return res.status(200).json(dbResponse);
    } catch (e) {
      CarController.statusCode = ( CarController.statusCode !== 0) ? CarController.statusCode : 500;
      return errorHandle(res, CarController.statusCode, e);
    }
  }

  public static async postItem (req: Request, res: Response): Promise<Response> {
    try {
      const { color, year, description, gas, price, image = '' }: Car = req.body;
      const carService = new CarService();
      const dbResponse = await carService.createNewCar({ color, year, description, gas, price, image, status: true });
      return res.status(201).json(dbResponse);
    } catch (e) {
      CarController.statusCode = ( CarController.statusCode !== 0) ? CarController.statusCode : 500;
      return errorHandle(res, CarController.statusCode, e);
    }
  }

  public static async putItem (req: Request, res: Response): Promise<Response> {
    try {
      const { cardId } = req.params;
      const { color, year, description, gas, price, image = '' }: Car = req.body;
      const carService = new CarService();
      const dbResponse = await carService.editCarData({ color, year, description, gas, price, image, status: true }, cardId);
      return res.status(201).json(dbResponse);
    } catch (e) {
      CarController.statusCode = ( CarController.statusCode !== 0) ? CarController.statusCode : 500;
      return errorHandle(res, CarController.statusCode, e);
    }
  }

  public static async deletetItem (req: Request, res: Response): Promise<Response> {
    try {
      const { cardId } = req.params;
      const carService = new CarService();
      const dbResponse = await carService.softDeleteCar(cardId);
      return res.status(201).json(dbResponse);
    } catch (e) {
      CarController.statusCode = ( CarController.statusCode !== 0) ? CarController.statusCode : 500;
      return errorHandle(res, CarController.statusCode, e);
    }
  }

}