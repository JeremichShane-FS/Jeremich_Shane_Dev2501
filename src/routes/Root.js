import { useContext, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import { AppContext } from "../contexts";
import { OpenContextMenuProvider } from "../contexts/OpenContextMenuContext";
import { useClickOutside } from "../hooks";
import { AdSection, Footer, Header, NavSidebar } from "../layout";

const Root = () => {
  const { userProfile } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const navRef = useRef();

  const handleBurgerClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  useClickOutside(navRef, () => {
    if (open) {
      setOpen(false);
    }
  });

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <OpenContextMenuProvider>
      <Header
        title="FriendSpace"
        placeholder="Search"
        userProfile={userProfile}
        onBurgerClick={handleBurgerClick}
      />
      <main className="main">
        <Aside className="aside left"></Aside>
        <NavSidebar
          ref={navRef}
          userProfile={userProfile}
          open={open}
          closeSidebar={closeSidebar}
        />
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
