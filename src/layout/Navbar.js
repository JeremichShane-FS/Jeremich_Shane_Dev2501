import { navbar } from "../constants/navbar";

const Navbar = () => {
  return (
    <nav style={styles.nav} role="navigation">
      <ul style={styles.ul}>
        {navbar.map((item, index) => {
          const Component = item.component;
          return (
            <li key={index} style={styles.li}>
              <Component aria-label={item.aria}>{item.label}</Component>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

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
  },
  li: {
    margin: "0 0.5rem 0.3125rem",
    fontSize: "1.25rem",
  },
};
