import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import { AppContext } from "../contexts";
import { OpenContextMenuProvider } from "../contexts/OpenContextMenuContext";
import { AdSection, Footer, Header, NavSidebar } from "../layout";

const Root = () => {
  const { userProfile } = useContext(AppContext);
  return (
    <OpenContextMenuProvider>
      <Header title="FriendSpace" placeholder="Search" userProfile={userProfile} />
      <main className="main">
        <Aside className="aside left">
          <NavSidebar userProfile={userProfile} />
        </Aside>
        <section className="pages">
          <Outlet />
        </section>
        <Aside className="aside right">
          <AdSection />
        </Aside>
      </main>
      <Footer />
    </OpenContextMenuProvider>
  );
};

export default Root;
