import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "~/utils/api";

interface Props {
  postId: string;
}

const schema = yup.object({
  body: yup.string().required(),
});
type FormData = yup.InferType<typeof schema>;

const CommentForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const mutation = api.comments.createComment.useMutation();

  const onSubmit = (data: FormData) => {
    mutation.mutate({ body: data.body, postId: props.postId });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("body")} type="text" id="body" />
        <p>{errors.body?.message}</p>
      </div>
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
