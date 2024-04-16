const InputField = ({
  className,
  value = "",
  label = "",
  name = "",
  placeholder = "",
  type = "text",
  style = {},
  onChange = () => {},
}) => {
  return !label ? (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      style={{ ...styles.input, ...style }}
      className={className}
    />
  ) : (
    <div style={styles.div}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        style={{ ...styles.input, ...style }}
        className={className}
      />
    </div>
  );
};

export default InputField;

const styles = {
  div: {
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "0.625rem 0.9375rem",
    border: "none",
    outline: "none",
    borderRadius: "1.25rem",
    color: "#fff",
    transition: "0.3s",
  },
};
