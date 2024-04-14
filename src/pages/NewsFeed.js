import { Component } from "react";
import NewsFeedCard from "../components/cards/NewsFeedCard";
import PostCard from "../components/cards/PostCard";
import { mockPosts } from "../data/mockPosts";

export default class NewsFeed extends Component {
  render() {
    return (
      <>
        <PostCard />
        {mockPosts.posts.map(post => (
          <NewsFeedCard key={post.id} post={post} />
        ))}
      </>
    );
  }
}
