import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/welcome', (req: Request, res: Response) => {
  res.send("welcome");
})
app.get('/hello', (req: Request, res: Response) => {
  res.json({msg: 'hello from server'});
})

app.listen('3099', () => {
  console.log('-------------SERVER LISTENING ON PORT 3099-------------')
});
