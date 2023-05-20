import { trpc } from '../lib/trpc';
import { db } from '../lib/db.server';
import { z } from 'zod';

export const creatureRouter = trpc.router({
  getRandom: trpc.procedure.query(async () => {
    const id = Math.floor(Math.random() * 20);
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
