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

  public async getAllCars() {
    try {
      const cars = await this._carService.getAllCars();
      this._res.status(200).json(cars);
    } catch (error) {
      this._next(error);
    }
  }

  public async getCarById() {
    const { id } = this._req.params;
    try {
      const car = await this._carService.getCarById(id);
      this._res.status(200).json(car);
    } catch (error) {
      this._next(error);
    }
  }

  public async updateCar() {
    const { id } = this._req.params;
    const { ...all } = this._req.body;
    try {
      const car = await this._carService.updateCar(id, { ...all });
      this._res.status(200).json(car);
    } catch (error) {
      this._next(error);
    }
  }

  public async deleteCar() {
    const { id } = this._req.params;
    try {
      await this._carService.deleteCar(id);
      this._res.status(204).json();
    } catch (error) {
      this._next(error);
    }
  }
}

export default CarController;