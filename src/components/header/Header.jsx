import AppName from "../../shared/Typography/AppName";
import Logo from "../../assets/images/logo.png";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <>
      <nav className="fixed top-0 z-20 w-full  bg-[#000000]  dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="relative flex h-8 items-center justify-between">
            <div className="flex flex-1 items-center  sm:items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center sm:mx-4">
                <img
                  src={Logo}
                  alt=""
                  className="hidden sm:flex w-6 h-6 hover:rotate-45 transition transform ease-in-out duration-500 "
                />
                <h2 className="m-1 sm:mx-6 sm:my-auto font-bold  text-transparent bg-clip-text bg-gradient-to-l from-certainWhite via-samBlue to-newtPink ">
                  <AppName />
                </h2>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Freelancer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
