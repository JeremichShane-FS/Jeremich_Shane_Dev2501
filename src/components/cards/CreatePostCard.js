import CreatePostIcons from "../CreatePostIcons";
import CreatePostModal from "../CreatePostModal";
import InputAvatar from "../forms/InputAvatar";
import Card from "./Card";

const PostCard = ({
  handleInputChange,
  errors,
  showModal,
  hideModal,
  isModalOpen,
  editPostId,
  handleSubmit,
  inputValue,
  inputValue: { title, post },
  profile: {
    profile_picture: { medium },
    firstName,
  },
}) => {
  const isFormValid = title?.trim() && post?.trim();
  let placeholder = `${title ? title.trim() : ""} ${post ? post.trim() : ""}`.trim();

  return (
    <Card>
      <InputAvatar
        type="button"
        placeholder={placeholder}
        className="create-post-card"
        onClick={showModal}
      />
      <CreatePostIcons />
      <CreatePostModal
        handleInputChange={handleInputChange}
        editPostId={editPostId}
        handleSubmit={handleSubmit}
        isFormValid={isFormValid}
        isModalOpen={isModalOpen}
        errors={errors}
        profile_picture={medium}
        firstName={firstName}
        inputValue={inputValue}
        hideModal={hideModal}
      />
    </Card>
  );
};

export default PostCard;
