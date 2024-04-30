import { Dashboard, Messages, Newsfeed, NotFoundPage, Notifications, Settings } from "../pages";
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
      { path: "/notifications", element: <Notifications /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
