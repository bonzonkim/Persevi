import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import userRouter from "./routes/userRouter";

const app = express();
const PORT = 3099;

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/user', userRouter);

app.get('/hello', (req: Request, res: Response) => {
  res.json({msg: 'hello from server'});
})

app.listen(PORT, () => {
  console.log(`-------------SERVER LISTENING ON PORT ${PORT}-------------`)
});
