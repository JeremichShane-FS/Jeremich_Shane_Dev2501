import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
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
    const userMap = this.state.users.reduce((map, user) => {
      map[user.id] = user;
      return map;
    }, {});
    this.setState({ userMap, loading: false });
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

  handleAddPost = (title, postContent) => {
    this.setState(prevState => ({
      posts: [
        ...prevState.posts,
        {
          id: uuidv4(),
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

  handleEditPost = postId => {
    const postToEdit = this.state.posts.find(post => post.id === postId);

    this.setState({
      inputValue: {
        title: postToEdit.title,
        post: postToEdit.content,
        // img: postToEdit.image_url,
        // do not have logic for image yet
      },
      editPostId: postId,
    });

    this.setState({ isModalOpen: true });
  };

  handleDeletePost = postId => {
    const updatedPosts = this.state.posts.filter(post => post.id !== postId);
    this.setState({ posts: updatedPosts });
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
