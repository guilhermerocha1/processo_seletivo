import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import Users from './database/models/Users';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.post('/regiter', (req: Request, res: Response) => {
  const { username, password } = req.body;
  const newUser = Users.create({ username, password });
  res.status(201).json(newUser);
})
