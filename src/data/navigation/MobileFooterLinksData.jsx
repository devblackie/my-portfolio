import { RiHome7Line } from "react-icons/ri";
import { GrContactInfo } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { HiBriefcase } from "react-icons/hi";

const MobileFooterLinksData = [
  { path: "/", icon: <RiHome7Line className="w-5 h-5" />, label: "Home" },
  {
    path: "/portfolio",
    icon: <HiBriefcase className="h-5 w-5" />,
    label: "Portfolio",
  },
  {
    path: "/core",
    icon: <FcAbout className="h-5 w-5" />,
    label: "About",
  },
  {
    path: "/contact",
    icon: <GrContactInfo className="h-5 w-5" />,
    label: "Contact",
  },
];

export default MobileFooterLinksData;
