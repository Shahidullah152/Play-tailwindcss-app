import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { getDarkMode, toggleDarkMode } from "./components/Thems/Thems";
import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Teams from "./components/Team/Teams";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./components/About/AboutUsPage";
import PricingPage from "./components/Pricing/PricingPage";
import ContactPage from "./components/Contact/ContactPage";
import BlogPage from "./components/Blogs/BlogPage";
import SingIn from "./components/SingIn/SingIn";
import SignUp from "./components/SignUp/SignUp";
import Error from "./components/404/Error";
import NavbarForPages from "./components/Navbar/NavbarForPages";
import { FaAngleUp } from "react-icons/fa";
import BlogDetails from "./components/Blogs/‌BlogDetails";

function App() {
  // Dark & Ligth Mode Functionality
  const [DarkMode, setDarkMode] = useState(getDarkMode());
  const handleDarkMode = () => {
    const newMode = toggleDarkMode();
    setDarkMode(newMode);
  };

  // Scroll To Top
  const [Top, setTop] = useState(false);

  useEffect(() => {
    const GoToTop = () => {
      if (window.scrollY > 50) {
        setTop(true);
      } else {
        setTop(false);
      }
    };
    window.addEventListener("scroll", GoToTop);
  }, []);

  const GoTopFunc = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Navbar DarkMode={DarkMode} handleDarkMode={handleDarkMode} />
  //       </>
  //     ),
  //   },
  // ]);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar DarkMode={DarkMode} handleDarkMode={handleDarkMode} />
                <Hero />
                <Features DarkMode={DarkMode} />
                <About DarkMode={DarkMode} />
                <Pricing DarkMode={DarkMode} />
                {/* <Testimonials DarkMode={DarkMode} /> */}
                <FAQ DarkMode={DarkMode} />
                <Teams DarkMode={DarkMode} />
                <Blogs DarkMode={DarkMode} />
                <Contact DarkMode={DarkMode} />
                <Footer />
              </>
            }
          />
          <Route
            path="/AboutPage"
            element={
              <>
                <NavbarForPages
                  DarkMode={DarkMode}
                  handleDarkMode={handleDarkMode}
                />
                <AboutUsPage DarkMode={DarkMode} />
                <About DarkMode={DarkMode} />
                <Teams DarkMode={DarkMode} />

                <Footer />
              </>
            }
          />
          <Route
            path="/PricingPage"
            element={
              <>
                <NavbarForPages
                  DarkMode={DarkMode}
                  handleDarkMode={handleDarkMode}
                />
                <PricingPage DarkMode={DarkMode} />
                <Pricing DarkMode={DarkMode} />
                <Footer />
              </>
            }
          />
          <Route
            path="/ContactPage"
            element={
              <>
                <NavbarForPages
                  DarkMode={DarkMode}
                  handleDarkMode={handleDarkMode}
                />
                <ContactPage DarkMode={DarkMode} />
                <Contact DarkMode={DarkMode} />
                <Footer />
              </>
            }
          />
          <Route
            path="/BlogPage"
            element={
              <>
                <NavbarForPages
                  DarkMode={DarkMode}
                  handleDarkMode={handleDarkMode}
                />
                <BlogPage DarkMode={DarkMode} />
                <Footer />
              </>
            }
          />
          <Route
            path="/SignIn"
            element={
              <>
                <NavbarForPages
                  DarkMode={DarkMode}
                  handleDarkMode={handleDarkMode}
                />
                <SingIn DarkMode={DarkMode} />
                <Footer />
              </>
            }
          />
          <Route
            path="/SignUp"
            element={
              <>
                <NavbarForPages
                  DarkMode={DarkMode}
                  handleDarkMode={handleDarkMode}
                />
                <SignUp DarkMode={DarkMode} />
                <Footer />
              </>
            }
          />
          <Route
            path="/BlogDetails"
            element={
              <>
                <NavbarForPages
                  DarkMode={DarkMode}
                  handleDarkMode={handleDarkMode}
                />
                <BlogDetails DarkMode={DarkMode} />
                <Footer />
              </>
            }
          />
          <Route
            path="/404"
            element={
              <>
                <NavbarForPages
                  DarkMode={DarkMode}
                  handleDarkMode={handleDarkMode}
                />
                <Error DarkMode={DarkMode} />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>

      {/* Scroll To Top BTN */}
      {Top && (
        <button
          className="p-2 rounded-md hover:bg-blue-800 duration-300 text-white bg-blue-700 fixed bottom-10 right-8"
          onClick={GoTopFunc}
        >
          <FaAngleUp />
        </button>
      )}
    </>
  );
}

export default App;
