import { BsPinAngleFill } from "react-icons/bs";
import { FaBookmark, FaTrashCan } from "react-icons/fa6";
import { MdEdit, MdOutlineDateRange } from "react-icons/md";

const IsUser = ({ onDelete, onEdit }) => {
  return (
    <ul className="context-menu__list">
      <li className="context-menu__item" role="button" aria-label="Pin post">
        <BsPinAngleFill />
        <span>Pin post</span>
      </li>
      <li className="context-menu__item" role="button" aria-label="Save post">
        <FaBookmark />
        <span>Save post</span>
      </li>
      <li className="context-menu__item" role="button" aria-label="Edit post" onClick={onEdit}>
        <MdEdit />
        <span>Edit post</span>
      </li>
      <li className="context-menu__item" role="button" aria-label="Delete post" onClick={onDelete}>
        <FaTrashCan />
        <span>Delete post</span>
      </li>
      <li className="context-menu__item" role="button" aria-label="Edit date">
        <MdOutlineDateRange />
        <span>Edit Date</span>
      </li>
    </ul>
  );
};
export default IsUser;
