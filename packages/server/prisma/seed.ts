import { PrismaClient } from '@prisma/client';
import { creatures } from './data';

const prisma = new PrismaClient();

const load = async () => {
  try {
    const result = await prisma.creature.createMany({
      data: creatures,
    });
    console.log({ count: result.count });
  } catch (e) {
    console.log(e);
  } finally {
    await prisma.$disconnect();
  }
};

load();
