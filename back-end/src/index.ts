import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import users from './api/routers/user.router';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// router /register and /login
app.use(users);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

