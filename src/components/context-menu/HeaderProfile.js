import { ImProfile } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

const HeaderProfile = () => {
  return (
    <ul className="context-menu__list">
      <li className="context-menu__item" role="button" aria-label="">
        <ImProfile />
        <span>Profile</span>
      </li>
      <li className="context-menu__item" role="button" aria-label="">
        <MdSpaceDashboard />
        <span>Dashboard</span>
      </li>
      <li className="context-menu__item" role="button" aria-label="">
        <IoSettings />
        <span>Settings</span>
      </li>
    </ul>
  );
};
export default HeaderProfile;
