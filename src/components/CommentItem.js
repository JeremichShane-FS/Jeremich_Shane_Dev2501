import Avatar from "./Avatar";

const CommentItem = ({ comment, name, id, img }) => {
  if (!name) {
    return <div>Loading...</div>;
  }

  return (
    <article className="comment-item">
      <div key={id} className="comment-item__comment">
        <Avatar className="comment-item__comment__avatar" width="2rem" height="2rem" img={img} />
        <div className="comment-item__comment__bubble">
          <strong className="comment-item__comment__name">{name}</strong>
          <span>{comment}</span>
        </div>
      </div>
    </article>
  );
};

export default CommentItem;
