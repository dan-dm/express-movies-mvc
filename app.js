import express from 'express';
import moviesRouter from './routes/moviesRouter.js';
import userRouter from './routes/userRouter.js';
import errorRouter from './routes/errorRouter.js';
import { clientErrorHandler, dbErrorHandler, genericErrorHandler } from './middlewares/errorHandler.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/movies', moviesRouter);
app.use('*', errorRouter)

app.use(clientErrorHandler);
app.use(dbErrorHandler);
app.use(genericErrorHandler);



export default app;