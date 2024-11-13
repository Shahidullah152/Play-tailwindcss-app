import { NavLink } from "react-router-dom";

function ContactPage({ DarkMode }) {
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
            Contact Page
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
                / Contact us
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
