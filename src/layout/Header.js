import { useContext, useRef } from "react";
import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/img/fs.png";
import Avatar from "../components/Avatar";
import ContextMenu from "../components/ContextMenu";
import { HeaderContextMenu } from "../components/context-menu";
import SearchBar from "../components/forms/SearchBar";
import { MESSAGES, NOTIFICATIONS, ROOT, SETTINGS } from "../constants";
import { OpenContextMenuContext } from "../contexts";
import { useClickOutside } from "../hooks";

const Header = ({
  title,
  color,
  menuPosition,
  userProfile,
  userProfile: {
    profile_picture: { medium },
  },
}) => {
  const {
    openContextMenu,
    setOpenContextMenu,
    handleContextMenu: handleContextMenuProp,
  } = useContext(OpenContextMenuContext);
  const menuRef = useRef(null);
  const handleContextMenu = e => {
    handleContextMenuProp(e, "Header");
  };

  useClickOutside(menuRef, () => {
    setOpenContextMenu(null);
  });

  const isOpen = openContextMenu && openContextMenu.source === "Header";

  return (
    <header className="header">
      <section className="header__logo-container">
        <Link to={ROOT}>
          <img src={logo} alt="FriendSpace Logo" className="header__logo-container__logo" />
          <h1 className="header__logo-container__h1" style={{ color: `${color}` }}>
            {title}
          </h1>
        </Link>
      </section>
      <section className="header__search-container search-bar">
        <div className="header__search-container__div">
          <FaSearch color={"#222"} className="header__icons" />
          <SearchBar placeholder="Search" aria-label="Search" />
        </div>
      </section>
      <section className="header__profile-container">
        <Link to={NOTIFICATIONS}>
          <span className="header__profile__span">
            <FaBell className="header__icon" aria-label="notifications" />
          </span>
        </Link>
        <Link to={MESSAGES}>
          <span className="header__profile__span">
            <FaEnvelope className="header__icon" aria-label="messages" />
          </span>
        </Link>
        <Link to={SETTINGS}>
          <span className="header__profile__span">
            <IoSettings className="header__icon" aria-label="settings" />
          </span>
        </Link>
        <div className="header__profile-avatar" onClick={handleContextMenu}>
          <Avatar border img={medium}>
            <span className="header__status header__status--active"></span>
          </Avatar>
          <ContextMenu ref={menuRef} isOpen={isOpen} menuPosition={menuPosition}>
            <HeaderContextMenu />
          </ContextMenu>
        </div>
      </section>
    </header>
  );
};

export default Header;
