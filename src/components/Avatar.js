const Avatar = ({ img, children, border, style, width = "3.125rem", height = "3.125rem" }) => {
  const avatarStyle = {
    ...style,
    ...styles.avatar,
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: border ? "2px solid #fff" : "none",
    width: width,
    height: height,
  };

  return <div style={avatarStyle}>{children}</div>;
};

const styles = {
  avatar: {
    borderRadius: "50%",
    position: "relative",
    cursor: "pointer",
  },
};

export default Avatar;
