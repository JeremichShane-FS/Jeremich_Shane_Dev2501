import { FaBookmark, FaTrashCan } from "react-icons/fa6";
import { MdBlockFlipped, MdOutlineReportGmailerrorred } from "react-icons/md";

const PostUser = ({ firstName, onDelete }) => {
  return (
    <ul className="context-menu__list">
      <li className="context-menu__item" role="button" aria-label="Save post">
        <FaBookmark />
        <span>Save post</span>
      </li>
      <li className="context-menu__item" role="button" aria-label="Remove post" onClick={onDelete}>
        <FaTrashCan />
        <span>Remove post</span>
      </li>
      <li className="context-menu__item" role="button" aria-label="Report post">
        <MdOutlineReportGmailerrorred />
        <span>Report post</span>
      </li>
      <li className="context-menu__item" role="button" aria-label="Block user's profile">
        <MdBlockFlipped />
        <span>Block {firstName}'s profile</span>
      </li>
    </ul>
  );
};
export default PostUser;
