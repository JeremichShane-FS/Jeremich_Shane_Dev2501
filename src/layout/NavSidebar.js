import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { navSidebar } from "../constants/navSidebar";

const NavSidebar = ({ userProfile: { firstName, lastName, profile_picture } }) => {
  return (
    <nav role="navigation" className="navsidebar">
      <ul className="navsidebar__list">
        <Link path="/">
          <li className="navsidebar__list-item">
            <button className="navsidebar__image">
              <Avatar img={profile_picture} height="2rem" width="2rem" />
              {firstName} {lastName}
            </button>
          </li>
        </Link>
        {navSidebar.map(({ icon: Icon, color, label, component: Component, path }, index) => {
          return (
            <li key={index} className="navsidebar__list-item">
              <div>
                <Link to={path}>
                  <Component
                    color={color}
                    icon={Icon}
                    text={label}
                    aria={`Navigate to ${label}`}
                    className="btn-interaction"
                    classIcon="btn-interaction__navsidebar__icon navsidebar__icon"
                  />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavSidebar;
