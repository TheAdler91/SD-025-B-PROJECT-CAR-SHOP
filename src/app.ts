import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(ErrorHandler);

export default app;
