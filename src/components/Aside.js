// I want an aside component that I can use in the App component.  I want to be able to pass in children

const Aside = ({ style, children }) => {
  return <aside style={{ ...style, ...styles.aside }}>{children}</aside>;
};

export default Aside;

const styles = {
  aside: {
    backgroundColor: "#222",
    padding: "1rem",
    borderRadius: "5px",
  },
};
