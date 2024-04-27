import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/img/fs.png";
import Avatar from "../components/Avatar";
import SearchBar from "../components/forms/SearchBar";

const Header = ({ title, color, userProfile: { profile_picture } }) => {
  return (
    <header className="header">
      <section className="header__logo-container">
        <Link to="/">
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
        <span className="header__profile__span">
          <FaBell className="header__icon" aria-label="notifications" />
        </span>
        <Link to="/messages">
          <span className="header__profile__span">
            <FaEnvelope className="header__icon" aria-label="messages" />
          </span>
        </Link>
        <Link to="/settings">
          <span className="header__profile__span">
            <IoSettings className="header__icon" aria-label="settings" />
          </span>
        </Link>
        <Link to="/dashboard">
          <Avatar border img={profile_picture}>
            <span className="header__status header__status--active"></span>
          </Avatar>
        </Link>
      </section>
    </header>
  );
};

export default Header;
