import { Request, Response, NextFunction } from 'express';
import CarService from '../Services/CarService';

class CarController {
  private _carService: CarService;
  private _res: Response;
  private _req: Request;
  private _next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._carService = new CarService();
    this._res = res;
    this._req = req;
    this._next = next;
  }

  public async createCar() {
    const { ...all } = this._req.body;
    try {
      const car = await this._carService.createCar({ ...all });
      this._res.status(201).json(car);
    } catch (error) {
      this._next(error);
    }
  }
}

export default CarController;