const Messages = () => {
  return (
    <div className="messages">
      <h1 className="messages__title">Messages</h1>
      <div className="messages__item">
        <p className="messages__message">John Doe: Hey, how's it going?</p>
      </div>
      <div className="messages__item">
        <p className="messages__message">Jane Smith: Loved your latest post!</p>
      </div>
      <div className="messages__item">
        <p className="messages__message">Bob Johnson: Can we meet tomorrow?</p>
      </div>
    </div>
  );
};

export default Messages;
