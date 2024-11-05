import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";
import homephoto from "../../assets/images/Newt.png";
import AppName from "./../../shared/Typography/AppName";
import "../../styles/profile.scss";

export const Homepage = () => {
  return (
    <>
      <div className="flex justify-center  sm:pl-40 xl:w-full lg:w-full md:w-full sm:w-full">
        <div className="min-h-screen  py-6 flex flex-col  justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="text-white relative rounded-md px-4 p-8 mx-5 bg-dark-2 shadow-md shadow-hoverSkyBlue  sm:mb-7 sm:  w-full sm:w-auto">
              <div className="flex flex-col relative justify-center items-center ">
                <div className="profile w-36 h-36 -mt-24 bg-masterBlack border-2 border-skyBlue border-e-8 transition-all duration-500 overflow-hidden relative cursor-pointer flex items-center justify-center">
                  <img src={homephoto} />
                </div>
                <div className="px-6 py-4 ">
                  <div className="flex flex-col items-center uppercase font-semibold pb-4 ">
                    <span className="bg-gradient-to-r from-newtPink via-newtPurple to-samBlue bg-[length:100%_4px] bg-no-repeat bg-bottom pb-2">
                      <AppName />
                    </span>
                  </div>
                  <div className="flex gap-10 text-sm">
                    <div className="flex flex-col items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-masterBlack shadow-sm shadow-iconBlue">
                          <a
                            href="mailto:newtieblackie@gmail.com"
                            className="font-bold text-lg text-iconBlue relative z-0 transition-all duration-300 hover:rotate-45 hover:scale-125"
                          >
                            <RiLinkedinBoxFill />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-masterBlack shadow-sm shadow-newtPink">
                        <a
                          href="mailto:newtieblackie@gmail.com"
                          className="font-bold text-lg text-newtPink  relative z-0 transition-all duration-300 hover:rotate-45 hover:scale-125  "
                        >
                          <RiInstagramFill />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-masterBlack shadow-sm shadow-certainWhite ">
                        <a
                          href="mailto:newtieblackie@gmail.com"
                          className="font-bold text-lg relative z-0 transition-all duration-300 hover:rotate-45 hover:scale-125"
                        >
                          <RiTwitterXFill />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-10">
                    <a
                      href="/public/resume/Mboi Newton.pdf"
                      download="Newton Mboi.pdf"
                      className="bg-gradient-to-r from-newtPink via-newtPurple to-samBlue hover:bg-sky-600 text-certainWhite px-3 py-1 rounded-full shadow-md transition-colors duration-200 flex items-center justify-center font-semibold"
                    >
                      <div className="mr-3">
                        <FaCloudDownloadAlt />
                      </div>
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
