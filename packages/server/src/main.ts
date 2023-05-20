import express, { Application, NextFunction, Request, Response } from 'express';

import * as trpcX from '@trpc/server/adapters/express';

import { appRouter } from './router';

import cors from 'cors';

const app: Application = express();

app.use(cors());

app.use(
  '/trpc',
  trpcX.createExpressMiddleware({
    router: appRouter,
  })
);

const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`✨ ✨ ✨ Server running on port ${PORT} ✨ ✨ ✨`);
});
