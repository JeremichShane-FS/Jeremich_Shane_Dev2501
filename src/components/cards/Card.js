const Card = ({ children, color = "#222" }) => {
  return (
    <article className="card" style={{ backgroundColor: color }}>
      {children}
    </article>
  );
};

export default Card;
