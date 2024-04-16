import { Component } from "react";
import NewsFeedCard from "../components/cards/NewsFeedCard";
import PostCard from "../components/cards/PostCard";
import { mockPosts } from "../data/mockPosts";
import { mockUsers } from "../data/mockUsers";

export default class NewsFeed extends Component {
  render() {
    return (
      <>
        <PostCard />
        {mockPosts.posts.map(post => {
          const user = mockUsers.users.find(user => user.id === post.userId);
          return <NewsFeedCard key={post.id} post={post} user={user} users={mockUsers.users} />;
        })}
      </>
    );
  }
}
