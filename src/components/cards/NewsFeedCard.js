import { Fragment } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { GoComment } from "react-icons/go";
import { TiEdit } from "react-icons/ti";
import formatTimestamp from "../../utils/formatTimestamp";
import Avatar from "../Avatar";
import AvatarInput from "../AvatarInput";
import Tooltip from "../Tooltip";
import InteractionButton from "../buttons/InteractionButton";
import Card from "./Card";
import CommentCard from "./CommentCard";

const NewsFeedCard = ({
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
      <div style={styles.headerContainer}>
        <div style={styles.profile}>
          <Avatar
            img={profile_picture}
            style={styles.profilePicture}
            width="3.125rem"
            height="3.125rem"
          />
          <div style={styles.userInfo}>
            <h3>{name}</h3>
            <p style={styles.userInfo.timestamp}>{formatTimestamp(timestamp)}</p>
          </div>
        </div>
        <span style={styles.span}>
          <Tooltip text="Edit">
            <TiEdit />
          </Tooltip>
          <Tooltip text="Remove">
            <FaXmark />
          </Tooltip>
        </span>
      </div>
      <div style={styles.postContent}>
        <p style={styles.postContent.p}>{content}</p>
        {image_url && (
          <picture>
            <source srcSet={image_url} media="(min-width: 768px)" />
            <img src={image_url} alt={`Post by ${name}`} style={styles.postImage} />
          </picture>
        )}
      </div>
      <div style={styles.postFooter}>
        <div style={styles.postFooter.social}>
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

        <div style={styles.interaction}>
          <InteractionButton icon={AiOutlineLike} text="Like" onClick={handleLike} />
          <InteractionButton icon={GoComment} text="Comment" onClick={handleComment} />
          <InteractionButton icon={FaRegShareSquare} text="Share" onClick={handleShare} />
        </div>
        <CommentCard comments={comments} users={users} />
        <div style={styles.commentInput}>
          <AvatarInput placeholder="Write a comment..." height="2rem" width="2rem" showIcon />
        </div>
      </div>
    </Card>
  );
};

export default NewsFeedCard;

const styles = {
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  profile: {
    display: "flex",
    marginBottom: "1rem",
  },
  profilePicture: {
    marginRight: "1rem",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontWeight: "bold",

    timestamp: {
      fontSize: "0.8rem",
      fontWeight: "normal",
    },
  },
  span: {
    display: "flex",
    gap: "1rem",
    fontSize: "2rem",
    cursor: "pointer",
  },
  postContent: {
    marginBottom: "1rem",
    p: {
      marginBottom: "1rem",
    },
  },
  postImage: {
    width: "100%",
    marginBottom: "1rem",
    borderRadius: "8px",
  },
  postFooter: {
    social: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  interaction: {
    display: "flex",
    justifyContent: "space-around",
    gap: "1rem",
    fontWeight: "bold",
    margin: "1rem 0",
    padding: "0.5rem",
    borderTop: "1px solid #4a4b4c",
    borderBottom: "1px solid #4a4b4c",

    button: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      border: "none",
      background: "none",
      padding: 0,
      fontSize: "1rem",
      color: "#fff",
    },
  },
  commentInput: {
    marginTop: "1rem",
  },
  icon: {
    marginRight: "0.5rem",
    fontSize: "1.5rem",
  },
};
