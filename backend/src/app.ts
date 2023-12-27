import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/welcome', (req: Request, res: Response) => {
  res.send("welcome");
})
app.get('/hello', (req: Request, res: Response) => {
  res.send("hello");
})

app.listen('3099', () => {
  console.log('-------------SERVER LISTENING ON PORT 3099-------------')
});
