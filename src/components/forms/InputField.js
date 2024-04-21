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
      onChange={onChange}
      className={`inputfield__input${className ? ` ${className}` : ""}`}
      style={style}
    />
  );

  const buttonElement = (
    <div
      name={name}
      onClick={onClick}
      role="button"
      tabIndex={0}
      className={`inputfield__input${className ? ` ${className}` : ""}`}
      style={style}>
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
