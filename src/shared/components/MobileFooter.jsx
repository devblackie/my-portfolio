import { NavLink } from "react-router-dom";
import MobileFooterLinksData from "../../data/navigation/MobileFooterLinksData";

export default function MobileFooter() {
    return (
      <>
        {/* Fixed footer container */}
        <div className="fixed bottom-0 left-0 bg-masterBlack text-skyBlue w-full py-2 px-3 mt-1 text-xs sm:hidden">
          {/* Flex container for navigation links */}
          <div className="flex justify-between items-center">
            {/* Mapping over mobile footer links */}
            {MobileFooterLinksData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Navigation link */}
                <NavLink to={item.path} className="flex flex-col items-center">
                  {item.icon || item.component}
                  <span>{item.label}</span>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }