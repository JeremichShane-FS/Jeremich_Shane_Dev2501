import { memo, useContext, useRef } from "react";
import { AppContext } from "../../contexts";
import { useClickOutside, useMenuPosition } from "../../hooks";
import Card from "./Card";
import CardActions from "./CardActions";
import CardComments from "./CardComments";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";

const NewsfeedCard = ({
  currentUser,
  openContextMenu,
  setOpenContextMenu,
  handleContextMenu,
  handleDelete: handleDeleteProp,
  handleEdit: handleEditProp,
  post: { timestamp, userId, title, content, image_url, likes, comments, id: postId },
}) => {
  const { userMap, users } = useContext(AppContext);
  const user = userId === currentUser.id ? currentUser : users.find(user => user.id === userId);
  const iconRef = useRef(null);
  const menuRef = useRef(null);
  const isContextMenuOpen = openContextMenu === postId;
  const menuPosition = useMenuPosition(iconRef, isContextMenuOpen);

  const handleEdit = () => handleEditProp(postId);

  const handleDelete = () => handleDeleteProp(postId);
  useClickOutside(menuRef, () => {
    setOpenContextMenu(null);
  });

  return (
    <Card>
      <CardHeader
        currentUser={currentUser}
        handleContextMenu={handleContextMenu}
        iconRef={iconRef}
        isContextMenuOpen={isContextMenuOpen}
        menuPosition={menuPosition}
        menuRef={menuRef}
        postId={postId}
        openContextMenu={openContextMenu}
        timestamp={timestamp}
        user={user}
        userId={userId}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <CardContent title={title} content={content} imageUrl={image_url} />
      <CardActions likes={likes} comments={comments} userMap={userMap} />
      <CardComments comments={comments} userMap={userMap} users={users} />
    </Card>
  );
};

export default memo(NewsfeedCard);
