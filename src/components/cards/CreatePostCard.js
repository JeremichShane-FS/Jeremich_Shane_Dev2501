import CreatePostModal from "../CreatePostModal";
import FormButton from "../buttons/FormButton";
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

  return (
    <Card>
      <FormButton type="button" onClick={showModal}>
        Create Post
      </FormButton>
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
