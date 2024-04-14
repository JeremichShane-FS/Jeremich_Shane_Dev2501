const FormButton = ({ children, onPress, style, disabled }) => {
  return (
    <button
      onClick={onPress}
      style={{ ...styles.button, ...style, color: disabled ? "gray" : "#fff" }}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default FormButton;

const styles = {
  button: {
    width: "9.375rem",
    background: "#3a3b3c",
    color: "#fff",
    padding: "0.625rem 0.9375rem",
    margin: "0.3125rem",
    border: "none",
    borderRadius: "0.3125rem",
    cursor: "pointer",
    transition: "0.3s",
  },
};
