const Avatar = ({ img, children, border, width = "3.125rem", height = "3.125rem" }) => {
  const avatarStyle = {
    ...styles.avatar,
    backgroundImage: `url(${img})`,
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
