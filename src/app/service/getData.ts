import { prisma } from "@/lib/db";

export async function getData() {
  const data = await prisma.message.findMany({
    select: {
      message: true,
      id: true,
      User: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createAt: "asc",
    },
    take: 50,
  });
  return data
}
