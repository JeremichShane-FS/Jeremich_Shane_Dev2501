import { FaBell, FaEnvelope } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { DASHBOARD, MESSAGES, NOTIFICATIONS, PROFILE, SETTINGS } from "../../constants";

const HeaderProfile = () => {
  return (
    <ul className="context-menu__list">
      <Link to={PROFILE}>
        <li className="context-menu__item" role="button" aria-label="profile">
          <ImProfile />
          <span>Profile</span>
        </li>
      </Link>
      <Link to={NOTIFICATIONS}>
        <li className="context-menu__item" role="button" aria-label="notifications">
          <FaBell />
          <span>Notifications</span>
        </li>
      </Link>
      <Link to={MESSAGES}>
        <li className="context-menu__item" role="button" aria-label="messages">
          <FaEnvelope />
          <span>Messages</span>
        </li>
      </Link>
      <Link to={DASHBOARD}>
        <li className="context-menu__item" role="button" aria-label="dashboard">
          <MdSpaceDashboard />
          <span>Dashboard</span>
        </li>
      </Link>
      <Link to={SETTINGS}>
        <li className="context-menu__item" role="button" aria-label="settings">
          <IoSettings />
          <span>Settings</span>
        </li>
      </Link>
    </ul>
  );
};
export default HeaderProfile;
