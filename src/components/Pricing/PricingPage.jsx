import { NavLink } from "react-router-dom";

function PricingPage({ DarkMode }) {
  return (
    <>
      <div className="mt-32 shadow-sm pb-10">
        {/* text div */}
        <div className="text-center pb-2">
          <h1
            className={`text-4xl font-bold font-sans my-4 text-center ${
              DarkMode ? "text-white" : "text-black"
            }`}
          >
            Pricing Page
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
                / Pricing
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PricingPage;
