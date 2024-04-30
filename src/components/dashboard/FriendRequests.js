import { userProfile } from "../../constants/userProfile";
import Avatar from "../Avatar";
import FormButton from "../buttons/FormButton";

const FriendRequests = () => {
  return (
    <div className="friend-requests">
      <ul className="friend-requests__list">
        {userProfile.friendRequests.map((friend, index) => (
          <li key={index} className="friend-requests__item">
            <Avatar img={friend.profile_picture} className="friend-requests__img" />
            <div className="friend-requests__item__options">
              <p>
                {friend.firstName} {friend.lastName}
              </p>
              <div>
                <FormButton className="friend-requests__item__option">Confirm</FormButton>
                <FormButton className="friend-requests__item__option friend-requests__item__option--remove">
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

export default FriendRequests;
