import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { userProfile } from "../../constants/userProfile";
import Avatar from "../Avatar";
import InputField from "./InputField";

const InputAvatar = ({
  onInputChange,
  onClick,
  showIcon,
  width = "3.125rem",
  height = "3.125rem",
  className = "",
  style,
  name,
  placeholder,
  type,
}) => {
  const { firstName, profile_picture } = userProfile;
  placeholder = placeholder !== "" ? placeholder : `What's on your mind, ${firstName}?`;
  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    setInputValue(e.target.value);
    if (onInputChange) onInputChange(e);
  };

  const handleCommentPost = () => {
    if (inputValue) {
      // Logic to handle comment posting
    }
  };

  return (
    <div className={`input-avatar__container ${className}`}>
      <Avatar img={profile_picture} height={height} width={width} />
      <div className="input-avatar__input-container">
        <InputField
          type={type}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          className="input-avatar__input"
          style={style}
          onChange={handleChange}
          onClick={onClick}
        />
        {showIcon && (
          <div className="input-avatar__icon-container">
            <IoSend
              className={`input-avatar__icon ${inputValue ? "input-avatar__icon--active" : ""}`}
              onClick={handleCommentPost}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputAvatar;
