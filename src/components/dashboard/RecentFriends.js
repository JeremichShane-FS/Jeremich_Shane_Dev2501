import { useContext } from "react";
import { AppContext } from "../../contexts";
import Avatar from "../Avatar";

const RecentFriends = () => {
  const { userProfile } = useContext(AppContext);
  return (
    <div className="recent-friends">
      <ul className="recent-friends__list">
        {userProfile.recentFriends.map((friend, index) => (
          <li key={index} className="recent-friends__item">
            <Avatar img={friend.profile_picture} className="recent-friends__img" />
            <p>
              {friend.firstName} {friend.lastName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentFriends;
