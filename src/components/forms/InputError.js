const InputError = ({ errors, property }) => {
  return (
    <>
      {errors[property] && (
        <div role="alert" className="post-card__error">
          {errors[property]}
        </div>
      )}
    </>
  );
};

export default InputError;
