import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const PostsRouter = createTRPCRouter({
  getPosts: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany();
    return posts;
  }),
  createPost: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const result = await ctx.prisma.post.create({
        data: { title: input.title },
      });
      return result;
    }),
});
