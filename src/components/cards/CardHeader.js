import { FaXmark } from "react-icons/fa6";
import { TbDots } from "react-icons/tb";
import Avatar from "../Avatar";
import ContextMenu from "../ContextMenu";
import { formatTimestamp } from "../../utils";

const CardHeader = ({
  handleContextMenu,
  handleDelete,
  handleEdit,
  iconRef,
  isContextMenuOpen,
  menuPosition,
  menuRef,
  setOpenContextMenu,
  timestamp,
  userId,
  currentUser: { id },
  user: { firstName, lastName, profile_picture },
}) => {
  return (
    <div className="newsfeed-card__header-container">
      <div className="newsfeed-card__profile">
        <Avatar
          className="newsfeed-card__profile__picture"
          img={profile_picture}
          width="3.125rem"
          height="3.125rem"
        />
        <div className="newsfeed-card__profile__user-info">
          <h3>
            {firstName} {lastName}
          </h3>
          <p className="newsfeed-card__profile__user-info__timestamp">
            {formatTimestamp(timestamp)}
          </p>
        </div>
      </div>
      <div className="newsfeed-card__options">
        <div
          ref={iconRef}
          aria-expanded="false"
          aria-haspopup="menu"
          aria-label="Actions for this post"
          className="newsfeed-card__options__icon"
          onClick={handleContextMenu}>
          <TbDots />
        </div>
        <ContextMenu
          ref={menuRef}
          isOpen={isContextMenuOpen}
          isUserPost={userId === id}
          menuPosition={menuPosition}
          postUserId={userId}
          setContextMenuOpen={setOpenContextMenu}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <div
          aria-label="remove post"
          className="newsfeed-card__options__icon"
          onClick={handleDelete}>
          <FaXmark />
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
