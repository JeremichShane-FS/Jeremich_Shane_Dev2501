import { useContext } from "react";
import cover from "../assets/img/banner.jpg";
import Avatar from "../components/Avatar";
import { AppContext } from "../contexts/AppContext";

const Profile = () => {
  const { userProfile } = useContext(AppContext);
  const { firstName, lastName } = userProfile;
  return (
    <div className="profile">
      <div className="profile__cover">
        <img src={cover} alt="Cover" />
      </div>
      <div className="profile__info">
        <Avatar
          border
          img={userProfile.profile_picture.large}
          width="6.25rem"
          height="6.25rem"
          className="profile__avatar"
        />
        <h1 className="profile__name">{`${firstName} ${lastName}`}</h1>
        <p className="profile__bio">Software Engineer at XYZ</p>
        <button className="profile__button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
