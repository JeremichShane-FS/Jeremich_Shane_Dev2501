import { Component } from "react";
import NewsfeedCard from "../components/cards/NewsfeedCard";
import PostCard from "../components/cards/PostCard";
import { mockPosts } from "../data/mockPosts";
import { mockUsers } from "../data/mockUsers";

export default class Newsfeed extends Component {
  render() {
    return (
      <>
        <PostCard />
        {mockPosts.posts.map(post => {
          const user = mockUsers.users.find(user => user.id === post.userId);
          return <NewsfeedCard key={post.id} post={post} user={user} users={mockUsers.users} />;
        })}
      </>
    );
  }
}
