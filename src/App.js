import { Component } from "react";
import Aside from "./components/Aside";
import { userProfile } from "./constants/userProfile";
import AdSection from "./layout/AdSection";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import NavSidebar from "./layout/NavSidebar";
import Newsfeed from "./pages/Newsfeed";

// TODO: Finish adding media queries for the aside containers
// TODO: Add useMemo hooks to components that need it
// TODO: Add deBounce to the search input
// TODO: Add a loading spinner for when the page is loading
// TODO: Add Routing to the app
// TODO: Add a 404 page for when the page is not found
// TODO: Find API to fetch data from instead of using mock data

export default class App extends Component {
  state = {
    color: "#84dcc6",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "white" });
    }, 3000);
  }

  render() {
    const { color } = this.state;
    return (
      <>
        <Header title="FriendSpace" placeholder="Search" color={color} userProfile={userProfile} />
        <main className="main">
          <Aside className="aside left">
            <NavSidebar userProfile={userProfile} />
          </Aside>
          <section className="pages">
            <Newsfeed />
          </section>
          <Aside className="aside right">
            <AdSection />
          </Aside>
        </main>
        <Footer />
      </>
    );
  }
}
