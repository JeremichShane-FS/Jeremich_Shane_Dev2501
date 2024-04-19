import { Component } from "react";
import NewsfeedCard from "../components/cards/NewsfeedCard";
import PostCard from "../components/cards/PostCard";
import { mockPosts } from "../data/mockPosts";
import { mockUsers } from "../data/mockUsers";

// Create a state to hold a post object
// Post should include avatar, post name, post description
// App.js should display items that are being held in status-line
// Import function to handle the input change
// Import the Card component

export default class Newsfeed extends Component {
  state = {
    posts: [...mockPosts.posts],
    users: [...mockUsers.users],
  };

  findUserForPost = postId => {
    const { users } = this.state;
    const user = users.find(user => user.id === postId);
    if (!user) {
      throw new Error(`No user found for post with id ${postId}`);
    }
    return user;
  };

  render() {
    const { posts, users } = this.state;

    return (
      <>
        <PostCard />
        {posts.map(post => {
          const user = this.findUserForPost(post.userId);
          return <NewsfeedCard key={post.id} post={post} user={user} users={users} />;
        })}
      </>
    );
  }
}
