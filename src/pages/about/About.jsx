import {
  // FaCode,
  FaDatabase,
  FaLayerGroup,
  FaObjectUngroup,
} from "react-icons/fa";

export const About = () => {
  return (
    <>
    <div className="pt-20 w-full sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-11/12 mx-auto flex justify-center sm:pl-40">
      {/* <div className="flex justify-center mt-11 pt-16 sm:pl-40 xl:w-full lg:w-full md:w-full sm:w-full"> */}
        <div className="min-h-screen  py-6 flex flex-col  justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-newtIndigo to-newtPink shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-white relative  px-8 py-10 bg-masterBlack shadow-md shadow-skyBlue sm:rounded-3xl sm:p-20">
              <div className="py-3 flex items-center text-3xl font-bold capitalize">
                about me
                <span className="ml-3 w-24 h-[4px]  bg-gradient-to-r from-newtPink to-newtIndigo rounded-full"></span>
              </div>

              <p className="py-3 font-normal text-lg md:text-xl lg:text-sm tracking-wide space-y-10 ">
                I am a creative Full Stack Developer. I enjoy turning complex
                problems into simple, beautiful and intuitive designs.
              </p>
              <p className="space-y-10 font-normal text-lg md:text-xl lg:text-sm tracking-wide py-3">
                My aim is to bring across your message and identity in the most
                creative way, creating growth-driven
                <span className="text-[#ff00de]"> products </span> and
                <span className="text-[#ff00de]"> brands</span> for the digital
                universe
              </p>
              <div className="py-3 flex items-center  text-2xl font-semibold capitalize">
                what i do
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm leading-6 round">
                <div className="p-4 rounded-lg shadow-lg bg-[#fdbafd] text-[#4b0082] flex flex-1">
                  <div className=" text-3xl">
                    <FaLayerGroup />
                  </div>
                  <div className="ml-4 text-masterBlack tracking-wider">
                    <div className="text-sm font-extrabold capitalize">
                      uI/uX Designer
                    </div>
                    <p className="font-semibold ">
                      I craft experiences that are human-centered &
                      planet-minded for a sustainable tomorrow
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg shadow-lg bg-[#fff1b2] text-[#c49102] flex flex-1">
                  <div className=" text-3xl">
                    <FaObjectUngroup />
                  </div>
                  <div className="ml-4 text-masterBlack tracking-wider">
                    <div className="text-sm font-extrabold capitalize">
                      app development
                    </div>
                    <p className="font-semibold ">
                      Sleek and efficient apps is what your gadget needs
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg shadow-lg bg-[#fdd2d2] text-[#ff0800] flex flex-1">
                  <div className=" text-3xl">
                    <FaDatabase />
                  </div>
                  <div className="ml-4 text-masterBlack tracking-wider">
                    <div className="text-sm font-extrabold capitalize">
                      database management
                    </div>
                    <p className="font-semibold ">
                      Up-to-date data management at your disposal
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-lg shadow-lg bg-[#b8e0fd] text-[#0000ff] flex flex-1">
                  <div className=" text-3xl">
                    {/* <FaCode /> */}
                    <svg viewBox="0 0 640 512" height="5em" xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" className="h-7">
      <path
        d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
      ></path>
    </svg>
                  </div>
                  <div className="ml-4 text-masterBlack tracking-wider">
                    <div className="text-sm font-extrabold capitalize">
                      web development
                    </div>
                    <p className="font-semibold ">
                      I create beautiful and engaging digital experiences
                    </p>
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
