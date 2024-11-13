/* eslint-disable react/prop-types */
import img1 from "../../assets/brands/1.svg";
import img1white from "../../assets/brands/1-white.svg";
import img2 from "../../assets/brands/2.svg";
import img2white from "../../assets/brands/2-white.svg";
import img3 from "../../assets/brands/3.svg";
import img3white from "../../assets/brands/3-white.svg";
import img4 from "../../assets/brands/4.svg";
import img4white from "../../assets/brands/4-white.svg";
import img5 from "../../assets/brands/5.svg";
import img5white from "../../assets/brands/5-white.svg";
function Contact({ DarkMode }) {
  return (
    <>
      <div className="relative" id="Contact">
        <div
          className={` w-full px-14 flex items-start justify-end flex-col  ${
            DarkMode ? "bg-blue-950/40" : "bg-[#e9f9ff]"
          } h-auto pt-44 `}
        >
          <div className={`${DarkMode ? "text-white" : "text-black"} mb-10`}>
            <h1 className="text-xl font-sans font-medium">CONTACT US</h1>
            <p className="text-3xl my-5 font-sans font-bold">
              Let's talk about <br /> your problem.
            </p>
          </div>

          <div className="mt-16 pb-10 px-14 flex gap-20  flex-wrap block lg:hidden mb-32">
            <div className="flex  gap-5 ">
              <div className="">
                <svg
                  width="29"
                  height="35"
                  viewBox="0 0 29 35"
                  className="fill-current text-[#3758f9]"
                >
                  <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z"></path>
                  <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z"></path>
                </svg>
              </div>
              <div>
                <h1
                  className={`text-xl font-sans font-medium mb-4  ${
                    DarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Our Location
                </h1>
                <p className="text-gray-500">
                  401 Broadway, 24th Floor, Orchard <br /> Cloud View, London
                </p>
              </div>
            </div>
            <div className="flex  gap-5 ">
              <div className="">
                <svg
                  width="34"
                  height="25"
                  viewBox="0 0 34 25"
                  className="fill-current text-[#3748f9]"
                >
                  <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z"></path>
                </svg>
              </div>
              <div>
                <h1
                  className={`text-xl font-sans font-medium mb-4  ${
                    DarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Our Location
                </h1>
                <p className="text-gray-500">
                  401 Broadway, 24th Floor, Orchard <br /> Cloud View, London
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden lg:block">
          <div className="mt-16 pb-10 px-14 flex gap-20 w-full  ">
            <div className="flex  gap-5 w-80">
              <div className="">
                <svg
                  width="29"
                  height="35"
                  viewBox="0 0 29 35"
                  className="fill-current text-[#3758f9]"
                >
                  <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z"></path>
                  <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z"></path>
                </svg>
              </div>
              <div>
                <h1
                  className={`text-xl font-sans font-medium mb-4  ${
                    DarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Our Location
                </h1>
                <p className="text-gray-500">
                  401 Broadway, 24th Floor, Orchard <br /> Cloud View, London
                </p>
              </div>
            </div>
            <div className="flex  gap-5 w-80">
              <div className="">
                <svg
                  width="34"
                  height="25"
                  viewBox="0 0 34 25"
                  className="fill-current text-[#3748f9]"
                >
                  <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z"></path>
                </svg>
              </div>
              <div>
                <h1
                  className={`text-xl font-sans font-medium mb-4  ${
                    DarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Our Location
                </h1>
                <p className="text-gray-500">
                  401 Broadway, 24th Floor, Orchard <br /> Cloud View, London
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="w-full items-center flex justify-center">
          <div
            className={`w-full sm:w-[60%]   lg:w-[400px] shadow-lg absolute -bottom-90 lg:mt-0 mt-60 lg:top-20 lg:right-12 py-8 px-10 rounded-lg ${
              DarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <h1 className="text-2xl font-sans font-bold">Send us a Message</h1>
            <form action="" className="mt-8 flex flex-col gap-5 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-sans text-gray-500">
                  Full Name*
                </label>
                <input
                  type="text"
                  placeholder="Adam Gilius"
                  className="border-b-[1px] bg-transparent outline-none duration-200 py-2 focus-within:border-blue-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-sans text-gray-500">
                  Email*
                </label>
                <input
                  type="text"
                  placeholder="example@youremail.com"
                  className="border-b-[1px] bg-transparent outline-none duration-200 py-2 focus-within:border-blue-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-sans text-gray-500">
                  Phone*
                </label>
                <input
                  type="text"
                  placeholder="+ 93 784844389"
                  className="border-b-[1px] bg-transparent outline-none duration-200 py-2 focus-within:border-blue-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-sm font-sans text-gray-500">
                  Message*
                </label>
                <input
                  type="text"
                  placeholder="type your message here"
                  className="border-b-[1px] bg-transparent outline-none duration-200 py-2 focus-within:border-blue-600"
                />
              </div>
              <div className="flex flex-col gap-2">
                <button className="py-2 px-5 bg-[#3758f9] text-white font-semibold rounded-md">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* links */}
      <div className="px-14 flex mt-[30rem] mb-10 lg:mt-32 py-5 items-center justify-center gap-10 flex-wrap ">
        <img src={DarkMode ? img1white : img1} alt="" />
        <img src={DarkMode ? img2white : img2} alt="" />
        <img src={DarkMode ? img3white : img3} alt="" />
        <img src={DarkMode ? img4white : img4} alt="" />
        <img src={DarkMode ? img5white : img5} alt="" />
      </div>
    </>
  );
}

export default Contact;
