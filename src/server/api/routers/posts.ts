import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const PostsRouter = createTRPCRouter({
  createPost: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const result = await ctx.prisma.post.create({
        data: { title: input.title },
      });
      return result;
    }),
});
