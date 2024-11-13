import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Shape1 from "../../assets/footer/shape-1.svg";
import Shape3 from "../../assets/footer/shape-3.svg";
import footer1 from "../../assets/footer/1-footer.jpg";
import footer2 from "../../assets/footer/2-footer.jpg";
import LogoLight from "../../assets/logo/logo-white.svg";

function Footer() {
  return (
    <>
      <div className="bg-[#090e34] h-auto relative py   py-16">
        <div className="w-full   overflow-hidden px-14  ">
          <img src={Shape1} alt="" className="absolute top-0 left-0" />
          <img src={Shape3} alt="" className="absolute bottom-0 right-0" />

          <div className="flex items-center justify-center  relative z-10 flex-wrap lg:flex-nowrap gap-2">
            <div className="w-full md:w-[300px]">
              <img src={LogoLight} alt="" />
              <p className="text-gray-500 font-sans font-medium my-5">
                We create digital experiences for <br /> brands and companies by
                using <br />
                technology.
              </p>
              <div className="text-white flex gap-5 items-center text-xl">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
            <div className="text-white w-full md:w-[300px]">
              <h1 className="text-2xl mb-8 mt-5 font-sans font-medium">
                About
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  Home
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  Features
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  About
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  Testimonial
                </li>
              </ul>
            </div>
            <div className="text-white w-full md:w-[300px]">
              <h1 className="text-2xl mb-8 mt-5 font-sans font-medium">
                Features
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  How it Work
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  Features
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  About
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  Testimonial
                </li>
              </ul>
            </div>
            <div className="text-white w-full md:w-[300px]">
              <h1 className="text-2xl mb-8 mt-5 font-sans font-medium">
                Our Products
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  How it Work
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  Features
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  About
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150">
                  Testimonial
                </li>
              </ul>
            </div>
            <div className="text-white w-full md:w-[320px]">
              <h1 className="text-2xl mb-8 mt-5 font-sans font-medium">
                Latest Blogs
              </h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-blue-600 duration-150 mt-2 flex gap-5">
                  <img src={footer1} alt="" className="rounded-md w-14 h-12" />
                  <p className="text-sm">I think really important to design with...</p>
                </li>
                <li className="cursor-pointer hover:text-blue-600 duration-150 mt-2 flex gap-5">
                  <img src={footer2} alt="" className="rounded-md w-14 h-12" />
                  <p className="text-sm">Recognizing the need is the primary...</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mt-32" />
        <div className="px-14 flex items-center justify-between w-full pt-10 flex-wrap gap-5">
          <ul className="flex gap-5 text-white font-sans font-medium">
            <li>Privacy policy</li>
            <li>Legal notice</li>
            <li>Terms of service</li>
          </ul>
          <p className="text-xl font-sans font-medium text-white">
            Designed and Developed by TailGrids and UIdeck
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
