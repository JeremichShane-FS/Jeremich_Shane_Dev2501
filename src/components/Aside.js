const Aside = ({ children, className }) => {
  return (
    <section className="aside-container">
      <aside className={`aside ${className}`}>{children}</aside>
    </section>
  );
};

export default Aside;
