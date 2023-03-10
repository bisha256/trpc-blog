import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const PostsRouter = createTRPCRouter({
  getPosts: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany();
    return posts;
  }),

  getPostById: publicProcedure
    .input(z.string())
    .query(async ({ input, ctx }) => {
      const post = await ctx.prisma.post.findUnique({
        where: { id: input },
      });
      return post;
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
