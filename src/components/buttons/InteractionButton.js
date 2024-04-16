const InteractionButton = ({ icon: IconComponent, onClick, text, color, customStyles }) => (
  <button style={styles.button} onClick={onClick}>
    <IconComponent style={{ ...styles.icon, ...customStyles }} color={color} />
    {text}
  </button>
);

export default InteractionButton;

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    border: "none",
    background: "none",
    color: "#fff",
  },
  icon: {
    marginRight: "0.5rem",
    fontSize: "1.5rem",
  },
};
