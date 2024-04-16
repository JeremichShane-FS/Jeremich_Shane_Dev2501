const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 FriendSpace. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: "#222",
    textAlign: "center",
    padding: "1rem",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
};
