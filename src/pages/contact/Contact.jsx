import { BiSolidPhoneIncoming } from "react-icons/bi";
import { BsEnvelopeAt } from "react-icons/bs";
import EmailDisplay from "./../../shared/Typography/EmailDisplay";
import PhoneDisplay from "./../../shared/Typography/PhoneDisplay";

export default function Contact() {
  return (
    <>
     <div className="flex justify-center  sm:pl-40 xl:w-full lg:w-full md:w-full sm:w-full">
        <div className="min-h-screen  py-6 flex flex-col  justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-newtIndigo to-newtPurple shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-white relative px-4 py-10 bg-footerBlue shadow-md shadow-[#ff00de] sm:rounded-3xl sm:p-20">
              <div className="text-center pb-6">
                <h1 className="text-3xl">Get in Touch!</h1>
                <p className="text-gray-300 text-2xl">Yes! you</p>
                <p className="mt-3 mb-12 text-lg text-[#3bb143]">
                  You got a cool project in mind? Let us collaborate and create a
                  powerful
                  <span> brand & website</span> for you
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#645394] text-white">
                    <BsEnvelopeAt />
                  </div>
                  <div className="ml-4">
                    <a
                      href="mailto:newtieblackie@gmail.com"
                      className="mt-2 text-base text-warning hover:underline"
                    >
                      <EmailDisplay />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#645394] text-white">
                    <BiSolidPhoneIncoming />
                  </div>
                  <div className="ml-4">
                    <a
                      href="tel:+254725927128"
                      className="mt-2 text-base text-warning hover:underline"
                    >
                      <PhoneDisplay />
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
}
