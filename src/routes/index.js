// routes.js
import Dashboard from "../pages/Dashboard";
import Messages from "../pages/Messages";
import Newsfeed from "../pages/Newsfeed";
import Settings from "../pages/Settings";
import Root from "./Root";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Newsfeed /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/messages", element: <Messages /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
];
