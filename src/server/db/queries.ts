import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from ".";

export function getImages() {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");
  return db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
}
