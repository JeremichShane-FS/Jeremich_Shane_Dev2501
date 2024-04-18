import Avatar from "../components/Avatar";
import { navSidebar } from "../constants/navSidebar";
import { userProfile } from "../constants/userProfile";

const NavSidebar = () => {
  const { firstName, lastName, img } = userProfile;

  return (
    <nav role="navigation" className="nav-sidebar">
      <ul>
        <li className="nav-sidebar__list-item">
          <button className="nav-sidebar__image">
            <Avatar img={img} height="2rem" width="2rem" />
            {firstName} {lastName}
          </button>
        </li>
        {navSidebar.map(({ icon: Icon, color, label, component: Component }, index) => {
          return (
            <li key={index} className="nav-sidebar__list-item">
              <Component
                icon={Icon}
                color={color}
                text={label}
                aria={`Navigate to ${label}`}
                className="btn-interaction"
                classIcon="btn-interaction__nav-sidebar__icon nav-sidebar__icon"
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavSidebar;
