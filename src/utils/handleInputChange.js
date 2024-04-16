export const handleSingleInputChange = (e, setState) => {
  setState(e.target.value);
};

export const handleObjectInputChange = (e, setInputValue) => {
  setInputValue(prevState => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};
