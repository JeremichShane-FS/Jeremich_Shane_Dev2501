import React, { memo, useState } from "react";
import CommentItem from "../CommentItem";
import InputAvatar from "../forms/InputAvatar";

const MemoizedCommentItem = memo(CommentItem);

const CardComments = ({ comments, userMap, users }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  return (
    <div>
      {comments.map(({ id, userId, comment }) => {
        const name = userMap[userId];
        const user = users.find(user => user.id === userId);
        const img = user ? user.profile_picture : null;
        return <MemoizedCommentItem key={id} comment={comment} name={name} img={img} />;
      })}
      <div className="newsfeed-card__comment-input">
        <InputAvatar
          showIcon
          height="2rem"
          width="2rem"
          placeholder="Write a comment..."
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
    </div>
  );
};

export default CardComments;
