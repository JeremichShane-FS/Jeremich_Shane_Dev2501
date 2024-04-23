import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import CreatePostCard from "../components/cards/CreatePostCard";
import NewsfeedCard from "../components/cards/NewsfeedCard";
import { userProfile } from "../constants/userProfile";
import { mockPosts } from "../data/mockPosts";
import { mockUsers } from "../data/mockUsers";
import { handleClassObjectInputChange } from "../utils/handleInputChange";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";

export default class Newsfeed extends Component {
  state = {
    posts: [...mockPosts.posts],
    users: [...mockUsers.users],
    userMap: {},
    loading: true,
    editPostId: null,
    inputValue: {
      title: "",
      post: "",
    },
    errors: {
      title: "",
      post: "",
    },
    isModalOpen: false,
    currentUser: userProfile,
    openContextMenu: null,
  };

  componentDidMount() {
    const posts = loadFromLocalStorage("posts", [...mockPosts.posts]);
    const users = loadFromLocalStorage("users", [...mockUsers.users]);

    const userMap = this.state.users.reduce((map, user) => {
      map[user.id] = user;
      return map;
    }, {});

    this.setState({ posts, users, userMap, loading: false });
  }

  setOpenContextMenu = postId => {
    this.setState({ openContextMenu: postId });
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

  handleEditPost = postId => {
    const postToEdit = this.state.posts.find(post => post.id === postId);

    this.setState(
      prevState => {
        const updatedPosts = prevState.posts.map(post =>
          post.id === postId
            ? { ...post, title: postToEdit.title, content: postToEdit.content }
            : post
        );

        return {
          posts: updatedPosts,
          inputValue: {
            title: postToEdit.title,
            post: postToEdit.content,
            // img: postToEdit.image_url,
            // do not have logic for image yet
          },
          editPostId: postId,
          isModalOpen: true,
        };
      },
      () => saveToLocalStorage("posts", this.state.posts)
    );
  };

  handleDeletePost = postId => {
    const updatedPosts = this.state.posts.filter(post => post.id !== postId);
    this.setState({ posts: updatedPosts });
    saveToLocalStorage("posts", updatedPosts);
  };

  handleSubmit = e => {
    e.preventDefault();

    const newPost = {
      id: this.state.editPostId || uuidv4(),
      userId: this.state.currentUser.id,
      timestamp: new Date().toISOString(),
      title: this.state.inputValue.title,
      content: this.state.inputValue.post,
      image_url: "https://source.unsplash.com/random",
      likes: 0,
      comments: [],
      // img: this.state.inputValue.img,
    };

    if (this.state.editPostId) {
      // In edit mode, update the existing post
      this.setState(
        prevState => ({
          posts: prevState.posts.map(post => (post.id === this.state.editPostId ? newPost : post)),
          editPostId: null,
          isModalOpen: false,
        }),
        () => saveToLocalStorage("posts", this.state.posts)
      );
    } else {
      // In create mode, add a new post
      this.setState(
        prevState => ({
          posts: [newPost, ...prevState.posts],
          isModalOpen: false,
        }),
        () => saveToLocalStorage("posts", this.state.posts)
      );
    }

    saveToLocalStorage("posts", this.state.posts);

    // Reset the input values
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      inputValue: {
        title: "",
        post: "",
      },
    });
  };

  render() {
    const {
      posts,
      loading,
      userMap,
      inputValue,
      errors,
      isModalOpen,
      textareaHeight,
      currentUser,
      openContextMenu,
      editPostId,
    } = this.state;

    const {
      handleInputChange,
      handleAddPost,
      resetForm,
      showModal,
      hideModal,
      handleEditPost,
      handleDeletePost,
      setOpenContextMenu,
      handleSubmit,
    } = this;

    const sortedPosts = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <CreatePostCard
          profile={userProfile}
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          handleAddPost={handleAddPost}
          resetForm={resetForm}
          errors={errors}
          showModal={showModal}
          hideModal={hideModal}
          isModalOpen={isModalOpen}
          textareaHeight={textareaHeight}
          editPostId={editPostId}
          handleSubmit={handleSubmit}
        />
        {sortedPosts.map(post => {
          const user = userMap[post.userId];
          if (!user) {
            console.error(`No user found for post with id ${post.id} and user id ${post.userId}`);
            return null;
          }
          return (
            <NewsfeedCard
              key={post.id}
              post={post}
              user={user}
              handleEditPost={handleEditPost}
              handleDeletePost={handleDeletePost}
              currentUser={currentUser}
              userMap={userMap}
              openContextMenu={openContextMenu}
              setOpenContextMenu={setOpenContextMenu}
            />
          );
        })}
      </>
    );
  }
}
