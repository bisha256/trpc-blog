import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const commentsRouter = createTRPCRouter({
  createComment: publicProcedure
    .input(z.object({ body: z.string(), postId: z.string() }))
    .mutation(({ input, ctx }) => {
      const comment = ctx.prisma.comment.create({ data: input });
      return comment;
    }),
});
