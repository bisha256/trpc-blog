import { NextPage } from "next";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import CommentForm from "./components/CommentForm";

const Post: NextPage = () => {
  const { query } = useRouter();
  const { data } = api.posts.getPostById.useQuery(query.id as string);

  if (data)
    return (
      <div>
        <h3>{data.title}</h3>
        <CommentForm postId={data.id} />
      </div>
    );
  else return <div>Not Found</div>;
};

export default Post;
