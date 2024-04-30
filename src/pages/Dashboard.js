import Card from "../components/cards/Card";
import {
  FriendRequests,
  FriendSuggestions,
  PageSummary,
  PageVisits,
  PostReach,
  RecentFriends,
  RecentPosts,
} from "../components/dashboard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>

      <div className="top-row">
        <Card className="dashboard__item">
          <h2>Post Reach</h2>
          <PostReach />
        </Card>

        <Card className="dashboard__item">
          <h2>Page Visits</h2>
          <PageVisits />
        </Card>
      </div>

      <div className="mid-row">
        <Card className="dashboard__item">
          <h2>Page Summary</h2>
          <PageSummary />
        </Card>

        <Card className="dashboard__item">
          <h2>Recent Posts</h2>
          <RecentPosts />
        </Card>
      </div>

      <div className="bottom-row">
        <Card className="dashboard__item">
          <h2>Friend Requests</h2>
          <FriendRequests />
        </Card>

        <Card className="dashboard__item">
          <h2>Friend Suggestions</h2>
          <FriendSuggestions />
        </Card>

        <Card className="dashboard__item">
          <h2>Recent Friends</h2>
          <RecentFriends />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
