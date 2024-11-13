/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Blog1 from "../../assets/blog/blog-01.jpg";
import Blog2 from "../../assets/blog/blog-02.jpg";
import Blog3 from "../../assets/blog/blog-03.jpg";
function BlogPage({ DarkMode }) {
  return (
    <>
      <div className="mt-32 pb-10 shadow-sm">
        {/* text div */}
        <div className="text-center pb-2">
          <h1
            className={`text-4xl font-bold font-sans my-4 text-center ${
              DarkMode ? "text-white" : "text-black"
            }`}
          >
            Blog Grid
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
                / Blog Grid
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={` my-20 px-14 `}>
        {/* text div */}
        <div className="text-center pb-10">
          <h1 className="text-[#3758f9] font-sans font-bold text-center">
            Our Blogs
          </h1>
          <h1
            className={`text-4xl font-bold font-sans my-4 text-center ${
              DarkMode ? "text-white" : "text-black"
            }`}
          >
            Our Recent News
          </h1>
          <p className="text-gray-500 text-center">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-center gap-6 mt-5 flex-wrap md:flex-nowrap">
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog1}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[16px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                Dec 22, 2023 Meet AutoManage, the best AI <br /> management
                tools
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog2}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[20px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                How to earn more money as a <br />
                wellness coach
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog3}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[20px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                The no-fuss guide to upselling and <br /> cross selling
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-5 flex-wrap md:flex-nowrap">
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog1}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[16px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                Dec 22, 2023 Meet AutoManage, the best AI <br /> management
                tools
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog2}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[20px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                How to earn more money as a <br />
                wellness coach
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog3}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[20px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                The no-fuss guide to upselling and <br /> cross selling
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-5 flex-wrap md:flex-nowrap">
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog1}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[16px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                Dec 22, 2023 Meet AutoManage, the best AI <br /> management
                tools
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog2}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[20px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                How to earn more money as a <br />
                wellness coach
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog3}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[20px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                The no-fuss guide to upselling and <br /> cross selling
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-5 flex-wrap md:flex-nowrap">
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog1}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[16px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                Dec 22, 2023 Meet AutoManage, the best AI <br /> management
                tools
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog2}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[20px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                How to earn more money as a <br />
                wellness coach
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
          <div className="group  md:w-[360px] h-[450px] overflow-hidden rounded-md">
            <div className="w-full overflow-hidden">
              <img
                src={Blog3}
                alt=""
                className="group-hover:scale-125 duration-200 group-hover:rotate-6"
              />
            </div>
            <div className="mt-5 flex flex-col items-start gap-4">
              <button className="py-1 px-3 rounded-md text-sm bg-[#3758f9] text-white ">
                Dec 22, 2023
              </button>
              <h1
                className={` text-[20px] font-sans font-bold ${
                  DarkMode ? "text-white" : "text-black"
                } hover:text-blue-600 cursor-pointer`}
              >
                The no-fuss guide to upselling and <br /> cross selling
              </h1>
              <p className="text-gray-500">
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
