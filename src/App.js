import { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

// TODO: Finish adding media queries for the aside containers
// TODO: Add deBounce to the search input
// TODO: Add a loading spinner for when the page is loading
// TODO: Find API to fetch data from instead of using mock data

// Clicking the Avatar component in the Header component will navigate to the Dashboard page.
// Clicking the settings icon in the Header component will navigate to the Settings page.
// Clicking the messages icon in the Header component will navigate to the Messages page.
// Clicking the FriendSpace logo in the Header component will navigate to the Newsfeed page.
// Newsfeed page loads assuming the user is logged in else it will redirect to the login page.

class App extends Component {
  render() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
  }
}

export default App;
