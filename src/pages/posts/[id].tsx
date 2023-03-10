import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import CommentForm from "./components/CommentForm";
import Comments from "./components/Comments";

const Post: NextPage = () => {
  const { query } = useRouter();
  const { data } = api.posts.getPostById.useQuery(query.id as string);

  if (data)
    return (
      <>
        <Head>
          <title>{data.title}</title>
        </Head>
        <div>
          <h3>{data.title}</h3>
          <Comments comments={data.comments} />
          <CommentForm postId={data.id} />
        </div>
      </>
    );
  else return <div>Not Found</div>;
};

export default Post;
