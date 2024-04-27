const InputField = ({
  className,
  style,
  value,
  label,
  name,
  maxLength,
  placeholder,
  type = "text",
  onChange = () => {},
  onClick = () => {},
}) => {
  const inputElement = (
    <input
      type={type}
      value={value}
      name={name}
      maxLength={maxLength}
      placeholder={placeholder}
      className={`inputfield__input${className ? ` ${className}` : ""}`}
      style={style}
      onChange={onChange}
    />
  );

  const buttonElement = (
    <div
      name={name}
      role="button"
      tabIndex={0}
      className={`inputfield__input${className ? ` ${className}` : ""}`}
      style={style}
      onClick={onClick}>
      <span className="truncate">{placeholder}</span>
    </div>
  );

  const element = type === "button" ? buttonElement : inputElement;

  return !label ? (
    element
  ) : (
    <div className="inputfield__div">
      <label htmlFor={name}>{label}</label>
      {element}
    </div>
  );
};

export default InputField;
