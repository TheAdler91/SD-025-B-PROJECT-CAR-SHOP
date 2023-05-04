import express from 'express';
import CarRoute from './Routes/CarRoute';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use('/cars', CarRoute);
app.use(ErrorHandler);

export default app;
