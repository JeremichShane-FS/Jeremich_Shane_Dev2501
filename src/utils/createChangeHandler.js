export const createChangeHandler = setState => {
  return e => {
    setState(e.target.value);
  };
};
