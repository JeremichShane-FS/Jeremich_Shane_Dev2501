import { BsEmojiLaughing } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const CreatePostIcons = () => {
  return (
    <div className="create-post__icons">
      <span className="create-post__span">
        <FaPhotoVideo color="#58C472" className="create-post__icon" title="Add a photo/video" />
        Photo/video
      </span>

      <span className="create-post__span">
        <BsEmojiLaughing color="#F8C03E" className="create-post__icon" title="Add an emoji" />
        Feeling/Activity
      </span>

      <span className="create-post__span">
        <FaLocationDot color="#F66551" className="create-post__icon" title="Add a location" />
        Check in
      </span>
    </div>
  );
};

export default CreatePostIcons;
