const Card = ({ children, className, color = "#222" }) => {
  return (
    <article className={`card ${className}`} style={{ backgroundColor: color }}>
      {children}
    </article>
  );
};

export default Card;
