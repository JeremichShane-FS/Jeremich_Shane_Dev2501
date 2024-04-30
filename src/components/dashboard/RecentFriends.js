import { userProfile } from "../../constants/userProfile";
import Avatar from "../Avatar";

const RecentFriends = () => {
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
