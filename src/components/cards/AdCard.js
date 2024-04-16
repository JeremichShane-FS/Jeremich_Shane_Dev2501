const AdCard = ({ ad }) => {
  if (!ad || ad.length === 0) {
    return null;
  }

  return (
    <article>
      <a href={ad.url} target="_blank" rel="noreferrer" key={ad.id} style={styles.a}>
        <div style={styles.adContainer}>
          <img src={ad.image} alt={ad.title} style={styles.img} />
          <div style={styles.div}>
            <h3 style={styles.title}>{ad.description}</h3>
            <p style={styles.subtitle}>{ad.url}</p>
          </div>
        </div>
      </a>
    </article>
  );
};

export default AdCard;

const styles = {
  adContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
  },
  a: {
    textDecoration: "none",
  },
  img: {
    width: "6.25rem",
    height: "6.25rem",
    borderRadius: "5px",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  title: {
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "0.8rem",
  },
};
