import Card from "./Card";

const AdCard = ({ ad }) => {
  if (!ad || ad.length === 0) {
    return null;
  }

  const { id, url, image, title, description } = ad;

  return (
    <Card color="transparent">
      <a href={url} target="_blank" rel="noreferrer" key={id}>
        <div className="ad-card">
          <img src={image} alt={title} className="ad-card__image" />
          <div className="ad-card__content">
            <h3 className="ad-card__title">{description}</h3>
            <p className="ad-card__subtitle">{url}</p>
          </div>
        </div>
      </a>
    </Card>
  );
};

export default AdCard;
