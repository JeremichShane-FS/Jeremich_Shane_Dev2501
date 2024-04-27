import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import { userProfile } from "../constants/userProfile";
import AdSection from "../layout/AdSection";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import NavSidebar from "../layout/NavSidebar";

const Root = () => (
  <>
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
  </>
);

export default Root;
