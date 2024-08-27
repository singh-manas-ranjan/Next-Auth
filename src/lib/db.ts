import { PrismaClient } from "@prisma/client";

// Next.js hot reloading every time we save a file which'll create a new PrismaClient every time which will show warnings in the console that you are having too many instances of PrismaClient running
declare global {
  var prisma: PrismaClient | undefined;
}
export const db = global.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prisma = db;
