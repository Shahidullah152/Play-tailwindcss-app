/* eslint-disable react/prop-types */
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SingIn({ DarkMode }) {
  return (
    <>
      {/* text div */}
      <div className="text-center pb-12 shadow-sm mt-28 ">
        <h1
          className={`text-4xl font-bold font-sans my-4 text-center ${
            DarkMode ? "text-white" : "text-black"
          }`}
        >
          SignIn Page
        </h1>
        <p className="text-gray-500 text-center">
          There are many variations of passages of Lorem Ipsum available.
        </p>
        <ul className="mt-5">
          <li>
            <NavLink
              to="/"
              className="text-lg font-sans font-medium text-gray-500 hover:text-blue-500"
            >
              Home
            </NavLink>{" "}
            <span className="text-lg font-sans font-medium text-gray-500">
              {" "}
              / Sign In
            </span>
          </li>
        </ul>
      </div>

      <div
        className={` h-[700px]   ${
          DarkMode ? "bg-[#111928]" : "bg-[#f4f7ff]"
        } flex items-center justify-center`}
      >
        <div
          className={`w-[100%] sm:w-[480px] dark:text-white pl-14 md:relative md:top-0 ${
            DarkMode ? "bg-[#1f2a37]" : "bg-white"
          }  rounded-lg py-12 md:py-12 md:h-[53  0px] shadow-xl`}
        >
          <div className="flex justify-center">
            <div className="bg-play1 w-40 bg-contain h-11 bg-no-repeat dark:bg-play2"></div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <input
                type="text"
                placeholder="Email"
                className="border focus:border-[#3758f9] py-2 px-3 rounded-md w-[90%] outline-none bg-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="border focus:border-[#3758f9] py-2 px-3 rounded-md w-[90%] outline-none bg-transparent"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Sign In"
                className="bg-[#3758f9] text-white py-2 px-3 rounded-md w-[90%] outline-none hover:bg-[#394db2] duration-200 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-start items-center gap-5 mt-6">
            <div className="border w-28"></div>
            <p className="text-gray-600 text-sm dark:text-gray-300">
              Connect With
            </p>
            <div className="border w-24"></div>
          </div>
          <div className="flex justify-start items-center gap-5 mt-6">
            <button className="py-3 px-11 rounded-md bg-[#4064ac] text-white">
              <FaFacebookF />{" "}
            </button>
            <button className="py-3 px-11 rounded-md bg-blue-500 text-white">
              <FaTwitter />{" "}
            </button>
            <button className="py-3 px-11 rounded-md bg-red-500 text-white">
              <FaGoogle />{" "}
            </button>
          </div>
          <div className="w-[80%] text-center text-sm mt-7 text-gray-900 cursor-pointer dark:text-white">
            Forget Password?
          </div>
          <div className="w-[80%] text-center text-sm mt-4 text-gray-600 dark:text-gray-300">
            Not a member yet?
            <span className="text-[#3758f9] hover:underline cursor-pointer">
              {" "}
              <NavLink to="/SignUp">Sign Up </NavLink>
            </span>
          </div>
        </div>
        <span className="absolute top-1 right-1">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="1.39737"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 1.39737 38.6026)"
              fill="#3056D3"
            />
            <circle
              cx="1.39737"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 1.39737 1.99122)"
              fill="#3056D3"
            />
            <circle
              cx="13.6943"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 13.6943 38.6026)"
              fill="#3056D3"
            />
            <circle
              cx="13.6943"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 13.6943 1.99122)"
              fill="#3056D3"
            />
            <circle
              cx="25.9911"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 25.9911 38.6026)"
              fill="#3056D3"
            />
            <circle
              cx="25.9911"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 25.9911 1.99122)"
              fill="#3056D3"
            />
            <circle
              cx="38.288"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 38.288 38.6026)"
              fill="#3056D3"
            />
            <circle
              cx="38.288"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 38.288 1.99122)"
              fill="#3056D3"
            />
            <circle
              cx="1.39737"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 1.39737 26.3057)"
              fill="#3056D3"
            />
            <circle
              cx="13.6943"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 13.6943 26.3057)"
              fill="#3056D3"
            />
            <circle
              cx="25.9911"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 25.9911 26.3057)"
              fill="#3056D3"
            />
            <circle
              cx="38.288"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 38.288 26.3057)"
              fill="#3056D3"
            />
            <circle
              cx="1.39737"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 1.39737 14.0086)"
              fill="#3056D3"
            />
            <circle
              cx="13.6943"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 13.6943 14.0086)"
              fill="#3056D3"
            />
            <circle
              cx="25.9911"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 25.9911 14.0086)"
              fill="#3056D3"
            />
            <circle
              cx="38.288"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 38.288 14.0086)"
              fill="#3056D3"
            />
          </svg>
        </span>
      </div>
    </>
  );
}

export default SingIn;
