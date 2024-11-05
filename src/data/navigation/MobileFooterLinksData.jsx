import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiHome7Line, RiLiveLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

// import Blobbutton from "../../shared/components/Buttons/Blobbutton";

const MobileFooterLinksData = [
  { path: "/", icon: <RiHome7Line className="w-5 h-5" />, label: "Home" },
  { path: "", icon: <BiSearchAlt className="h-5 w-5" />, label: "Portfolio" },
  // { path: "", component: <Blobbutton />, label: "" },
  {
    path: "/core",
    icon: <RiLiveLine className="h-5 w-5" />,
    label: "Services",
  },
  {
    path: "/contact",
    icon: <MdOutlineAccountBalanceWallet className="h-5 w-5" />,
    label: "Contact",
  },
];

export default MobileFooterLinksData;
