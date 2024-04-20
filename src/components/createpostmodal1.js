import { FaXmark } from "react-icons/fa6";
import Modal from "react-modal";
import Avatar from "../components/Avatar";
import InputField from "../components/forms/InputField";
import PostEnhancements from "./PostEnhancements";
import FormButton from "./buttons/FormButton";
import InputError from "./forms/InputError";

const CreatePostModal = ({
  isModalOpen,
  hideModal,
  handleSubmit,
  img,
  handleInputChange,
  inputValue,
  errors,
  firstName,
  isFormValid,
  textareaHeight,
}) => {
  return (
    <Modal
      // props
      className="create-post-modal"
      overlayClassName="create-post-modal__overlay">
      <form onSubmit={handleSubmit} className="create-post-modal__form">
        <header className="create-post-modal__header">
          <h5 className="create-post-modal__title">Create Post</h5>
          <FormButton type="button" className="create-post-modal__remove" onClick={hideModal}>
            <FaXmark color="#aaa" />
          </FormButton>
        </header>
        <div className="create-post-modal__inputs-container">
          <Avatar img={img} className="create-post-modal__avatar" width="2.5rem" height="2.5rem" />
          <div>
            <InputField
              className="create-post-modal__title-input"
              // props
            />
            <InputError errors={errors} property="title" className="create-post-modal__error" />
          </div>
          <textarea
            className={`create-post-modal__textarea ${
              inputValue.post.length <= 80
                ? "create-post-modal__textarea--large"
                : "create-post-modal__textarea--small"
            }`}
            // props
          />
          <InputError errors={errors} property="post" className="create-post-modal__error" />
        </div>
        <PostEnhancements className="create-post-modal__enhancements" />
        <FormButton
          className={`create-post-modal__submit ${
            isFormValid ? " create-post-modal__submit--active" : ""
          }`}
          // props
        >
          Post
        </FormButton>
      </form>
    </Modal>
  );
};

export default CreatePostModal;
