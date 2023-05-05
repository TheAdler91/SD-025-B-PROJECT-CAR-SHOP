import { Request, Response, NextFunction } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private _motorcycleService: MotorcycleService;
  private _res: Response;
  private _req: Request;
  private _next: NextFunction;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this._motorcycleService = new MotorcycleService();
    this._res = res;
    this._req = req;
    this._next = next;
  }

  public async createMotorcycle() {
    const { ...all } = this._req.body;
    try {
      const car = await this._motorcycleService.createMotorcycle({ ...all });
      this._res.status(201).json(car);
    } catch (error) {
      this._next(error);
    }
  }
} 

export default MotorcycleController;