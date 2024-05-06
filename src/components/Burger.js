const Burger = ({ onClick }) => {
  return (
    <button id="burger-menu" className="burger" onClick={onClick}>
      <div className="burger-line" />
      <div className="burger-line" />
      <div className="burger-line" />
    </button>
  );
};

export default Burger;
