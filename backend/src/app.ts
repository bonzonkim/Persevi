import express, { Request, Response } from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter';
import adminRouter from './routes/adminRouter';
import productRouter from './routes/productRouter';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3099;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/product', productRouter);


app.get('/hello', (req: Request, res: Response) => {
	res.json({ msg: 'hello from server' });
});

app.listen(PORT, () => {
	console.log(`-------------SERVER LISTENING ON PORT ${PORT}-------------`);
});
