import { BsEmojiLaughing } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import CreatePostModal from "../CreatePostModal";
import Tooltip from "../Tooltip";
import InputAvatar from "../forms/InputAvatar";
import Card from "./Card";

const PostCard = ({
  profile: { img, firstName },
  handleInputChange,
  inputValue,
  addPost,
  resetForm,
  errors,
  showModal,
  hideModal,
  isModalOpen,
  textareaHeight,
}) => {
  const handleSubmit = async e => {
    e.preventDefault();
    if (inputValue.title.trim().length > 0 && inputValue.post.trim().length > 0) {
      await addPost(inputValue.title, inputValue.post);
    } else {
      console.error("Validation failed: Title and post content are required.");
    }
    resetForm();
    hideModal();
  };
  const { title, post } = inputValue;
  const isFormValid = title.trim() && post.trim();
  let placeholder = `${inputValue.title ? inputValue.title.trim() : ""} ${
    inputValue.post ? inputValue.post.trim() : ""
  }`.trim();

  return (
    <Card>
      <div>
        <InputAvatar type="button" onClick={showModal} placeholder={placeholder} />
        <div className="create-post-card__icons">
          <span className="create-post-card__span">
            <FaPhotoVideo
              color="#58C472"
              className="create-post-card__icon"
              title="Add a photo/video"
            />
            Photo/video
          </span>

          <span className="create-post-card__span">
            <BsEmojiLaughing
              color="#F8C03E"
              className="create-post-card__icon"
              title="Add an emoji"
            />
            Feeling/Activity
          </span>

          <span className="create-post-card__span">
            <FaLocationDot
              color="#F66551"
              className="create-post-card__icon"
              title="Add a location"
            />
            Check in
          </span>
        </div>
      </div>
      <CreatePostModal
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isFormValid={isFormValid}
        isModalOpen={isModalOpen}
        errors={errors}
        img={img}
        firstName={firstName}
        inputValue={inputValue}
        hideModal={hideModal}
        textareaHeight={textareaHeight}
      />
    </Card>
  );
};

export default PostCard;
