import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { userProfile } from "../../constants/userProfile";
import Avatar from "../Avatar";
import Tooltip from "../Tooltip";
import InputField from "./InputField";

const InputAvatar = ({
  onInputChange,
  placeholder,
  showIcon,
  width = "3.125rem",
  height = "3.125rem",
  name,
}) => {
  const { firstName } = userProfile;
  placeholder = placeholder || `What's on your mind, ${firstName}?`;
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
    <div className="input-avatar__container">
      <Avatar img={userProfile.img} height={height} width={width} />
      <div className="input-avatar__input-container">
        <InputField
          type="text"
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className="input-avatar__input"
        />
        {showIcon && (
          <div className="input-avatar__icon-container">
            <Tooltip text="Comment">
              <IoSend
                className={`input-avatar__icon ${inputValue ? "input-avatar__icon--active" : ""}`}
                onClick={handleCommentPost}
              />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputAvatar;
