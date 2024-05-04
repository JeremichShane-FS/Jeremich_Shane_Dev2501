import { FaBookmark, FaUserFriends } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";
import { ImNewspaper } from "react-icons/im";
import { LuMessageSquare } from "react-icons/lu";
import { MdGroups2 } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { RiMemoriesFill } from "react-icons/ri";
import InteractionButton from "../components/buttons/InteractionButton";
import { FRIENDS, GROUPS, MEMORIES, MESSAGES, NEWSFEED, SAVED, VIDEO, WATCH } from "../constants";

export const navSidebar = [
  {
    label: "News Feed",
    icon: ImNewspaper,
    color: "#d5cad6",
    aria: "Navigate to News Feed",
    path: NEWSFEED,
    component: InteractionButton,
  },
  {
    label: "Friends",
    icon: FaUserFriends,
    color: "#84dcc6",
    aria: "Navigate to Friends",
    path: FRIENDS,
    component: InteractionButton,
  },
  {
    label: "Memories",
    icon: RiMemoriesFill,
    color: "#54ddf8",
    aria: "Navigate to Memories",
    path: MEMORIES,
    component: InteractionButton,
  },
  {
    label: "Saved",
    icon: FaBookmark,
    color: "#861388",
    aria: "Navigate to Saved",
    path: SAVED,
    component: InteractionButton,
  },
  {
    label: "Groups",
    icon: MdGroups2,
    color: "#3085F3",
    aria: "Navigate to Groups",
    path: GROUPS,
    component: InteractionButton,
  },
  {
    label: "Video",
    icon: PiVideoFill,
    color: "#aa0000",
    aria: "Navigate to Video",
    path: VIDEO,
    component: InteractionButton,
  },
  {
    label: "Messages",
    icon: LuMessageSquare,
    color: "#51bbfe",
    aria: "Navigate to Messages",
    path: MESSAGES,
    component: InteractionButton,
  },
  {
    label: "Watch",
    icon: GrChannel,
    color: "#757761",
    aria: "Navigate to Watch",
    path: WATCH,
    component: InteractionButton,
  },
];
