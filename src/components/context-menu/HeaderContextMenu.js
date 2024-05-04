import { ImProfile } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { DASHBOARD, PROFILE, SETTINGS } from "../../constants";

const HeaderProfile = () => {
  return (
    <ul className="context-menu__list">
      <Link to={PROFILE}>
        <li className="context-menu__item" role="button" aria-label="">
          <ImProfile />
          <span>Profile</span>
        </li>
      </Link>
      <Link to={DASHBOARD}>
        <li className="context-menu__item">
          <MdSpaceDashboard />
          <span>Dashboard</span>
        </li>
      </Link>
      <Link to={SETTINGS}>
        <li className="context-menu__item" role="button" aria-label="">
          <IoSettings />
          <span>Settings</span>
        </li>
      </Link>
    </ul>
  );
};
export default HeaderProfile;
