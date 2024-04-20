import { Component } from "react";
import CreatePostCard from "../components/cards/CreatePostCard";
import NewsfeedCard from "../components/cards/NewsfeedCard";
import { userProfile } from "../constants/userProfile";
import { mockPosts } from "../data/mockPosts";
import { mockUsers } from "../data/mockUsers";
import { handleClassObjectInputChange } from "../utils/handleInputChange";

export default class Newsfeed extends Component {
  state = {
    posts: [...mockPosts.posts],
    users: [...mockUsers.users],
    inputValue: {
      title: "",
      post: "",
    },
    errors: {
      title: "",
      post: "",
    },
    isModalOpen: false,
    textareaHeight: "inherit",
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  hideModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    handleClassObjectInputChange(e, this);

    const target = e.target;
    target.style.height = "inherit";
    target.style.height = `${target.scrollHeight}px`;
    this.setState({ textareaHeight: `${target.scrollHeight}px` });

    let titleNum = 50;
    let postNum = 1000;

    let errorMessage = "";
    if (name === "title" && value.trim().length > titleNum) {
      errorMessage = `Title must be no more than ${titleNum} characters`;
    } else if (name === "post" && value.trim().length > postNum) {
      errorMessage = `Post content must be no more than ${postNum} characters`;
    }

    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        [name]: errorMessage,
      },
    }));
  };

  addPost = (title, postContent) => {
    this.setState(prevState => ({
      posts: [
        ...prevState.posts,
        {
          id: `post${prevState.posts.length + 1}`,
          userId: userProfile.id,
          timestamp: new Date().toISOString(),
          title: title,
          content: postContent,
          image_url: "https://source.unsplash.com/random",
          likes: 0,
          comments: [],
        },
      ],
    }));
  };

  resetForm = () => {
    this.setState({
      inputValue: {
        title: "",
        post: "",
      },
    });
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
    const { posts, users, inputValue, errors, isModalOpen, textareaHeight } = this.state;
    const { findUserForPost, handleInputChange, addPost, resetForm, showModal, hideModal } = this;
    const sortedPosts = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    console.log(textareaHeight);

    return (
      <>
        <CreatePostCard
          profile={userProfile}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          addPost={addPost}
          resetForm={resetForm}
          errors={errors}
          showModal={showModal}
          hideModal={hideModal}
          isModalOpen={isModalOpen}
          textareaHeight={textareaHeight}
        />
        {sortedPosts.map(post => {
          const user = findUserForPost(post.userId);
          return <NewsfeedCard key={post.id} post={post} user={user} users={users} />;
        })}
      </>
    );
  }
}
