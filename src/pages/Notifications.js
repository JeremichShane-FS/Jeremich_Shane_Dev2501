const Notifications = () => {
  return (
    <div className="notifications">
      <h1 className="notifications__title">Notifications</h1>
      <div className="notifications__item">
        <p className="notifications__message">You have a new follower!</p>
        <button className="notifications__close">X</button>
      </div>
      <div className="notifications__item">
        <p className="notifications__message">Your post has been liked</p>
        <button className="notifications__close">X</button>
      </div>
      <div className="notifications__item">
        <p className="notifications__message">You have a new comment</p>
        <button className="notifications__close">X</button>
      </div>
    </div>
  );
};

export default Notifications;
