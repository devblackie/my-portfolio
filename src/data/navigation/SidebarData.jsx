import { FcBriefcase, FcContacts,  FcHome,  FcManager} from "react-icons/fc";

const SidebarData = [
  { path: "/", display: "Home", icon: <FcHome /> },
  { path: "/portfolio", display: "Portfolio", icon: <FcBriefcase /> },
  { path: "/core", display: "Services", icon: <FcManager /> },
  {
    path: "/contact",
    display: "Contact",
    icon: <FcContacts />,
  },
];

export default SidebarData;
