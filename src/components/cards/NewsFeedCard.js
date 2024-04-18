import { Fragment } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { GoComment } from "react-icons/go";
import { TiEdit } from "react-icons/ti";
import formatTimestamp from "../../utils/formatTimestamp";
import Avatar from "../Avatar";
import CommentItem from "../CommentItem";
import Tooltip from "../Tooltip";
import InteractionButton from "../buttons/InteractionButton";
import InputAvatar from "../forms/InputAvatar";
import Card from "./Card";

const NewsfeedCard = ({
  post: { timestamp, content, image_url, likes, comments },
  user: { profile_picture, name },
  users,
}) => {
  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  const handleLike = () => {
    // handle like logic
  };

  const handleComment = () => {
    // handle comment logic
  };

  const handleShare = () => {
    // handle share logic
  };

  return (
    <Card>
      <div className="newsfeed-card__header-container">
        <div className="newsfeed-card__profile">
          <Avatar
            img={profile_picture}
            className="newsfeed-card__profile__picture"
            width="3.125rem"
            height="3.125rem"
          />
          <div className="newsfeed-card__profile__user-info">
            <h3>{name}</h3>
            <p className="newsfeed-card__profile__user-info__timestamp">
              {formatTimestamp(timestamp)}
            </p>
          </div>
        </div>
        <span className="newsfeed-card__span">
          <Tooltip text="Edit">
            <TiEdit />
          </Tooltip>
          <Tooltip text="Remove">
            <FaXmark />
          </Tooltip>
        </span>
      </div>
      <div className="newsfeed-card__post-content">
        <p className="newsfeed-card__post-content p">{content}</p>
        {image_url && (
          <picture>
            <source srcSet={image_url} media="(min-width: 768px)" />
            <img src={image_url} alt={`Post by ${name}`} className="newsfeed-card__post-image" />
          </picture>
        )}
      </div>
      <div className="newsfeed-card__post-footer">
        <div className="newsfeed-card__post-footer__social">
          <p>{likes} Likes</p>
          <Tooltip
            text={comments.map((comment, index) => (
              <Fragment key={comment.id}>
                {userMap[comment.userId]}
                {index < comments.length - 1 && <br />}
              </Fragment>
            ))}>
            <p>{comments.length} Comments</p>
          </Tooltip>
        </div>

        <div className="newsfeed-card__interaction">
          <InteractionButton
            icon={AiOutlineLike}
            text="Like"
            onClick={handleLike}
            className="newsfeed-card__interaction__button"
            classIcon="newsfeed-card__interaction__icon"
          />
          <InteractionButton
            icon={GoComment}
            text="Comment"
            onClick={handleComment}
            className="newsfeed-card__interaction__button"
            classIcon="newsfeed-card__interaction__icon"
          />
          <InteractionButton
            icon={FaRegShareSquare}
            text="Share"
            onClick={handleShare}
            className="newsfeed-card__interaction__button"
            classIcon="newsfeed-card__interaction__icon"
          />
        </div>
        <CommentItem comments={comments} users={users} />
        <div className="newsfeed-card__comment-input">
          <InputAvatar placeholder="Write a comment..." height="2rem" width="2rem" showIcon />
        </div>
      </div>
    </Card>
  );
};

export default NewsfeedCard;
