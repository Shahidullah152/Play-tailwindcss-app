/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaBars, FaMoon, FaPlug, FaPlus, FaSun } from "react-icons/fa";
import LogoLight from "../../assets/logo/logo-white.svg";
import LogoDark from "../../assets/logo/logo.svg";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function NavbarForPages({ DarkMode, handleDarkMode }) {
  // pages functionality
  const [Pages, setPages] = useState(false);
  function PagesDropdownShow() {
    setPages(true);
  }
  function PagesDropdownHide() {
    setPages(false);
  }
  //   Menus Bars Functionality
  const [MenuBar, setMenuBar] = useState(false);

  // ScrollY Functionality
  const [isScrolled, setIsScrolled] = useState(false);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full h-[70px] flex items-center px-14 py-1 backdrop-blur-sm transition-all duration-300  z-50
      ${DarkMode ? "bg-gray-900/80 shadow-sm" : "bg-white/80 shadow-sm"}
      ${DarkMode ? "text-white" : "text-black"}`}
      >
        <nav className="flex items-center justify-between w-full relative">
          {/* logos */}
          <div>
            <img
              src={DarkMode ? LogoLight : LogoDark}
              className="w-32 lg:w-40"
              alt="Logo"
            />
          </div>
          {/* Menus */}
          <div className="hidden lg:block">
            <ul
              className={`flex items-center justify-center gap-8 text-sm font-sans font-medium ${
                DarkMode ? "text-white" : "text-black"
              }`}
            >
              <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                About
              </li>
              <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                Team
              </li>
              <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                Contact
              </li>
              <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                Blog
              </li>
              <li
                className="hover:text-blue-600 relative  flex items-center transition-all duration-150 ease-in "
                onMouseEnter={PagesDropdownShow}
                onMouseLeave={PagesDropdownHide}
              >
                <a href="">Pages</a>
                <FaAngleDown className="ml-1" />
                {/* Pages Dropdown */}
                <div className="relative mt-16 ">
                  {Pages && (
                    <ul
                      className={`absolute   -right-16 shadow-lg  ${
                        DarkMode ? "bg-gray-800" : "bg-gray-100"
                      } px-6 py-2 rounded-[2px]
                     text-sm font-semibold text-gray-500
                    w-56`}
                    >
                      <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                        <NavLink to="/AboutPage">About Page</NavLink>
                      </li>
                      <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                        <NavLink to="/PricingPage">Pricing Page</NavLink>
                      </li>
                      <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                        <NavLink to="/ContactPage">Contact Page</NavLink>
                      </li>
                      <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                        <NavLink to="/BlogPage">Blog Grid Page</NavLink>
                      </li>
                      <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                        <NavLink to="/BlogDetails">Blog Details page</NavLink>
                      </li>
                      <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                        <NavLink to="/SignIn">SignIn Page</NavLink>
                      </li>
                      <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                        <NavLink to="/SignUp">Sing Up Page</NavLink>
                      </li>

                      <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                        <NavLink to="/404"> 404 Page</NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
          {/* Navbar btns */}
          <div className="flex items-center">
            <div className="hidden sm:block">
              <div className="flex items-center justify-center">
                <span
                  className={`cursor-pointer text-xl ${
                    DarkMode ? "text-white" : "text-black"
                  }`}
                  onClick={handleDarkMode}
                >
                  {DarkMode ? (
                    <svg
                      className="fill-current"
                      width="22"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2172_3070)">
                        <path d="M12 6.89999C9.18752 6.89999 6.90002 9.18749 6.90002 12C6.90002 14.8125 9.18752 17.1 12 17.1C14.8125 17.1 17.1 14.8125 17.1 12C17.1 9.18749 14.8125 6.89999 12 6.89999ZM12 15.4125C10.125 15.4125 8.58752 13.875 8.58752 12C8.58752 10.125 10.125 8.58749 12 8.58749C13.875 8.58749 15.4125 10.125 15.4125 12C15.4125 13.875 13.875 15.4125 12 15.4125Z"></path>
                        <path d="M12 4.2375C12.45 4.2375 12.8625 3.8625 12.8625 3.375V1.5C12.8625 1.05 12.4875 0.637497 12 0.637497C11.55 0.637497 11.1375 1.0125 11.1375 1.5V3.4125C11.175 3.8625 11.55 4.2375 12 4.2375Z"></path>
                        <path d="M12 19.7625C11.55 19.7625 11.1375 20.1375 11.1375 20.625V22.5C11.1375 22.95 11.5125 23.3625 12 23.3625C12.45 23.3625 12.8625 22.9875 12.8625 22.5V20.5875C12.8625 20.1375 12.45 19.7625 12 19.7625Z"></path>
                        <path d="M18.1125 6.74999C18.3375 6.74999 18.5625 6.67499 18.7125 6.48749L19.9125 5.28749C20.25 4.94999 20.25 4.42499 19.9125 4.08749C19.575 3.74999 19.05 3.74999 18.7125 4.08749L17.5125 5.28749C17.175 5.62499 17.175 6.14999 17.5125 6.48749C17.6625 6.67499 17.8875 6.74999 18.1125 6.74999Z"></path>
                        <path d="M5.32501 17.5125L4.12501 18.675C3.78751 19.0125 3.78751 19.5375 4.12501 19.875C4.27501 20.025 4.50001 20.1375 4.72501 20.1375C4.95001 20.1375 5.17501 20.0625 5.32501 19.875L6.52501 18.675C6.86251 18.3375 6.86251 17.8125 6.52501 17.475C6.18751 17.175 5.62501 17.175 5.32501 17.5125Z"></path>
                        <path d="M22.5 11.175H20.5875C20.1375 11.175 19.725 11.55 19.725 12.0375C19.725 12.4875 20.1 12.9 20.5875 12.9H22.5C22.95 12.9 23.3625 12.525 23.3625 12.0375C23.3625 11.55 22.95 11.175 22.5 11.175Z"></path>
                        <path d="M4.23751 12C4.23751 11.55 3.86251 11.1375 3.37501 11.1375H1.50001C1.05001 11.1375 0.637512 11.5125 0.637512 12C0.637512 12.45 1.01251 12.8625 1.50001 12.8625H3.41251C3.86251 12.8625 4.23751 12.45 4.23751 12Z"></path>
                        <path d="M18.675 17.5125C18.3375 17.175 17.8125 17.175 17.475 17.5125C17.1375 17.85 17.1375 18.375 17.475 18.7125L18.675 19.9125C18.825 20.0625 19.05 20.175 19.275 20.175C19.5 20.175 19.725 20.1 19.875 19.9125C20.2125 19.575 20.2125 19.05 19.875 18.7125L18.675 17.5125Z"></path>
                        <path d="M5.32501 4.125C4.98751 3.7875 4.46251 3.7875 4.12501 4.125C3.78751 4.4625 3.78751 4.9875 4.12501 5.325L5.32501 6.525C5.47501 6.675 5.70001 6.7875 5.92501 6.7875C6.15001 6.7875 6.37501 6.7125 6.52501 6.525C6.86251 6.1875 6.86251 5.6625 6.52501 5.325L5.32501 4.125Z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2172_3070">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      className="fill-current"
                      width="22"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.3125 1.50001C12.675 1.31251 12.0375 1.16251 11.3625 1.05001C10.875 0.975006 10.35 1.23751 10.1625 1.68751C9.93751 2.13751 10.05 2.70001 10.425 3.00001C13.0875 5.47501 14.0625 9.11251 12.975 12.525C11.775 16.3125 8.25001 18.975 4.16251 19.0875C3.63751 19.0875 3.22501 19.425 3.07501 19.9125C2.92501 20.4 3.15001 20.925 3.56251 21.1875C4.50001 21.75 5.43751 22.2 6.37501 22.5C7.46251 22.8375 8.58751 22.9875 9.71251 22.9875C11.625 22.9875 13.5 22.5 15.1875 21.5625C17.85 20.1 19.725 17.7375 20.55 14.8875C22.1625 9.26251 18.975 3.37501 13.3125 1.50001ZM18.9375 14.4C18.2625 16.8375 16.6125 18.825 14.4 20.0625C12.075 21.3375 9.41251 21.6 6.90001 20.85C6.63751 20.775 6.33751 20.6625 6.07501 20.55C10.05 19.7625 13.35 16.9125 14.5875 13.0125C15.675 9.56251 15 5.92501 12.7875 3.07501C17.5875 4.68751 20.2875 9.67501 18.9375 14.4Z"></path>
                    </svg>
                  )}
                </span>
                <span
                  className={`px-4 py-2 hover:text-blue-300 cursor-pointer font-medium ${
                    DarkMode ? "text-white" : "text-black"
                  }`}
                >
                  <NavLink to="/SignIn">Sing In</NavLink>
                </span>
                <span
                  className={`bg-[#3758f9] text-white hover:bg-blue-800 px-5 py-[6px] font-semibold   backdrop-blur-lg font-sans cursor-pointer  duration-200   rounded-md`}
                >
                  <NavLink to="/SignUp">Sing Up</NavLink>
                </span>
              </div>
            </div>
            <span
              className={`cursor-pointer text-xl  block sm:hidden me-5 ${
                DarkMode ? "text-white" : "text-black"
              }`}
              onClick={handleDarkMode}
            >
              {DarkMode ? (
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2172_3070)">
                    <path d="M12 6.89999C9.18752 6.89999 6.90002 9.18749 6.90002 12C6.90002 14.8125 9.18752 17.1 12 17.1C14.8125 17.1 17.1 14.8125 17.1 12C17.1 9.18749 14.8125 6.89999 12 6.89999ZM12 15.4125C10.125 15.4125 8.58752 13.875 8.58752 12C8.58752 10.125 10.125 8.58749 12 8.58749C13.875 8.58749 15.4125 10.125 15.4125 12C15.4125 13.875 13.875 15.4125 12 15.4125Z"></path>
                    <path d="M12 4.2375C12.45 4.2375 12.8625 3.8625 12.8625 3.375V1.5C12.8625 1.05 12.4875 0.637497 12 0.637497C11.55 0.637497 11.1375 1.0125 11.1375 1.5V3.4125C11.175 3.8625 11.55 4.2375 12 4.2375Z"></path>
                    <path d="M12 19.7625C11.55 19.7625 11.1375 20.1375 11.1375 20.625V22.5C11.1375 22.95 11.5125 23.3625 12 23.3625C12.45 23.3625 12.8625 22.9875 12.8625 22.5V20.5875C12.8625 20.1375 12.45 19.7625 12 19.7625Z"></path>
                    <path d="M18.1125 6.74999C18.3375 6.74999 18.5625 6.67499 18.7125 6.48749L19.9125 5.28749C20.25 4.94999 20.25 4.42499 19.9125 4.08749C19.575 3.74999 19.05 3.74999 18.7125 4.08749L17.5125 5.28749C17.175 5.62499 17.175 6.14999 17.5125 6.48749C17.6625 6.67499 17.8875 6.74999 18.1125 6.74999Z"></path>
                    <path d="M5.32501 17.5125L4.12501 18.675C3.78751 19.0125 3.78751 19.5375 4.12501 19.875C4.27501 20.025 4.50001 20.1375 4.72501 20.1375C4.95001 20.1375 5.17501 20.0625 5.32501 19.875L6.52501 18.675C6.86251 18.3375 6.86251 17.8125 6.52501 17.475C6.18751 17.175 5.62501 17.175 5.32501 17.5125Z"></path>
                    <path d="M22.5 11.175H20.5875C20.1375 11.175 19.725 11.55 19.725 12.0375C19.725 12.4875 20.1 12.9 20.5875 12.9H22.5C22.95 12.9 23.3625 12.525 23.3625 12.0375C23.3625 11.55 22.95 11.175 22.5 11.175Z"></path>
                    <path d="M4.23751 12C4.23751 11.55 3.86251 11.1375 3.37501 11.1375H1.50001C1.05001 11.1375 0.637512 11.5125 0.637512 12C0.637512 12.45 1.01251 12.8625 1.50001 12.8625H3.41251C3.86251 12.8625 4.23751 12.45 4.23751 12Z"></path>
                    <path d="M18.675 17.5125C18.3375 17.175 17.8125 17.175 17.475 17.5125C17.1375 17.85 17.1375 18.375 17.475 18.7125L18.675 19.9125C18.825 20.0625 19.05 20.175 19.275 20.175C19.5 20.175 19.725 20.1 19.875 19.9125C20.2125 19.575 20.2125 19.05 19.875 18.7125L18.675 17.5125Z"></path>
                    <path d="M5.32501 4.125C4.98751 3.7875 4.46251 3.7875 4.12501 4.125C3.78751 4.4625 3.78751 4.9875 4.12501 5.325L5.32501 6.525C5.47501 6.675 5.70001 6.7875 5.92501 6.7875C6.15001 6.7875 6.37501 6.7125 6.52501 6.525C6.86251 6.1875 6.86251 5.6625 6.52501 5.325L5.32501 4.125Z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_2172_3070">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.3125 1.50001C12.675 1.31251 12.0375 1.16251 11.3625 1.05001C10.875 0.975006 10.35 1.23751 10.1625 1.68751C9.93751 2.13751 10.05 2.70001 10.425 3.00001C13.0875 5.47501 14.0625 9.11251 12.975 12.525C11.775 16.3125 8.25001 18.975 4.16251 19.0875C3.63751 19.0875 3.22501 19.425 3.07501 19.9125C2.92501 20.4 3.15001 20.925 3.56251 21.1875C4.50001 21.75 5.43751 22.2 6.37501 22.5C7.46251 22.8375 8.58751 22.9875 9.71251 22.9875C11.625 22.9875 13.5 22.5 15.1875 21.5625C17.85 20.1 19.725 17.7375 20.55 14.8875C22.1625 9.26251 18.975 3.37501 13.3125 1.50001ZM18.9375 14.4C18.2625 16.8375 16.6125 18.825 14.4 20.0625C12.075 21.3375 9.41251 21.6 6.90001 20.85C6.63751 20.775 6.33751 20.6625 6.07501 20.55C10.05 19.7625 13.35 16.9125 14.5875 13.0125C15.675 9.56251 15 5.92501 12.7875 3.07501C17.5875 4.68751 20.2875 9.67501 18.9375 14.4Z"></path>
                </svg>
              )}
            </span>
            {/* hide menus */}
            <div className="lg:hidden ms-2 ">
              <span
                className={`text-3xl cursor-pointer ${
                  DarkMode ? "text-white" : "text-black"
                }`}
                onClick={() => setMenuBar(!MenuBar)}
              >
                {MenuBar ? <FaPlus /> : <FaBars />}
              </span>

              {/* Menu Bar Div  */}
              {MenuBar && (
                <div
                  className={`w-[100%] sm:w-[30%] h-auto  ${
                    DarkMode ? "bg-gray-800" : "bg-white"
                  } absolute top-16 right-0 rounded-2xl text-gray-500 shadow-lg`}
                >
                  <ul
                    className={`flex items-center justify-center flex-col gap-3 py-2 text-sm font-sans font-medium text-gray-500`}
                  >
                    <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                      <a href="#About">About</a>
                    </li>
                    <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                      <a href="#Pricing">Pricing</a>
                    </li>
                    <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                      <a href="#Team">Team</a>
                    </li>
                    <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                      <a href="#Contact">Contact</a>
                    </li>
                    <li className="hover:text-blue-600 transition-all duration-150 ease-in cursor-pointer">
                      <a href="#Blog"> Blog</a>
                    </li>
                    <li
                      className="hover:text-blue-600 cursor-pointer w-full  flex items-center justify-center flex-col  transition-all duration-500 ease-in "
                      onMouseEnter={PagesDropdownShow}
                      onMouseLeave={PagesDropdownHide}
                    >
                      <span className="flex items-center ">
                        Pages
                        <FaAngleDown className="ml-1" />
                      </span>
                      {/* Pages Dropdown */}
                      <div className="">
                        {Pages && (
                          <ul
                            className={`   ${
                              DarkMode ? "bg-gray-800" : "bg-white"
                            }  rounded-[2px]
                     text-sm font-semibold text-gray-500
                    w-full`}
                          >
                            <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                              <NavLink to="/AboutPage">About Page</NavLink>
                            </li>
                            <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                              <NavLink to="/PricingPage">Pricing Page</NavLink>
                            </li>
                            <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                              <NavLink to="/ContactPage">Contact Page</NavLink>
                            </li>
                            <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                              <NavLink to="/BlogPage">Blog Grid Page</NavLink>
                            </li>
                            <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                              <NavLink to="/BlogDetails">
                                Blog Details page
                              </NavLink>
                            </li>
                            <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                              <NavLink to="/SignIn">SignIn Page</NavLink>
                            </li>
                            <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                              <NavLink to="/SignUp">Sing Up Page</NavLink>
                            </li>

                            <li className="hover:text-blue-600 my-4 transition-all duration-150 ease-in cursor-pointer">
                              <NavLink to="/404"> 404 Page</NavLink>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavbarForPages;
