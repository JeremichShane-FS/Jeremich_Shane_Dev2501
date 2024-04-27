import { createBrowserRouter, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Messages from "../pages/Messages";
import Newsfeed from "../pages/Newsfeed";
import NotFoundPage from "../pages/NotFoundPage";
import Settings from "../pages/Settings";
import { DASHBOARD, MESSAGES, NEWSFEED, NOT_FOUND, SETTINGS } from "./routePath";

const Router = createBrowserRouter(
  createBrowserRouter(
    <Route path="/" element={<Root />}>
      <Route path={DASHBOARD} element={<Dashboard />} />
      <Route path={MESSAGES} element={<Messages />} />
      <Route path={NEWSFEED} element={<Newsfeed />} />
      <Route path={SETTINGS} element={<Settings />} />
      <Route path={NOT_FOUND} element={<NotFoundPage />} />
    </Route>
  )
);

const RoutesComponent = () => <h1></h1>;

const Root = () => {
  return (
    <div>
      <h1>Root</h1>
      <p>Welcome to the root page</p>
    </div>
  );
};

export default RoutesComponent;
