import { PrismaClient } from '@prisma/client';

// ensure we use the binary engine rather than the new "client" engine which
// requires additional configuration (adapter/accelerateUrl). setting this
// environment variable prevents runtime initialization errors in development.
if (!process.env.PRISMA_CLIENT_ENGINE_TYPE) {
  process.env.PRISMA_CLIENT_ENGINE_TYPE = 'binary';
}

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// construct client normally; PRISMA_CLIENT_ENGINE_TYPE has already been set
// above so the binary engine will be used and no constructor validation errors
// should occur.
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;