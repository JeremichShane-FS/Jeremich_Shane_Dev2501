import Avatar from "../components/Avatar";
import { navSidebar } from "../constants/navSidebar";

const NavSidebar = ({ userProfile: { firstName, lastName, profile_picture } }) => {
  return (
    <nav role="navigation" className="navsidebar">
      <ul className="navsidebar__list">
        <li className="navsidebar__list-item">
          <button className="navsidebar__image">
            <Avatar img={profile_picture} height="2rem" width="2rem" />
            {firstName} {lastName}
          </button>
        </li>
        {navSidebar.map(({ icon: Icon, color, label, component: Component }, index) => {
          return (
            <li key={index} className="navsidebar__list-item">
              <Component
                color={color}
                icon={Icon}
                text={label}
                aria={`Navigate to ${label}`}
                className="btn-interaction"
                classIcon="btn-interaction__navsidebar__icon navsidebar__icon"
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavSidebar;
