const InputError = ({ errors, property }) => {
  return (
    <>
      {errors[property] && (
        <div role="alert" className="input-error">
          {errors[property]}
        </div>
      )}
    </>
  );
};

export default InputError;
