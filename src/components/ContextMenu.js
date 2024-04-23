import { forwardRef } from "react";
import { BsPinAngleFill } from "react-icons/bs";
import { FaBookmark, FaTrashCan } from "react-icons/fa6";
import {
  MdBlockFlipped,
  MdEdit,
  MdOutlineDateRange,
  MdOutlineReportGmailerrorred,
} from "react-icons/md";

const ContextMenu = forwardRef(({ isOpen, menuPosition, onEdit, onDelete, isUserPost }, ref) => {
  return (
    <div ref={ref} className={`context-menu ${menuPosition} ${isOpen ? "open" : "closed"}`}>
      <div className="context-menu__arrow" />
      {isUserPost ? (
        <ul className="context-menu__list">
          <li className="context-menu__item" role="button" aria-label="Pin post">
            <BsPinAngleFill />
            <span>Pin post</span>
          </li>
          <li className="context-menu__item" role="button" aria-label="Save post">
            <FaBookmark />
            <span>Save post</span>
          </li>
          <li className="context-menu__item" onClick={onEdit} role="button" aria-label="Edit post">
            <MdEdit />
            <span>Edit post</span>
          </li>
          <li
            className="context-menu__item"
            onClick={onDelete}
            role="button"
            aria-label="Delete post">
            <FaTrashCan />
            <span>Delete post</span>
          </li>
          <li className="context-menu__item" role="button" aria-label="Edit date">
            <MdOutlineDateRange />
            <span>Edit Date</span>
          </li>
        </ul>
      ) : (
        <ul className="context-menu__list">
          <li className="context-menu__item" role="button" aria-label="Save post">
            <FaBookmark />
            <span>Save post</span>
          </li>
          <li
            className="context-menu__item"
            onClick={onDelete}
            role="button"
            aria-label="Remove post">
            <FaTrashCan />
            <span>Remove post</span>
          </li>
          <li className="context-menu__item" role="button" aria-label="Report post">
            <MdOutlineReportGmailerrorred />
            <span>Report post</span>
          </li>
          <li className="context-menu__item" role="button" aria-label="Block user's profile">
            <MdBlockFlipped />
            <span>Block user's profile</span>
          </li>
        </ul>
      )}
    </div>
  );
});

export default ContextMenu;
