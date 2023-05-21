import { trpc } from '../lib/trpc';
import { db } from '../lib/db.server';
import { z } from 'zod';

export const creatureRouter = trpc.router({
  getAll: trpc.procedure.query(() => {
    return db.creature.findMany();
  }),

  getRandom: trpc.procedure.query(async () => {
    // I messed up my database and my first id starts from 22 and last is 42
    // so that is why
    const id = Math.floor(Math.random() * (42 - 22 + 1) + 22);
    const creature = await db.creature.findUnique({
      where: {
        id: id,
      },
    });
    if (creature) {
      const { name, photo } = creature;
      return {
        creature: {
          name: name,
          photo: photo,
        },
      };
    }
    return creature;
  }),

  getDetails: trpc.procedure
    .input(z.object({ id: z.number().int() }))
    .query(async ({ input }) => {
      const inputId = input.id;
      const creature = await db.creature.findUnique({
        where: {
          id: inputId,
        },
      });
      return creature;
    }),
});
