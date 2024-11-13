/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import AboutIMG1 from "../../assets/about/1.jpg";
import AboutIMG2 from "../../assets/about/2.jpg";
function About({ DarkMode }) {
  return (
    <>
      <div
        id="About"
        className={`mt-36 w-full py-20  px-14  ${
          DarkMode ? "bg-gray-800" : "bg-[#f9fafb]"
        } h-auto`}
      >
        <div className="flex items-center justify-between gap-y-10 flex-wrap lg:flex-nowrap">
          {/* text div */}
          <div className="lg:w-[470px] w-full">
            <h1
              className={`${
                DarkMode ? "text-white" : "text-black"
              } text-4xl font-sans font-[650] mb-5`}
            >
              Brilliant Toolkit to Build <br /> Nextgen Website Faster.
            </h1>
            <p className="font-sans text-gray-500">
              The main ‘thrust' is to focus on educating attendees on how to
              best protect highly vulnerable business applications with
              interactive panel discussions and roundtables led by subject
              matter experts.
            </p>
            <p className="font-sans text-gray-500 my-5">
              The main ‘thrust' is to focus on educating attendees on how to
              best protect highly vulnerable business applications with
              interactive panel.
            </p>

            <button className="px-6 py-[10px] bg-[#3758f9] hover:bg-blue-800 duration-300 font-sans font-medium text-white rounded-md">
              Know More
            </button>
          </div>
          <div className="lg:w-[550px] w-full flex items-center justify-center md:justify-between gap-5 flex-wrap sm:flex-nowrap">
            <div className="h-[420px] w-full sm:w-72">
              <img
                src={AboutIMG1}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex justify-between flex-col h-[420px] w-full sm:w-72  gap-5">
              <img
                src={AboutIMG2}
                alt=""
                className="w-full h-[60%] object-cover"
              />
              <div className="w-full h-36 bg-blue-600 flex items-start box-border px-10 justify-center flex-col">
                <h1 className="text-4xl text-white font-sans font-bold">90</h1>
                <h1 className="text-lg text-white font-sans font-semibold">
                  We Have
                </h1>
                <p className="text-gray-300 text-lg font-sans font-medium">
                  Years of experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blue bg about */}
      <div className="flex items-center justify-center flex-col gap-5 py-12 px-5 md:p-20 bg-[#3758f9]">
        <h1 className="text-4xl font-sans font-bold text-white text-center">
          What Are You Looking For ?
        </h1>
        <h1 className="text-4xl font-sans font-medium text-white text-center">
          Get Starting Now
        </h1>
        <p className="text-center text-gray-100 ">
          There are many variations of passages of Lorem Ipsum but the <br />{" "}
          majority have suffered in some form.
        </p>
        <button className="py-[10px] px-8 rounded-md bg-green-400/80 hover:bg-green-400 duration-300 text-white ">
          Start using Play
        </button>
      </div>
    </>
  );
}

export default About;
