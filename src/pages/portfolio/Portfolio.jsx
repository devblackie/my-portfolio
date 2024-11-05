import { useState } from "react";
import { FcGallery, FcPhotoReel, FcVlc } from "react-icons/fc";
import Poster from "./../../data/poster/Poster";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Portfolio() {
  const [selectedSection, setSelectedSection] = useState("media");
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderContent = () => {
    switch (selectedSection) {
      case "media":
        return (
        <div className="relative carousel w-full">
          {Poster.map((poster, index) => (
            <div
              className={`${
                index === currentSlide ? "block" : "hidden"
              } h-80 bg-newtIndigo transition-opacity duration-500`}
              key={index}
            >
              <img src={poster.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              
            </div>
          ))}

          {/* Left Arrow */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 left-0 rounded-full  bg-newtIndigo bg-opacity-70 hover:bg-opacity-90 text-certainWhite p-1 cursor-pointer transition-colors duration-200"
             
            onClick={() =>
              setCurrentSlide(
                currentSlide === 0 ? Poster.length - 1 : currentSlide - 1
              )
            }
          >
            <BsChevronCompactLeft size={30} />
          </div>

          {/* Right Arrow */}
          <div
            className="absolute top-1/2 transform -translate-y-1/2 right-0  rounded-full p-1 bg-newtIndigo bg-opacity-70 hover:bg-opacity-90 text-certainWhite cursor-pointer transition-colors duration-200" 
            onClick={() =>
              setCurrentSlide(
                currentSlide === Poster.length - 1 ? 0 : currentSlide + 1
              )
            }
          >
            <BsChevronCompactRight size={30} />
          </div>
        </div>
      );
      case "gallery":
        return (
          <div className="relative carousel w-full">
            {Poster.map((poster, index) => (
              <div
                className={`${
                  index === currentSlide ? "block" : "hidden"
                } h-80 bg-newtIndigo transition-opacity duration-500`}
                key={index}
              >
                <img src={poster.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                
              </div>
            ))}

            {/* Left Arrow */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 left-0 rounded-full  bg-newtIndigo bg-opacity-70 hover:bg-opacity-90 text-certainWhite p-1 cursor-pointer transition-colors duration-200"
               
              onClick={() =>
                setCurrentSlide(
                  currentSlide === 0 ? Poster.length - 1 : currentSlide - 1
                )
              }
            >
              <BsChevronCompactLeft size={30} />
            </div>

            {/* Right Arrow */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 right-0  rounded-full p-1 bg-newtIndigo bg-opacity-70 hover:bg-opacity-90 text-certainWhite cursor-pointer transition-colors duration-200" 
              onClick={() =>
                setCurrentSlide(
                  currentSlide === Poster.length - 1 ? 0 : currentSlide + 1
                )
              }
            >
              <BsChevronCompactRight size={30} />
            </div>
          </div>
        );
      case "vlc":
        return <div></div>;
      default:
        return <div>All</div>;
    }
  };

  return (
    <>
      <div className="pt-20 w-full sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-11/12 mx-auto flex justify-center sm:pl-40">
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-newtIndigo to-newtPink shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-white relative px-8 py-10 bg-masterBlack shadow-md shadow-skyBlue sm:rounded-3xl sm:p-20">
              <div className="py-3 flex items-center text-3xl font-bold capitalize">
                Portfolio
                <span className="ml-3 w-24 h-[4px] bg-gradient-to-r from-newtPink to-newtIndigo rounded-full"></span>
              </div>
              <div className="relative flex h-8 items-center justify-end">
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button onClick={() => setSelectedSection("media")} className="px-2 text-3xl">
                    <FcPhotoReel />
                  </button>
                  <button onClick={() => setSelectedSection("vlc")} className="px-2 text-3xl">
                    <FcVlc />
                  </button>
                  <button onClick={() => setSelectedSection("gallery")} className="px-2 text-3xl">
                    <FcGallery />
                  </button>
                </div>
              </div>
              <div className="mt-6">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
