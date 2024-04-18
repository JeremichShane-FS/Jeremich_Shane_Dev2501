const InteractionButton = ({ icon: IconComponent, onClick, text, color, className, classIcon }) => (
  <button className={className} onClick={onClick}>
    <IconComponent className={classIcon} color={color} />
    {text}
  </button>
);

export default InteractionButton;
