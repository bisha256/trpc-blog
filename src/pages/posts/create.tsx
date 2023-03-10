import { type NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const schema = yup.object({
  title: yup.string().required(),
});
type FormData = yup.InferType<typeof schema>;

const Posts: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const mutation = api.posts.createPost.useMutation();

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
    router.push("/posts");
  };

  return (
    <>
      <Head>
        <title>Create Post</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input {...register("title")} type="text" id="title" />
          <p className="text-red-400">{errors.title?.message}</p>
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default Posts;
