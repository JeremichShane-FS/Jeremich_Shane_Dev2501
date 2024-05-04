import { useContext } from "react";
import { AppContext } from "../../contexts";
import Avatar from "../Avatar";
import FormButton from "../buttons/FormButton";

const FriendSuggestions = () => {
  const { userProfile } = useContext(AppContext);
  return (
    <div className="friend-suggestions">
      <ul className="friend-suggestions__list">
        {userProfile.friendSuggestions.map((friend, index) => (
          <li key={index} className="friend-suggestions__item">
            <Avatar img={friend.profile_picture} className="friend-suggestions__img" />
            <div className="friend-requests__item__options">
              <p>
                {friend.firstName} {friend.lastName}
              </p>
              <div>
                <FormButton className="friend-suggestions__item__option">Add</FormButton>
                <FormButton className="friend-suggestions__item__option friend-suggestions__item__option--remove">
                  Remove
                </FormButton>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendSuggestions;
