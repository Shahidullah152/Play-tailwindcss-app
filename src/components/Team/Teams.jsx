/* eslint-disable react/prop-types */
import TeamIMG1 from "../../assets/team/team-01.png";
import TeamIMG2 from "../../assets/team/team-02.png";
import TeamIMG3 from "../../assets/team/team-03.png";
import TeamIMG4 from "../../assets/team/team-04.png";
import dotted from "../../assets/team/dotted-shape.svg";
import shape from "../../assets/team/shape-2.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function Teams({ DarkMode }) {
  return (
    <>
      <div
        id="Team"
        className={`mt-36 w-full py-20  px-14  ${
          DarkMode ? "bg-gray-800" : "bg-[#f9fafb]"
        } h-auto`}
      >
        {/* text div */}
        <div className="text-center pb-10">
          <h1 className="text-[#3758f9] font-sans font-bold text-center">
            Our Team Members
          </h1>
          <h1
            className={`text-4xl font-bold font-sans my-4 text-center ${
              DarkMode ? "text-white" : "text-black"
            }`}
          >
            Our Creative Team
          </h1>
          <p className="text-gray-500 text-center">
            There are many variations of passages of Lorem Ipsum <br />{" "}
            available but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-center flex-wrap gap-6 mt-5">
          <div
            className={`  group w-full md:w-[260px] rounded-md  h-auto  py-8   shadow-lg    ${
              DarkMode ? "bg-gray-900" : "bg-white"
            } h-auto`}
          >
            <div className="relative flex items-center justify-center">
              <img src={TeamIMG1} alt="" className="absolute top-2 z-10" />
              <div className="relative top-1 w-full hidden group-hover:block">
                <img src={dotted} alt="" className="absolute top-1 right-16" />
                <img src={shape} alt="" className="absolute top-20 left-16" />
              </div>
            </div>
            <div className="mt-32 flex flex-col items-center">
              <h1
                className={` text-lg font-sans mt-5 font-medium ${
                  DarkMode ? "text-white" : "text-black"
                } `}
              >
                Melissa Tatcher
              </h1>
              <p className="text-gray-500 text-sm font-sans font-medium ">
                Marketing Expert
              </p>
              <div className="mt-6 flex items-center justify-center gap-5 text-gray-500">
                <FaFacebookF className="hover:text-[#3758f9] cursor-pointer duration-200" />
                <FaTwitter className="hover:text-[#3758f9] cursor-pointer duration-200" />
                <FaInstagram className="hover:text-[#3758f9] cursor-pointer duration-200" />
              </div>
            </div>
          </div>
          <div
            className={`  group w-full md:w-[260px] rounded-md  h-auto  py-8   shadow-lg    ${
              DarkMode ? "bg-gray-900" : "bg-white"
            } h-auto`}
          >
            <div className="relative flex items-center justify-center">
              <img src={TeamIMG2} alt="" className="absolute top-2 z-10" />
              <div className="relative top-1 w-full hidden group-hover:block">
                <img src={dotted} alt="" className="absolute top-1 right-16" />
                <img src={shape} alt="" className="absolute top-20 left-16" />
              </div>
            </div>
            <div className="mt-32 flex flex-col items-center">
              <h1
                className={` text-lg font-sans mt-5 font-medium ${
                  DarkMode ? "text-white" : "text-black"
                } `}
              >
                Stuard Ferrel
              </h1>
              <p className="text-gray-500 text-sm font-sans font-medium ">
                Digital Marketer
              </p>
              <div className="mt-6 flex items-center justify-center gap-5 text-gray-500">
                <FaFacebookF className="hover:text-[#3758f9] cursor-pointer duration-200" />
                <FaTwitter className="hover:text-[#3758f9] cursor-pointer duration-200" />
                <FaInstagram className="hover:text-[#3758f9] cursor-pointer duration-200" />
              </div>
            </div>
          </div>
          <div
            className={`  group w-full md:w-[260px] rounded-md  h-auto  py-8   shadow-lg    ${
              DarkMode ? "bg-gray-900" : "bg-white"
            } h-auto`}
          >
            <div className="relative flex items-center justify-center">
              <img src={TeamIMG3} alt="" className="absolute top-2 z-10" />
              <div className="relative top-1 w-full hidden group-hover:block">
                <img src={dotted} alt="" className="absolute top-1 right-16" />
                <img src={shape} alt="" className="absolute top-20 left-16" />
              </div>
            </div>
            <div className="mt-32 flex flex-col items-center">
              <h1
                className={` text-lg font-sans mt-5 font-medium ${
                  DarkMode ? "text-white" : "text-black"
                } `}
              >
                Eva Hudson
              </h1>
              <p className="text-gray-500 text-sm font-sans font-medium ">
                Creative Designer
              </p>
              <div className="mt-6 flex items-center justify-center gap-5 text-gray-500">
                <FaFacebookF className="hover:text-[#3758f9] cursor-pointer duration-200" />
                <FaTwitter className="hover:text-[#3758f9] cursor-pointer duration-200" />
                <FaInstagram className="hover:text-[#3758f9] cursor-pointer duration-200" />
              </div>
            </div>
          </div>
          <div
            className={`  group w-full md:w-[260px] rounded-md  h-auto  py-8   shadow-lg    ${
              DarkMode ? "bg-gray-900" : "bg-white"
            } h-auto`}
          >
            <div className="relative flex items-center justify-center">
              <img src={TeamIMG4} alt="" className="absolute top-2 z-10" />
              <div className="relative top-1 w-full hidden group-hover:block">
                <img src={dotted} alt="" className="absolute top-1 right-16" />
                <img src={shape} alt="" className="absolute top-20 left-16" />
              </div>
            </div>
            <div className="mt-32 flex flex-col items-center">
              <h1
                className={` text-lg font-sans mt-5 font-medium ${
                  DarkMode ? "text-white" : "text-black"
                } `}
              >
                Jackie Sanders
              </h1>
              <p className="text-gray-500 text-sm font-sans font-medium ">
                SEO Expert
              </p>
              <div className="mt-6 flex items-center justify-center gap-5 text-gray-500">
                <FaFacebookF className="hover:text-[#3758f9] cursor-pointer duration-200" />
                <FaTwitter className="hover:text-[#3758f9] cursor-pointer duration-200" />
                <FaInstagram className="hover:text-[#3758f9] cursor-pointer duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teams;
