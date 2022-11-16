import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

import Users from './database/models/Users';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/register', async (req: Request, res: Response) => {
  console.log(req.body);
  const newUser = await Users.create(req.body);
  res.status(201).json(newUser);
})

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

