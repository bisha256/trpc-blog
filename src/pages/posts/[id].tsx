import { NextPage } from "next";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

const Post: NextPage = () => {
  const { query } = useRouter();
  const { data } = api.posts.getPostById.useQuery(query.id as string);

  return (
    <div>
      <h3>{data?.title}</h3>
    </div>
  );
};

export default Post;
