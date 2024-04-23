const InteractionButton = ({
  icon: IconComponent,
  onClick,
  text,
  color,
  className,
  classIcon,
  type,
}) => (
  <button type={type} className={className} onClick={onClick}>
    <IconComponent className={classIcon} color={color} />
    {text}
  </button>
);

export default InteractionButton;
