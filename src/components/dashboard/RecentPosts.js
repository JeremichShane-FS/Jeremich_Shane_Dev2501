import { useContext } from "react";
import { AppContext } from "../../contexts";

const RecentPosts = () => {
  const { userProfile } = useContext(AppContext);

  return userProfile.recentPosts.map(post => {
    return (
      <div key={post.id} className="recent-posts__post">
        <p>{post.comment}</p>
      </div>
    );
  });
};

export default RecentPosts;
