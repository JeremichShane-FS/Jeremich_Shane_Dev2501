import Avatar from "./Avatar";

const CommentItem = ({ comments, users }) => {
  const usersMap = users.reduce((map, user) => {
    map[user.id] = user;
    return map;
  }, {});

  const combinedData = comments.map(comment => {
    const commentUser = usersMap[comment.userId];
    return { comment, commentUser };
  });

  return (
    <article className="comment-item">
      {combinedData.map(({ comment, commentUser }) => (
        <div key={comment.id} className="comment-item__comment">
          <Avatar
            img={commentUser?.profile_picture}
            className="comment-item__comment__avatar"
            width="2rem"
            height="2rem"
          />
          <div className="comment-item__comment__bubble">
            <strong className="comment-item__comment__name">{commentUser?.name}</strong>
            <span>{comment.comment}</span>
          </div>
        </div>
      ))}
    </article>
  );
};

export default CommentItem;
