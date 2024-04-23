import CreatePostIcons from "../CreatePostIcons";
import CreatePostModal from "../CreatePostModal";
import InputAvatar from "../forms/InputAvatar";
import Card from "./Card";

const PostCard = ({
  profile: { img, firstName },
  handleInputChange,
  inputValue,
  handleAddPost,
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
      await handleAddPost(inputValue.title, inputValue.post);
    } else {
      console.error("Validation failed: Title and post content are required.");
    }
    resetForm();
    hideModal();
  };

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
