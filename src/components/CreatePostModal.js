import { useEffect, useRef, useState } from "react";
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
}) => {
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      setTextareaHeight(`${textareaRef.current.scrollHeight}px`);
    }
  }, [inputValue.post]);
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={hideModal}
      contentLabel="Create Post Modal"
      ariaHideApp={false}
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
          <InputField
            className="create-post-modal__title-input"
            type="text"
            name="title"
            maxLength={51}
            placeholder="Title of post"
            onChange={handleInputChange}
            value={inputValue.title}
          />
          <InputError errors={errors} property="title" grid="title" />

          <textarea
            className={`create-post-modal__textarea ${
              inputValue.post.length <= 80
                ? "create-post-modal__textarea--large-text"
                : "create-post-modal__textarea--small-text"
            }`}
            name="post"
            maxLength={1001}
            placeholder={`What's on your mind, ${firstName}?`}
            onChange={handleInputChange}
            value={inputValue.post}
            style={{ height: textareaHeight }}
            ref={textareaRef}
          />
          <InputError errors={errors} property="post" grid="post" />
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
