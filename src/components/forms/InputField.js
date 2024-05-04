const InputField = ({
  className,
  style,
  value,
  label,
  name,
  maxLength,
  placeholder,
  disabled,
  labelClassName,
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
      disabled={disabled}
      className={`inputfield__input${className ? ` ${className}` : ""}`}
      style={style}
      onChange={onChange}
    />
  );

  const buttonElement = (
    <div
      type="button"
      name={name}
      className={`inputfield__input${className ? ` ${className}` : ""}`}
      disabled={disabled}
      style={style}
      onClick={onClick}>
      <span className="truncate">{placeholder}</span>
    </div>
  );

  const element = type === "button" ? buttonElement : inputElement;

  return !label ? (
    element
  ) : (
    <div className={`inputfield__div ${labelClassName}`}>
      <label htmlFor={name}>{label}</label>
      {element}
    </div>
  );
};

export default InputField;
