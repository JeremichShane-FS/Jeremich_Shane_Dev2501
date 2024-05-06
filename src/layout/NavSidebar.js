import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { PROFILE } from "../constants";
import { navSidebar } from "../constants/navSidebar";

const NavSidebar = forwardRef(
  (
    {
      open,
      closeSidebar,
      userProfile: {
        firstName,
        profile_picture: { medium },
      },
    },
    ref
  ) => {
    return (
      <nav ref={ref} className={`navsidebar ${open ? "open" : ""}`}>
        <ul className="navsidebar__list">
          <Link to={PROFILE}>
            <li className="navsidebar__list-item" onClick={closeSidebar}>
              <button className="navsidebar__image">
                <div className="navsidebar__name">
                  <Avatar img={medium} height="2rem" width="2rem" />
                  {`${firstName} `}
                </div>
              </button>
            </li>
          </Link>
          {navSidebar.map(({ icon: Icon, color, label, component: Component, path }, index) => {
            if (typeof Component !== "function") {
              console.error(
                `Component at index ${index} is not a function. It is: ${typeof Component}`
              );
              return null;
            }
            return (
              <li key={index} className="navsidebar__list-item" onClick={closeSidebar}>
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
  }
);

export default NavSidebar;
