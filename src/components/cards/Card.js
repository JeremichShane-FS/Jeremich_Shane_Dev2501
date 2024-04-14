const Card = ({ children }) => {
  return <div style={styles.card}>{children}</div>;
};

export default Card;

const styles = {
  card: {
    backgroundColor: "#222",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
};
