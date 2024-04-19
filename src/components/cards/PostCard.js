import { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaPhotoVideo, FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiGif } from "react-icons/hi2";
import { handleObjectInputChange } from "../../utils/handleInputChange";
import Tooltip from "../Tooltip";
import FormButton from "../buttons/FormButton";
import InputAvatar from "../forms/InputAvatar";
import InputField from "../forms/InputField";
import Card from "./Card";

const PostCard = () => {
  const [inputValue, setInputValue] = useState({ title: "", post: "" });

  // TODO: Will remove input for Title of post in the future, but for now, it's required

  return (
    <Card>
      <div className="post-card__inputs-container">
        <InputField
          className="post-card__title-input"
          placeholder="Title of post"
          onChange={e => handleObjectInputChange(e, setInputValue)}
          value={inputValue.title}
          name="title"
          type="text"
        />
        <InputAvatar
          className="post-card__name-input"
          name="post"
          onInputChange={e => handleObjectInputChange(e, setInputValue)}
        />
      </div>
      <section className="post-card__post">
        <div className="post-card__post-icons">
          <p className="post-card__post-icons-text">Add to your Post</p>
          <ul className="post-card__icon-list">
            <li className="post-card__list-item">
              <Tooltip text="Photo/Video">
                <FaPhotoVideo color="#58C472" className="post-card__icon" />
              </Tooltip>
            </li>
            <li className="post-card__list-item">
              <Tooltip text="Tag people">
                <FaUserTag color="#3085F3" className="post-card__icon" title="Tag a friend" />
              </Tooltip>
            </li>
            <li className="post-card__list-item">
              <Tooltip text="Feeling/activity">
                <BsEmojiLaughing color="#F8C03E" className="post-card__icon" title="Add an emoji" />
              </Tooltip>
            </li>
            <li className="post-card__list-item">
              <Tooltip text="Check in">
                <FaLocationDot color="#F66551" className="post-card__icon" title="Add a location" />
              </Tooltip>
            </li>
            <li className="post-card__list-item">
              <Tooltip text="Gif">
                <HiGif color="#40C2B0" className="post-card__icon" title="Add a GIF" />
              </Tooltip>
            </li>
          </ul>
        </div>

        <FormButton
          className={`btn-form ${inputValue.title && inputValue.post ? "btn-form--active" : ""}`}
          disabled={!(inputValue.title && inputValue.post)}
          onClick={() => console.log("posting...")}>
          Post
        </FormButton>
      </section>
    </Card>
  );
};

export default PostCard;
