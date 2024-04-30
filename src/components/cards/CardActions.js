import { Fragment } from "react";
import SocialInteraction from "../SocialInteraction";
import Tooltip from "../Tooltip";

const CardActions = ({ likes, comments, userMap }) => {
  return (
    <div className="newsfeed-card__post-footer">
      <div className="newsfeed-card__post-footer__social">
        {likes > 0 ? <p>{`${likes} Likes`}</p> : <p>No likes yet</p>}

        {comments.length > 0 ? (
          <Tooltip
            text={comments.map((comment, index) => {
              const user = userMap[comment.userId];
              if (!user) {
                return null;
              }

              return (
                <Fragment key={comment.id}>
                  {user}
                  {index < comments.length - 1 && <br />}
                </Fragment>
              );
            })}>
            <p>{comments.length} Comments</p>
          </Tooltip>
        ) : (
          <p>No comments yet</p>
        )}
      </div>
      <SocialInteraction />
    </div>
  );
};

export default CardActions;
