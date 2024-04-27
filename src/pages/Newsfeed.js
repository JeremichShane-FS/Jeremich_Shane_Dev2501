import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import CreatePostCard from "../components/cards/CreatePostCard";
import NewsfeedCard from "../components/cards/NewsfeedCard";
import { userProfile } from "../constants/userProfile";
import { AppContext } from "../contexts/AppContext";
import { handleClassObjectInputChange } from "../utils/handleInputChange";
import { saveToLocalStorage } from "../utils/localStorage";

export default class Newsfeed extends Component {
  static contextType = AppContext;
  state = {
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

  handleEdit = postId => {
    const postToEdit = this.context.posts.find(post => post.id === postId);
    this.setState({
      inputValue: {
        title: postToEdit.title,
        post: postToEdit.content,
        // img: postToEdit.image_url,
        // do not have logic for image yet
      },
      editPostId: postId,
      isModalOpen: true,
    });
  };

  handleDelete = postId => {
    const updatedPosts = this.context.posts.filter(post => post.id !== postId);
    this.context.setPosts(updatedPosts);
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
    };

    if (this.state.editPostId) {
      // In edit mode, update the existing post
      const updatedPosts = this.context.posts.map(post =>
        post.id === this.state.editPostId ? newPost : post
      );
      this.context.setPosts(updatedPosts);
      saveToLocalStorage("posts", updatedPosts);
      this.setState({ editPostId: null, isModalOpen: false });
    } else {
      // In create mode, add a new post
      const updatedPosts = [newPost, ...this.context.posts];
      this.context.setPosts(updatedPosts);
      saveToLocalStorage("posts", updatedPosts);
      this.setState({ isModalOpen: false });
    }

    this.setState({
      inputValue: {
        title: "",
        post: "",
      },
    });
  };

  render() {
    const { loading, posts } = this.context;
    const { currentUser, editPostId, errors, inputValue, isModalOpen, openContextMenu } =
      this.state;

    const {
      handleDelete,
      handleEdit,
      handleInputChange,
      handleSubmit,
      hideModal,
      resetForm,
      setOpenContextMenu,
      showModal,
    } = this;

    const sortedPosts = [...posts].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <CreatePostCard
          editPostId={editPostId}
          errors={errors}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          hideModal={hideModal}
          inputValue={inputValue}
          isModalOpen={isModalOpen}
          profile={userProfile}
          resetForm={resetForm}
          showModal={showModal}
        />
        {sortedPosts.map(post => {
          return (
            <NewsfeedCard
              key={post.id}
              currentUser={currentUser}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              openContextMenu={openContextMenu}
              post={post}
              setOpenContextMenu={setOpenContextMenu}
            />
          );
        })}
      </>
    );
  }
}
