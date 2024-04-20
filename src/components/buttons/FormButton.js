const FormButton = ({ children, onClick, className, disabled, type }) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default FormButton;
