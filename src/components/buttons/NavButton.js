import styled from "styled-components";

const NavButton = ({ children }) => {
  return <Button style={styles.button}>{children}</Button>;
};

export default NavButton;

const styles = {
  button: {
    background: "none",
    color: "#fff",
    padding: "0.625rem 0.9375rem",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
};

// Only adding hover effect to the buttons on the nav bar.  When I switch to SASS I'll add hover effects to all buttons.
const Button = styled.button`
  border: 2px solid transparent;

  &:hover {
    border: 2px solid #54ddf8;
  }

  &:active {
    transform: scale(0.95);
  }
`;
