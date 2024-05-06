const CardContent = ({ title, content, imageUrl }) => {
  return (
    <div className="newsfeed-card__post-content">
      <p className="newsfeed-card__post-content p">{`${title} ${content}`}</p>
      {imageUrl && (
        <picture>
          <source srcSet={imageUrl} media="(min-width: 768px)" />
          <img src={imageUrl} alt={`Post content`} className="newsfeed-card__post-image" />
        </picture>
      )}
    </div>
  );
};

export default CardContent;
