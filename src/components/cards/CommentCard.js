import Avatar from "../Avatar";

const CommentCard = ({ comments, users }) => {
  const usersMap = users.reduce((map, user) => {
    map[user.id] = user;
    return map;
  }, {});

  const combinedData = comments.map(comment => {
    const commentUser = usersMap[comment.userId];
    return { comment, commentUser };
  });

  return (
    <div style={styles.comments}>
      {combinedData.map(({ comment, commentUser }) => (
        <div key={comment.id} style={styles.comment}>
          <Avatar
            img={commentUser?.profile_picture}
            style={styles.commentAvatar}
            width="2rem"
            height="2rem"
          />
          <div style={styles.commentBubble}>
            <strong style={styles.commentBubble.name}>{commentUser?.name}</strong>
            <span>{comment.comment}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentCard;

const styles = {
  comments: {
    marginTop: "1rem",
  },
  comment: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "0.5rem",
  },
  commentAvatar: {
    marginRight: "0.5rem",
  },
  commentBubble: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    backgroundColor: "#4a4b4c",
    borderRadius: "0.9375rem",
    fontSize: "0.95rem",

    name: {
      fontWeight: "bold",
    },
  },
};
