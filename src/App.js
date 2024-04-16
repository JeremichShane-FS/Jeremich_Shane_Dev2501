import { Component } from "react";
import styled from "styled-components";
import Aside from "./components/Aside";
// import AdCard from "./components/cards/AdCard";
import AdSection from "./layout/AdSection";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import NavSidebar from "./layout/NavSidebar";
import NewsFeed from "./pages/NewsFeed";

// TODO: Finish adding media queries for the aside containers
// TODO: Add useMemo hooks to components that need it
// TODO: Add deBounce to the search input

export default class App extends Component {
  render() {
    return (
      <>
        <Header title="FriendSpace" placeholder="Search" />
        <main style={styles.main}>
          <StyledAsideContainerLeft className="aside-container" style={styles.asideContainer}>
            <Aside style={{ ...styles.aside, ...styles.aside.left }}>
              <NavSidebar />
            </Aside>
          </StyledAsideContainerLeft>
          <section style={styles.section}>
            <NewsFeed />
          </section>
          <StyledAsideContainerRight style={styles.asideContainer}>
            <Aside style={{ ...styles.aside, ...styles.aside.right }}>
              <AdSection />
            </Aside>
          </StyledAsideContainerRight>
        </main>
        <Footer />
      </>
    );
  }
}

const styles = {
  main: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1fr 3fr auto",
    gap: "1rem",
    minHeight: "max-content",
    overflowY: "auto",
    padding: "6.25rem 0 3.75rem",
  },
  section: {
    maxWidth: "42.5rem",
    margin: "0 auto",
  },
  aside: {
    position: "fixed",
    top: 100,
    width: "inherit",
    height: "calc(100vh - 9rem - 1.5rem)",
    overflowY: "auto",
    overflowX: "hidden",
    margin: "0 auto",
    right: {
      right: 0,
    },
    left: {
      left: 0,
    },
  },
};

const StyledAsideContainerLeft = styled.div`
  width: 22rem;
  @media (max-width: 1380px) {
    width: 15rem;
  }
  @media (max-width: 1380px) {
    width: 15rem;
  }
`;

const StyledAsideContainerRight = styled.div`
  width: 22rem;
  @media (max-width: 1380px) {
    width: 17rem;
  }
`;
