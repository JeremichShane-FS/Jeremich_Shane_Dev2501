import { userProfile } from "../../constants/userProfile";

const RecentPosts = () =>
  userProfile.recentPosts.map(post => {
    return (
      <div key={post.id} className="recent-posts__post">
        <p>{post.comment}</p>
      </div>
    );
  });

export default RecentPosts;
