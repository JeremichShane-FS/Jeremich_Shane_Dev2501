import { forwardRef } from "react";

const ContextMenu = forwardRef(({ isOpen, menuPosition, onEdit, onDelete, isUserPost }, ref) => {
  return (
    <div ref={ref} className={`context-menu ${menuPosition} ${isOpen ? "open" : "closed"}`}>
      <div className="context-menu__arrow" />
      {isUserPost ? (
        <>
          <button type="button">Pin post</button>
          <button type="button">Save post</button>
          <button type="button" onClick={onEdit}>
            Edit post
          </button>
          <button onClick={onDelete}>Delete post</button>
          <button>Edit Date</button>
        </>
      ) : (
        <>
          <button type="button">Save post</button>
          <button type="button" onClick={onDelete}>
            Remove post
          </button>
          <button type="button">Report post</button>
          <button type="button">Block user's profile</button>
        </>
      )}
    </div>
  );
});

export default ContextMenu;
