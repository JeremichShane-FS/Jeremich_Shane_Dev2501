import { AiOutlineLike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import InteractionButton from "./buttons/InteractionButton";

const SocialInteraction = () => {
  const handleLike = () => {
    // handle like logic
  };

  const handleComment = () => {
    // handle comment logic
  };

  const handleShare = () => {
    // handle share logic
  };
  return (
    <div className="social-interaction">
      <InteractionButton
        icon={AiOutlineLike}
        text="Like"
        onClick={handleLike}
        className="social-interaction__button"
        classIcon="social-interaction__icon"
      />
      <InteractionButton
        icon={GoComment}
        text="Comment"
        onClick={handleComment}
        className="social-interaction__button"
        classIcon="social-interaction__icon"
      />
      <InteractionButton
        icon={FaRegShareSquare}
        text="Share"
        onClick={handleShare}
        className="social-interaction__button"
        classIcon="social-interaction__icon"
      />
    </div>
  );
};

export default SocialInteraction;
