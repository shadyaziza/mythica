import express, { Application, NextFunction, Request, Response } from 'express';

import * as trpcX from '@trpc/server/adapters/express';

import { appRouter } from './router';

import cors from 'cors';

const app: Application = express();

const createContext = ({}: trpcX.CreateExpressContextOptions) => ({});

app.use(express.json());
app.use(cors());

app.use(
  '/mythica',
  trpcX.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`✨ ✨ ✨ Server running on port ${PORT} ✨ ✨ ✨`);
});
