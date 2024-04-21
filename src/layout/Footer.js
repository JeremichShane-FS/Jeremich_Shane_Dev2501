import setCopyright from "../utils/copyright";

const Footer = () => {
  return (
    <footer className="footer">
      <p>{setCopyright(`FriendSpace. All rights reserved.`)}</p>
    </footer>
  );
};

export default Footer;
