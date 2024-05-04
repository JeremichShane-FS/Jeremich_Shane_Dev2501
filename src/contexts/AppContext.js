import { createContext, useEffect, useMemo, useState } from "react";
import { userProfile as initialUserProfile } from "../constants/userProfile";
import { mockPosts, mockUsers } from "../data";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userProfile, setUserProfile] = useState(initialUserProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let userProfileFromLocalStorage = loadFromLocalStorage("userProfile");

        if (!userProfileFromLocalStorage) {
          const res = await fetch("https://randomuser.me/api/?nat=us");
          const data = await res.json();
          const fetchedUser = data.results[0];

          const fetchedUserProfile = {
            id: fetchedUser.login.uuid,
            firstName: fetchedUser.name.first,
            lastName: fetchedUser.name.last,
            profile_picture: {
              large: fetchedUser.picture.large,
              medium: fetchedUser.picture.medium,
              thumbnail: fetchedUser.picture.thumbnail,
            },
            email: fetchedUser.email,
            street: `${fetchedUser.location.street.number} ${fetchedUser.location.street.name}`,
            city: fetchedUser.location.city,
            state: fetchedUser.location.state,
            postcode: fetchedUser.location.postcode,
            username: fetchedUser.login.username,
            password: fetchedUser.login.password,
            phone: fetchedUser.phone,
          };

          const updatedUserProfile = { ...initialUserProfile, ...fetchedUserProfile };

          saveToLocalStorage("userProfile", updatedUserProfile);
          setUserProfile(updatedUserProfile);
        } else {
          setUserProfile(userProfileFromLocalStorage);
        }
      } catch (error) {
        console.error("Error:  Unable to initiate User Profile: ", error);
      }
    })();

    const initialUsers = loadFromLocalStorage("users", [...mockUsers.users]);
    const initialPosts = loadFromLocalStorage("posts", [...mockPosts.posts]);
    const loadedUserProfile = loadFromLocalStorage("userProfile", initialUserProfile);
    setUsers(initialUsers);
    setPosts(initialPosts);
    setUserProfile(loadedUserProfile);
    setLoading(false);
  }, []);

  const userMap = useMemo(() => {
    return users.reduce((map, user) => {
      map[user.id] = `${user.firstName} ${user.lastName}`;
      map[userProfile.id] = `${userProfile.firstName} ${userProfile.lastName}`;
      return map;
    }, {});
  }, [users, userProfile.firstName, userProfile.id, userProfile.lastName]);

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        posts,
        setPosts,
        userMap,
        loading,
        setLoading,
        userProfile,
        setUserProfile,
      }}>
      {children}
    </AppContext.Provider>
  );
};
