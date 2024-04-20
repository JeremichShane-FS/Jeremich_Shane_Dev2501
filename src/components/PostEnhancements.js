import { BsEmojiLaughing } from "react-icons/bs";
import { FaPhotoVideo, FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiGif } from "react-icons/hi2";
import Tooltip from "../components/Tooltip";

const PostEnhancements = () => {
  return (
    <section className="post-enhancements">
      <div className="post-enhancements__icons">
        <p className="post-enhancements__icons-text">Add to your Post</p>
        <ul className="post-enhancements__icon-list">
          <li className="post-enhancements__list-item">
            <Tooltip text="Photo/Video">
              <FaPhotoVideo color="#58C472" className="post-enhancements__icon" />
            </Tooltip>
          </li>
          <li className="post-enhancements__list-item">
            <Tooltip text="Tag people">
              <FaUserTag color="#3085F3" className="post-enhancements__icon" title="Tag a friend" />
            </Tooltip>
          </li>
          <li className="post-enhancements__list-item">
            <Tooltip text="Feeling/activity">
              <BsEmojiLaughing
                color="#F8C03E"
                className="post-enhancements__icon"
                title="Add an emoji"
              />
            </Tooltip>
          </li>
          <li className="post-enhancements__list-item">
            <Tooltip text="Check in">
              <FaLocationDot
                color="#F66551"
                className="post-enhancements__icon"
                title="Add a location"
              />
            </Tooltip>
          </li>
          <li className="post-enhancements__list-item">
            <Tooltip text="Gif">
              <HiGif color="#40C2B0" className="post-enhancements__icon" title="Add a GIF" />
            </Tooltip>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default PostEnhancements;
