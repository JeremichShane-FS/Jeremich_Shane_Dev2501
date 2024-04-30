const FormButton = ({ children, onClick, className, disabled, type }) => {
  return (
    <button className={className} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default FormButton;
