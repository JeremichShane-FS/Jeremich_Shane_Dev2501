import { Component } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

// TODO: Add deBounce to the search input
// TODO: Add a loading spinner all components for when the component is loading
// TODO: Find API to fetch data from instead of using mock data

// Newsfeed page loads assuming the user is logged in else it will redirect to the login page.

class App extends Component {
  render() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
  }
}

export default App;
