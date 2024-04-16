import { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaPhotoVideo, FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiGif } from "react-icons/hi2";
import styled from "styled-components";
import { handleObjectInputChange } from "../../utils/handleInputChange";
import AvatarInput from "../AvatarInput";
import InputField from "../InputField";
import Tooltip from "../Tooltip";
import FormButton from "../buttons/FormButton";
import Card from "./Card";

const PostCard = () => {
  const [inputValue, setInputValue] = useState({ title: "", post: "" });

  // TODO: Will remove input for Title of post in the future, but for now, it's required

  return (
    <Card>
      <div style={styles.inputsContainer}>
        <InputField
          style={styles.postTitle}
          placeholder="Title of post"
          onChange={e => handleObjectInputChange(e, setInputValue)}
          value={inputValue.title}
          name="title"
        />
        <AvatarInput name="post" onInputChange={e => handleObjectInputChange(e, setInputValue)} />
      </div>
      <section style={styles.post}>
        <div style={styles.postIcons}>
          <PostIconsText className="post-icons-text">Add to your Post</PostIconsText>
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
            backgroundColor: inputValue.title && inputValue.post ? "#861388" : "#3a3b3c",
            cursor: inputValue.title && inputValue.post ? "pointer" : "not-allowed",
          }}
          disabled={!(inputValue.title && inputValue.post)}>
          Post
        </FormButton>
      </section>
    </Card>
  );
};

export default PostCard;

const styles = {
  postTitle: {
    backgroundColor: "#3a3b3c",
    margin: "0 auto 1rem",
  },

  inputsContainer: {
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

const PostIconsText = styled.p`
  @media (max-width: 1380px) {
    display: none;
  }
`;
