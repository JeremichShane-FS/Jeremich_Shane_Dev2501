import React from "react";

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
      className={avatarClass}
      style={{
        backgroundImage: `url(${img})`,
        width: width,
        height: height,
      }}>
      {children}
    </div>
  );
};

export default Avatar;
