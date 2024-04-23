import Avatar from "./Avatar";

const CommentItem = ({ comment, user }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <article className="comment-item">
      <div key={comment.id} className="comment-item__comment">
        <Avatar
          img={user?.profile_picture}
          className="comment-item__comment__avatar"
          width="2rem"
          height="2rem"
        />
        <div className="comment-item__comment__bubble">
          <strong className="comment-item__comment__name">{user?.name}</strong>
          <span>{comment.comment}</span>
        </div>
      </div>
    </article>
  );
};

export default CommentItem;
