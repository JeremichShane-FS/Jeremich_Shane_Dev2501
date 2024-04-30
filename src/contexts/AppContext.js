import { createContext, useEffect, useMemo, useState } from "react";
import { userProfile } from "../constants/userProfile";
import { mockPosts, mockUsers } from "../data";
import { loadFromLocalStorage } from "../utils";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialUsers = loadFromLocalStorage("users", [...mockUsers.users]);
    const initialPosts = loadFromLocalStorage("posts", [...mockPosts.posts]);
    setUsers(initialUsers);
    setPosts(initialPosts);
    setLoading(false);
  }, []);

  const userMap = useMemo(() => {
    return users.reduce((map, user) => {
      map[user.id] = `${user.firstName} ${user.lastName}`;
      map[userProfile.id] = `${userProfile.firstName} ${userProfile.lastName}`;
      return map;
    }, {});
  }, [users]);

  return (
    <AppContext.Provider value={{ users, setUsers, posts, setPosts, userMap, loading }}>
      {children}
    </AppContext.Provider>
  );
};
