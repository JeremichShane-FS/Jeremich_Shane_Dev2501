// import styled from "styled-components";
import NavButton from "../components/buttons/NavButton";

const Nav = () => {
  const navItems = [
    { label: "News Feed", component: NavButton, aria: "Navigate to News Feed", path: "/newsfeed" },
    { label: "Messages", component: NavButton, aria: "Navigate to Messages", path: "/messages" },
    { label: "Watch", component: NavButton, aria: "Navigate to Watch", path: "/watch" },
  ];

  return (
    <nav style={styles.nav} role="navigation">
      <ul style={styles.ul}>
        {navItems.map((button, index) => (
          <li key={index} style={styles.li}>
            <button.component aria-label={button.aria}>{button.label}</button.component>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

const styles = {
  nav: {
    background: "#222",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  ul: {
    display: "flex",
    listStyle: "none",
  },
  li: {
    margin: "0 0.5rem 0.3125rem",
    fontWeight: "bold",
  },
};
