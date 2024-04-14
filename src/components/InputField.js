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
  const inputProps = { style };
  if (className) {
    inputProps.className = className;
  }

  const inputElement = (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      {...inputProps}
    />
  );

  return label ? (
    <div style={styles.div}>
      <label htmlFor={name}>{label}</label>
      {inputElement}
    </div>
  ) : (
    inputElement
  );
};

export default InputField;

const styles = {
  div: {
    width: "100%",
  },
};
