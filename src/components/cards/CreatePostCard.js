import CreatePostIcons from "../CreatePostIcons";
import CreatePostModal from "../CreatePostModal";
import InputAvatar from "../forms/InputAvatar";
import Card from "./Card";

const PostCard = ({
  profile: { img, firstName },
  handleInputChange,
  inputValue,
  errors,
  showModal,
  hideModal,
  isModalOpen,
  textareaHeight,
  editPostId,
  handleSubmit,
}) => {
  const { title, post } = inputValue;
  const isFormValid = title?.trim() && post?.trim();
  let placeholder = `${inputValue.title ? inputValue.title.trim() : ""} ${
    inputValue.post ? inputValue.post.trim() : ""
  }`.trim();

  return (
    <Card>
      <InputAvatar type="button" onClick={showModal} placeholder={placeholder} />
      <CreatePostIcons />
      <CreatePostModal
        handleInputChange={handleInputChange}
        editPostId={editPostId}
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
