import { trpc } from '../lib/trpc';
import { creatureRouter } from './creatureRouter';

export const appRouter = trpc.router({
  creature: creatureRouter,
});

export type AppRouter = typeof appRouter;
