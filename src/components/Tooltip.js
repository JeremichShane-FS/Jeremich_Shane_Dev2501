const Tooltip = ({ children, text }) => (
  <div className="tooltip">
    {children}
    <span className="tooltip-text">{text}</span>
  </div>
);

export default Tooltip;
