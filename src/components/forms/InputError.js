const InputError = ({ errors, property, grid = null }) => {
  return (
    <>
      {errors[property] && (
        <div role="alert" className={`input-error ${grid === null ? "" : `input-error--${grid}`}`}>
          {errors[property]}
        </div>
      )}
    </>
  );
};

export default InputError;
