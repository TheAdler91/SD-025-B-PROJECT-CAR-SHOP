import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(ErrorHandler.handle);

export default app;
