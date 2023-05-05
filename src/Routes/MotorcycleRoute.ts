import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post('/', (req, res, next) => 
  new MotorcycleController(req, res, next).createMotorcycle());

router.get('/', (req, res, next) =>
  new MotorcycleController(req, res, next).getAllMotorcycles());   

router.get('/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).getMotorcycleById());  

router.put('/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).updateMotorcycle());  

export default router;  