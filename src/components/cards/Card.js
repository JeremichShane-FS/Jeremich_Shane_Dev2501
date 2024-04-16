const Card = ({ children }) => {
  return <article style={styles.card}>{children}</article>;
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
