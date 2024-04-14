import Card from "./Card";

const FacebookPostCard = ({ post }) => {
  const { author, timestamp, content, image_url, likes, comments } = post;

  return (
    <Card className="post-card">
      <div className="post-header">
        <img src={author.profile_picture} alt="Profile" className="profile-picture" />
        <div className="author-info">
          <h3>{author.name}</h3>
          <p>{author.location}</p>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
        {image_url && <img src={image_url} alt="Post" className="post-image" />}
      </div>
      <div className="post-footer">
        <p>{likes} Likes</p>
        <div className="comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <strong>{comment.author.name}: </strong>
              <span>{comment.comment}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default FacebookPostCard;
