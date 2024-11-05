import { RiHome7Line } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { GrContactInfo } from "react-icons/gr";
import { CgWorkAlt } from "react-icons/cg";

const MobileFooterLinksData = [
  { path: "/", icon: <RiHome7Line className="w-5 h-5" />, label: "Home" },
  {
    path: "/portfolio",
    icon: <CgWorkAlt className="h-5 w-5" />,
    label: "Portfolio",
  },
  {
    path: "/core",
    icon: <SiAboutdotme className="h-5 w-5" />,
    label: "About",
  },
  {
    path: "/contact",
    icon: <GrContactInfo className="h-5 w-5" />,
    label: "Contact",
  },
];

export default MobileFooterLinksData;
