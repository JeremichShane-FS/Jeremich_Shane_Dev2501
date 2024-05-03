import { Dashboard, Messages, Newsfeed, NotFoundPage, Notifications, Settings } from "../pages";
import { Friends, Groups, Memories, Saved, Video } from "../pages/left-sidebar";
import Root from "./Root";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Newsfeed /> },
      { path: "/newsfeed", element: <Newsfeed /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/messages", element: <Messages /> },
      { path: "/settings", element: <Settings /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/friends", element: <Friends /> },
      { path: "/groups", element: <Groups /> },
      { path: "/memories", element: <Memories /> },
      { path: "/saved", element: <Saved /> },
      { path: "/video", element: <Video /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
