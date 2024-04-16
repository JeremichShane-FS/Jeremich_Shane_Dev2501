import { FaBell, FaEnvelope, FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import styled from "styled-components";
import logo from "../assets/img/fs.png";
import Avatar from "../components/Avatar";
import SearchBar from "../components/SearchBar";
import { userProfile } from "../constants/userProfile";

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <section className="logo-container" style={styles.logoContainer}>
        <img src={logo} alt="FriendSpace Logo" style={styles.logoContainer.logo} />
        <h1 style={styles.logoContainer.h1}>{title}</h1>
      </section>
      <section className="search-bar" style={styles.searchContainer}>
        <div style={styles.searchContainer.div}>
          <FaSearch color={"#222"} style={styles.faSearch} />
          <SearchBar placeholder="Search" aria-label="Search" />
        </div>
      </section>
      <section className="profile-container" style={styles.profileContainer}>
        <FaBell style={styles.icons} aria-label="notifications" />
        <FaEnvelope style={styles.icons} aria-label="messages" />
        <IoSettings style={styles.icons} aria-label="settings" />
        <Avatar img={userProfile.img} border>
          <span style={styles.status}></span>
        </Avatar>
      </section>
    </StyledHeader>
  );
};

export default Header;

const styles = {
  header: {
    gridTemplateColumns: "20% 1fr 20%",
    padding: "1rem",
    background: "#222",
    width: "100%",
    position: "fixed",
    top: "0",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",

    logo: {
      height: "1.5625rem",
      marginRight: "0.5rem",
      cursor: "pointer",
    },

    h1: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "1.5rem",
      fontWeight: "900",
      cursor: "pointer",
    },
  },

  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    div: {
      background: "#fff",
      display: "flex",
      width: "75%",
      alignItems: "center",
      paddingLeft: "0.5rem",
      borderRadius: "1.25rem",
    },
  },

  profileContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icons: {
    marginRight: "1.25rem",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  status: {
    width: "12px",
    height: "12px",
    border: "2px solid #fff",
    borderRadius: "50%",
    position: "absolute",
    right: "0",
    bottom: "0",
    transform: "translate(50%, -50%)",
    backgroundColor: "#4b4e6d",

    // This is here for when I need it later
    active: {
      backgroundColor: "#30f94b",
    },
  },
};

// In React, inline styles are written as objects and don't support media queries or pseudo-selectors. To use media queries, I am using styled components.  I will switch to SASS for consistency when I'm allowed to use it.
const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: ${styles.header.gridTemplateColumns};
  padding: ${styles.header.padding};
  background: ${styles.header.background};
  width: ${styles.header.width};
  position: ${styles.header.position};
  z-index: 1000;

  .search-bar {
    transition: 0.3s;
  }
  .search-bar:hover,
  .search-bar:active {
    transform: scale(1.01);
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;

    .search-bar {
      grid-column: span 2;
      width: 100%;
      margin-top: 1rem;
      order: 3;
    }

    .logo-container,
    .profile-container {
      width: 100%;
    }
  }
`;
