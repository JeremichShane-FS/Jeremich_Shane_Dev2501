const InputField = ({
  className,
  value = "",
  label = "",
  name = "",
  maxLength,
  placeholder = "",
  type = "text",
  onChange = () => {},
}) => {
  return !label ? (
    <input
      type={type}
      value={value}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={onChange}
      className={`inputfield__input${className ? ` ${className}` : ""}`}
    />
  ) : (
    <div className="inputfield__div">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChange}
        className={`inputfield__input${className ? ` ${className}` : ""}`}
      />
    </div>
  );
};

export default InputField;
