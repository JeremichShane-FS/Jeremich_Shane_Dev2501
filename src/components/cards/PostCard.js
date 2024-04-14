import { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaPhotoVideo, FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiGif } from "react-icons/hi2";
import styled from "styled-components";
import { userProfile } from "../../constants/userProfile";
import Avatar from "../Avatar";
import InputField from "../InputField";
import Tooltip from "../Tooltip";
import FormButton from "../buttons/FormButton";
import Card from "./Card";

const PostCard = () => {
  // useState is outside the scope of this assignment but I wanted to imnplement it to show how it would be used
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <Card>
      <header style={styles.topRow}>
        <Avatar img={userProfile.img} />
        <StyledInput
          type="text"
          placeholder={`What's on your mind, ${userProfile.firstName}?`}
          style={styles.input}
          value={inputValue}
          onChange={handleInputChange}
        />
      </header>
      <section style={styles.post}>
        <div style={styles.postIcons}>
          <p>Add to your Post</p>
          <ul style={styles.iconList}>
            <li style={styles.listItem}>
              <Tooltip text="Photo/Video">
                <FaPhotoVideo color="#58C472" style={styles.icon} />
              </Tooltip>
            </li>
            <li style={styles.listItem}>
              <Tooltip text="Tag people">
                <FaUserTag color="#3085F3" style={styles.icon} title="Tag a friend" />
              </Tooltip>
            </li>
            <li style={styles.listItem}>
              <Tooltip text="Feeling/activity">
                <BsEmojiLaughing color="#F8C03E" style={styles.icon} title="Add an emoji" />
              </Tooltip>
            </li>
            <li style={styles.listItem}>
              <Tooltip text="Check in">
                <FaLocationDot color="#F66551" style={styles.icon} title="Add a location" />
              </Tooltip>
            </li>
            <li style={styles.listItem}>
              <Tooltip text="Gif">
                <HiGif color="#40C2B0" style={styles.icon} title="Add a GIF" />
              </Tooltip>
            </li>
          </ul>
        </div>

        <FormButton
          style={{
            backgroundColor: inputValue ? "#861388" : "#3a3b3c",
            cursor: inputValue ? "pointer" : "not-allowed",
          }}
          disabled={!inputValue}>
          Post
        </FormButton>
      </section>
    </Card>
  );
};

export default PostCard;

const styles = {
  input: {
    width: "100%",
    padding: "0.625rem 0.9375rem",
    border: "none",
    outline: "none",
    borderRadius: "1.25rem",
    color: "#fff",
    transition: "0.3s",
  },
  topRow: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    paddingBottom: "1rem",
    borderBottom: "1px solid #4a4b4c",
  },
  post: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
  },
  postIcons: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    padding: "0 1rem",
    color: "#fff",
    fontWeight: "bold",
  },
  iconList: {
    display: "flex",
    listStyle: "none",
    fontSize: "2.5rem",
    height: "max-content",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    transition: "background 0.3s ease",
  },
  icon: {
    padding: "5px",
  },
};

const StyledInput = styled(InputField)`
  background: #3a3b3c;
  &:hover {
    background: #4a4b4c;
    transform: scale(1.01);
  }
  &:focus {
    background: #4a4b4c;
    transform: scale(1.01);
  }
`;
