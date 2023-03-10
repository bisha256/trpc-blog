import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Posts: NextPage = () => {
  const { data } = api.posts.getPosts.useQuery();

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <h2 className="text-xl font-bold underline">Recent Posts</h2>
      <div>
        {data?.map((post) => (
          <Link href={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Posts;
