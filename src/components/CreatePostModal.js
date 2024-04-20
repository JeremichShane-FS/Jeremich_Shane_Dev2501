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
  console.log(textareaHeight);
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={hideModal}
      contentLabel="Create Post Modal"
      ariaHideApp={false}
      className="post-card__modal"
      overlayClassName="post-card__overlay"
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick={true}>
      <form onSubmit={handleSubmit}>
        <header className="post-card__header">
          <h5 className="post-card__header__title">Create Post</h5>
          <FormButton type="button" className="post-card__header--remove" onClick={hideModal}>
            <FaXmark color="#aaa" />
          </FormButton>
        </header>
        <div className="post-card__inputs-container">
          <Avatar img={img} className="post-card__avatar" width="2.5rem" height="2.5rem" />
          <div>
            <InputField
              className="post-card__title-input"
              type="text"
              name="title"
              placeholder="Title of post"
              onChange={handleInputChange}
              value={inputValue.title}
            />
            <InputError errors={errors} property="title" />
          </div>
          <textarea
            className={`post-card__modal__textarea ${
              inputValue.post.length <= 80 ? "text-large" : "text-small"
            }`}
            name="post"
            maxLength={1001}
            placeholder={`What's on your mind, ${firstName}?`}
            onChange={handleInputChange}
            value={inputValue.post}
            style={{ height: textareaHeight }}
          />
          <InputError errors={errors} property="post" />
        </div>
        <PostEnhancements />
        <FormButton
          className={`btn-form ${isFormValid ? " btn-form--active" : ""}`}
          aria-disabled={!isFormValid}
          disabled={!isFormValid}
          type="submit">
          Post
        </FormButton>
      </form>
    </Modal>
  );
};

export default CreatePostModal;
