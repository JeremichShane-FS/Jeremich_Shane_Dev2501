import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { TbDots } from "react-icons/tb";
import formatTimestamp from "../../utils/formatTimestamp";
import Avatar from "../Avatar";
import CommentItem from "../CommentItem";
import ContextMenu from "../ContextMenu";
import SocialInteraction from "../SocialInteraction";
import Tooltip from "../Tooltip";
import InputAvatar from "../forms/InputAvatar";
import Card from "./Card";

const NewsfeedCard = ({
  user,
  post: { timestamp, userId, title, content, image_url, likes, comments, id: postId },
  userMap,
  handleEditPost,
  handleDeletePost,
  currentUser,
  openContextMenu,
  setOpenContextMenu,
}) => {
  const [menuPosition, setMenuPosition] = useState("below");
  const iconRef = useRef(null);
  const menuRef = useRef(null);

  const isContextMenuOpen = openContextMenu === postId;

  const handleContextMenuClick = useCallback(
    e => {
      if (isContextMenuOpen && e.target !== iconRef.current) {
        e.stopPropagation();
        setOpenContextMenu(null);
      }
    },
    [iconRef, setOpenContextMenu, isContextMenuOpen]
  );

  useEffect(() => {
    const iconPosition = iconRef.current.getBoundingClientRect();
    const isIconNearBottom = window.innerHeight - iconPosition.bottom < 200;

    setMenuPosition(isIconNearBottom ? "above" : "below");
  }, [handleContextMenuClick]);

  useEffect(() => {
    const handleClickOutside = event => {
      // Clicked on the TbDots icon, ignore
      if (iconRef.current && iconRef.current.contains(event.target)) {
        return;
      }

      // Clicked outside the context menu, close it
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenContextMenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setOpenContextMenu]);

  return (
    <Card>
      <div className="newsfeed-card__header-container">
        <div className="newsfeed-card__profile">
          <Avatar
            img={user.profile_picture}
            className="newsfeed-card__profile__picture"
            width="3.125rem"
            height="3.125rem"
          />
          <div className="newsfeed-card__profile__user-info">
            <h3>{user.name}</h3>
            <p className="newsfeed-card__profile__user-info__timestamp">
              {formatTimestamp(timestamp)}
            </p>
          </div>
        </div>
        <div className="newsfeed-card__options">
          <div
            ref={iconRef}
            className="newsfeed-card__options__icon"
            aria-expanded="false"
            aria-haspopup="menu"
            aria-label="Actions for this post"
            onClick={e => {
              e.stopPropagation();
              setOpenContextMenu(isContextMenuOpen ? null : postId);
            }}>
            <TbDots />
          </div>
          <ContextMenu
            ref={menuRef}
            isOpen={isContextMenuOpen}
            onEdit={() => handleEditPost(postId)}
            onDelete={() => handleDeletePost(postId)}
            menuPosition={menuPosition}
            isUserPost={userId === currentUser.id}
            setContextMenuOpen={setOpenContextMenu}
          />
          <div
            className="newsfeed-card__options__icon"
            aria-label="remove post"
            onClick={() => handleDeletePost(postId)}>
            <FaXmark />
          </div>
        </div>
      </div>
      <div className="newsfeed-card__post-content">
        <p className="newsfeed-card__post-content p">{`${title} ${content}`}</p>
        {image_url && (
          <picture>
            <source srcSet={image_url} media="(min-width: 768px)" />
            <img
              src={image_url}
              alt={`Post by ${user.name}`}
              className="newsfeed-card__post-image"
            />
          </picture>
        )}
      </div>
      <div className="newsfeed-card__post-footer">
        <div className="newsfeed-card__post-footer__social">
          <p>{likes} Likes</p>
          {comments.length > 0 ? (
            <Tooltip
              text={comments.map((comment, index) => {
                const user = userMap[comment.userId];
                if (!user) {
                  return null;
                }

                return (
                  <Fragment key={comment.id}>
                    {user.name}
                    {index < comments.length - 1 && <br />}
                  </Fragment>
                );
              })}>
              <p>{comments.length} Comments</p>
            </Tooltip>
          ) : (
            <p>No comments</p>
          )}
        </div>
        <SocialInteraction />
        {comments.map(comment => {
          const user = userMap[comment.userId];
          return <CommentItem key={comment.id} comment={comment} user={user} />;
        })}
        <div className="newsfeed-card__comment-input">
          <InputAvatar placeholder="Write a comment..." height="2rem" width="2rem" showIcon />
        </div>
      </div>
    </Card>
  );
};

export default NewsfeedCard;
