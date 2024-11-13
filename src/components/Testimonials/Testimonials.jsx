/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Testimonials({ DarkMode }) {
  // slider var
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className={`mt-36 w-full py-20  px-14  ${
          DarkMode ? "bg-gray-800" : "bg-[#f9fafb]"
        } h-auto`}
      >
        {/* text div */}
        <div className="text-center pb-10">
          <h1 className="text-[#3758f9] font-sans font-bold text-center">
            Testimonials
          </h1>
          <h1
            className={`text-4xl font-bold font-sans my-4 text-center ${
              DarkMode ? "text-white" : "text-black"
            }`}
          >
            What our Clients Say
          </h1>
          <p className="text-gray-500 text-center">
            There are many variations of passages of Lorem Ipsum <br />{" "}
            available but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Slideer  */}
        <div>
          <Slider {...settings}>
            <div className="p-20 bg-blue-400">
              <h3>1</h3>
            </div>
            <div className="p-20 bg-blue-600">
              <h3>2</h3>
            </div>
            <div className="p-20 bg-blue-700">
              <h3>3</h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
