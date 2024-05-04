import {
  Dashboard,
  Messages,
  Newsfeed,
  NotFoundPage,
  Notifications,
  Profile,
  Settings,
} from "../pages";
import { Friends, Groups, Memories, Saved, Video, Watch } from "../pages/left-sidebar";
import {
  DASHBOARD,
  FRIENDS,
  GROUPS,
  MEMORIES,
  MESSAGES,
  NEWSFEED,
  NOTIFICATIONS,
  NOT_FOUND,
  PROFILE,
  ROOT,
  SAVED,
  SETTINGS,
  VIDEO,
  WATCH,
} from "../constants";
import { Root } from "./";

export const routes = [
  {
    path: ROOT,
    element: <Root />,
    children: [
      { path: DASHBOARD, element: <Dashboard /> },
      { path: FRIENDS, element: <Friends /> },
      { path: GROUPS, element: <Groups /> },
      { path: MEMORIES, element: <Memories /> },
      { path: MESSAGES, element: <Messages /> },
      { path: NEWSFEED, element: <Newsfeed /> },
      { path: NOT_FOUND, element: <NotFoundPage /> },
      { path: NOTIFICATIONS, element: <Notifications /> },
      { path: PROFILE, element: <Profile /> },
      { path: ROOT, element: <Newsfeed /> },
      { path: SAVED, element: <Saved /> },
      { path: SETTINGS, element: <Settings /> },
      { path: VIDEO, element: <Video /> },
      { path: WATCH, element: <Watch /> },
    ],
  },
];
