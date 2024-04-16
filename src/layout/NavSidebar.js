import Avatar from "../components/Avatar";
import { navSidebar } from "../constants/navSidebar";
import { userProfile } from "../constants/userProfile";

const NavSidebar = () => {
  const { firstName, lastName, img } = userProfile;

  return (
    <nav role="navigation">
      <ul>
        <li style={styles.li}>
          <button style={styles.img}>
            <Avatar img={img} height="2rem" width="2rem" />
            {firstName} {lastName}
          </button>
        </li>
        {navSidebar.map(({ icon: Icon, color, label, component: Component }, index) => {
          return (
            <li key={index} style={styles.li}>
              <Component
                icon={Icon}
                color={color}
                text={label}
                aria={`Navigate to ${label}`}
                customStyles={styles.icon}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavSidebar;

const styles = {
  li: {
    display: "flex",
    padding: "0.5rem",
    fontSize: "1rem",
    margin: "0.5rem 0",
  },
  img: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    background: "none",
    color: "#fff",
  },
  icon: {
    marginRight: "1rem",
    fontSize: "2rem",
  },
};
