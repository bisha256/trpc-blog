interface IComment {
  body: String;
}

interface Props {
  comments: IComment[];
}

const Comments = (props: Props) => {
  return (
    <div>
      {props.comments.map((comment) => (
        <div>{comment.body}</div>
      ))}
    </div>
  );
};

export default Comments;
