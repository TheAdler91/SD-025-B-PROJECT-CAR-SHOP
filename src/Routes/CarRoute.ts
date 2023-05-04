import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post('/', (req, res, next) => 
  new CarController(req, res, next).createCar());

router.get('/', (req, res, next) =>
  new CarController(req, res, next).getAllCars());

router.get('/:id', (req, res, next) =>
  new CarController(req, res, next).getCarById());  

export default router;