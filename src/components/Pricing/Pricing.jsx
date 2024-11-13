/* eslint-disable react/prop-types */

function Pricing({ DarkMode }) {
  return (
    <>
      <div className={` my-20 px-14 `} id="Pricing">
        {/* text div */}
        <div className="text-center pb-10">
          <h1 className="text-[#3758f9] font-sans font-bold text-center">
            Pricing Table
          </h1>
          <h1
            className={`text-4xl font-bold font-sans my-4 text-center ${
              DarkMode ? "text-white" : "text-black"
            }`}
          >
            Awesome Pricing Plan
          </h1>
          <p className="text-gray-500 text-center">
            There are many variations of passages of Lorem Ipsum available{" "}
            <br /> but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <div
            className={`w-full  md:w-[360px]  shadow-xl rounded-lg ${
              DarkMode ? "bg-gray-800" : "bg-white"
            }  py-12 px-10`}
          >
            <h1
              className={` text-xl font-sans font-medium ${
                DarkMode ? "text-white" : "text-black"
              }  `}
            >
              Starter
            </h1>
            <h1
              className={` text-4xl font-sans font-bold mt-4 mb-8 ${
                DarkMode ? "text-white" : "text-black"
              } `}
            >
              <sub className="text-2xl">$</sub> 25.00{" "}
              <sub className="text-gray-500 text-sm font-medium">Per Month</sub>
            </h1>
            <h1
              className={`text-lg font-sans font-medium ${
                DarkMode ? "text-white" : "text-black"
              } `}
            >
              Features
            </h1>
            <ul className="text-gray-500 font-sans mt-5 mb-8 flex flex-col gap-3">
              <li>Up to 1 User</li>
              <li>All UI components</li>
              <li>Lifetime access</li>
              <li>Free updates</li>
            </ul>
            <button className="px-6 py-[10px] bg-[#3758f9] hover:bg-blue-800 duration-300 font-sans font-medium text-white rounded-md">
              Purchase Now
            </button>
          </div>
          <div
            className={`w-full  md:w-[360px]  shadow-xl rounded-lg relative overflow-hidden ${
              DarkMode ? "bg-gray-800" : "bg-white"
            }  py-12 px-10`}
          >
            {/* Recommonded */}
            <div className="bg-[#3758f9] -rotate-90 w-44 p-2 h-auto text-white text-lg font-sans font-medium flex items-center justify-center absolute top-[65px] -right-14 rounded-s-lg">
              Recommended
            </div>
            <h1
              className={` text-xl font-sans font-medium ${
                DarkMode ? "text-white" : "text-black"
              }  `}
            >
              Basic
            </h1>
            <h1
              className={` text-4xl font-sans font-bold mt-4 mb-8 ${
                DarkMode ? "text-white" : "text-black"
              } `}
            >
              <sub className="text-2xl">$</sub> 59.00{" "}
              <sub className="text-gray-500 text-sm font-medium">Per Month</sub>
            </h1>
            <h1
              className={`text-lg font-sans font-medium ${
                DarkMode ? "text-white" : "text-black"
              } `}
            >
              Features
            </h1>
            <ul className="text-gray-500 font-sans mt-5 mb-8 flex flex-col gap-3">
              <li>Up to 1 User</li>
              <li>All UI components</li>
              <li>Lifetime access</li>
              <li>Free updates</li>
            </ul>
            <button className="px-6 py-[10px] bg-[#3758f9] hover:bg-blue-800 duration-300 font-sans font-medium text-white rounded-md">
              Purchase Now
            </button>
          </div>
          <div
            className={`w-full  md:w-[360px]  shadow-xl rounded-lg ${
              DarkMode ? "bg-gray-800" : "bg-white"
            }  py-12 px-10`}
          >
            <h1
              className={` text-xl font-sans font-medium ${
                DarkMode ? "text-white" : "text-black"
              }  `}
            >
              Premium
            </h1>
            <h1
              className={` text-4xl font-sans font-bold mt-4 mb-8 ${
                DarkMode ? "text-white" : "text-black"
              } `}
            >
              <sub className="text-2xl">$</sub> 99.00{" "}
              <sub className="text-gray-500 text-sm font-medium">Per Month</sub>
            </h1>
            <h1
              className={`text-lg font-sans font-medium ${
                DarkMode ? "text-white" : "text-black"
              } `}
            >
              Features
            </h1>
            <ul className="text-gray-500 font-sans mt-5 mb-8 flex flex-col gap-3">
              <li>Up to 1 User</li>
              <li>All UI components</li>
              <li>Lifetime access</li>
              <li>Free updates</li>
            </ul>
            <button className="px-6 py-[10px] bg-[#3758f9] hover:bg-blue-800 duration-300 font-sans font-medium text-white rounded-md">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
