const Avatar = ({
  img,
  children,
  border,
  width = "3.125rem",
  height = "3.125rem",
  className = "",
}) => {
  const avatarClass = `avatar ${border ? "border" : ""} ${className}`.trim();

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        width: width,
        height: height,
      }}
      className={avatarClass}>
      {children}
    </div>
  );
};

export default Avatar;
