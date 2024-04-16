import { FaBookmark, FaUserFriends } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { ImNewspaper } from "react-icons/im";
import { LuMessageSquare } from "react-icons/lu";
import { MdGroups2 } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { RiMemoriesFill } from "react-icons/ri";
import InteractionButton from "../components/buttons/InteractionButton";

export const navSidebar = [
  {
    label: "Friends",
    icon: FaUserFriends,
    color: "#84dcc6",
    aria: "Navigate to Friends",
    path: "/friends",
    component: InteractionButton,
  },
  {
    label: "Memories",
    icon: RiMemoriesFill,
    color: "#54ddf8",
    aria: "Navigate to Memories",
    path: "/memories",
    component: InteractionButton,
  },
  {
    label: "Saved",
    icon: FaBookmark,
    color: "#861388",
    aria: "Navigate to Saved",
    path: "/saved",
    component: InteractionButton,
  },
  {
    label: "Groups",
    icon: MdGroups2,
    color: "#3085F3",
    aria: "Navigate to Groups",
    path: "/groups",
    component: InteractionButton,
  },
  {
    label: "Video",
    icon: PiVideoFill,
    color: "#4b4e6d",
    aria: "Navigate to Video",
    path: "/video",
    component: InteractionButton,
  },
  {
    label: "News Feed",
    icon: ImNewspaper,
    color: "#d5cad6",
    aria: "Navigate to News Feed",
    path: "/newsfeed",
    component: InteractionButton,
  },
  {
    label: "Messages",
    icon: LuMessageSquare,
    color: "#51bbfe",
    aria: "Navigate to Messages",
    path: "/messages",
    component: InteractionButton,
  },
  {
    label: "Watch",
    icon: GrChannel,
    color: "#757761",
    aria: "Navigate to Watch",
    path: "/watch",
    component: InteractionButton,
  },
];
