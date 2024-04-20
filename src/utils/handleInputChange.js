export const handleSingleInputChange = (e, setState) => {
  setState(e.target.value);
};

export const handleObjectInputChange = (e, setInputValue) => {
  const { name, value } = e.target;
  setInputValue(prevState => ({
    ...prevState,
    [name]: value,
  }));
};

export const handleClassObjectInputChange = (e, component) => {
  const { name, value } = e.target;
  component.setState(prevState => ({
    inputValue: {
      ...prevState.inputValue,
      [name]: value,
    },
  }));
};
