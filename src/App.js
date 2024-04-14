import { Component } from "react";
import Aside from "./components/Aside";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import NewsFeed from "./pages/NewsFeed";

export default class App extends Component {
  render() {
    // Future updates to include icons, more styling, and functionality.  Right now just a placeholder
    const asideNavItems = ["Profile", "Friends", "Groups", "Video", "Saved"];

    return (
      <>
        <Header title="FriendSpace" placeholder="Search" />
        <Nav />
        <main style={styles.main}>
          <div style={styles.asideContainer}>
            <Aside style={{ ...styles.aside, left: 0 }}>
              <ul role="navigation">
                {asideNavItems.map((item, index) => (
                  <li key={index} style={styles.li}>
                    {item}
                  </li>
                ))}
              </ul>
            </Aside>
          </div>
          <section style={styles.section}>
            <NewsFeed />
          </section>
          <div style={styles.asideContainer}>
            <Aside style={{ ...styles.aside, right: "8px" }}>
              <div>
                <h2>Aside</h2>
              </div>
            </Aside>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

const styles = {
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr 8px",
    gap: "1rem",
    padding: "1rem",
    height: "calc(100vh - 9rem - 3.5rem)",
    minHeight: "max-content",
    overflowY: "auto",
  },
  section: {
    maxWidth: "42.5rem",
    margin: "0 auto",
  },
  asideContainer: {
    width: "22rem",
  },
  aside: {
    position: "fixed",
    overflowY: "auto",
    width: "inherit",
    height: "calc(100vh - 9rem - 4.5rem)",
  },
  li: {
    margin: "1rem 0",
    color: "#fff",
    fontWeight: "bold",
  },
};
