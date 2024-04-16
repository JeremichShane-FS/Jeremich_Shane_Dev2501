import { useState } from "react";
import { IoSend } from "react-icons/io5";
import styled from "styled-components";
import { userProfile } from "../constants/userProfile";
import Avatar from "./Avatar";
import InputField from "./InputField";
import Tooltip from "./Tooltip";

const AvatarInput = ({
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
    <div style={styles.container}>
      <Avatar img={userProfile.img} height={height} width={width} />
      <div style={styles.inputContainer}>
        <StyledInput
          type="text"
          name={name}
          placeholder={placeholder}
          style={styles.input}
          value={inputValue}
          onChange={handleChange}
        />
        {showIcon && (
          <div style={styles.iconContainer}>
            <Tooltip text="Comment">
              <IoSend
                style={{
                  ...styles.icon,
                  color: inputValue ? "#84dcc6" : "#757677",
                  cursor: inputValue ? "pointer" : "not-allowed",
                }}
                onClick={handleCommentPost}
              />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarInput;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  inputContainer: {
    flex: 1,
    position: "relative",
  },
  input: {
    transition: "0.3s",
  },
  iconContainer: {
    position: "absolute",
    right: "0.5rem",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

const StyledInput = styled(InputField)`
  background: #3a3b3c;
  &:active {
    background: #4a4b4c;
    transform: scale(1.01);
  }
`;
