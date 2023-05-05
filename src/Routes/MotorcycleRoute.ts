import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post('/', (req, res, next) => 
  new MotorcycleController(req, res, next).createMotorcycle());

export default router;  