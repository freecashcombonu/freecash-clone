// This is a placeholder prisma.config.ts file.
// The main Prisma configuration is in prisma/schema.prisma.
// This file can be used for any additional Prisma-related configuration.

export const prismaConfig = {
  log: process.env.NODE_ENV === "development" ? ["query", "info", "warn"] : ["error"],
  errorFormat: "pretty" as const,
};
