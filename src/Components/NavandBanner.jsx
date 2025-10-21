import React from "react";
import bgimg from "../assets/Images/into-bg.jpg";
import banner2 from '../assets/Images/intro-img (1).png'

const NavandBanner = () => {
  return (
    <section
      id="navbar"
      className="relative w-full h-[741px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="all-content relatiove z-10">
        {/* Navbar */}
        <div className="container">
          <nav className="relative z-10 flex items-center justify-end px-6 py-4 max-w-7xl mx-auto text-white">
            <ul className="hidden md:flex items-center gap-6 text-sm">
              <li>
                <a href="#home" className="hover:text-yellow-400">
                  ABOUT{" "}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  PRODUCT
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  EXPERTISE
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  BLOG
                </a>
              </li>
            </ul>
            <button className="md:hidden px-3 py-2 border rounded text-white border-white">
              Menu
            </button>
          </nav>
        </div>

        {/* Banner Content */}
        <div className="container relative z-10">
          <div className="banner-part-both pt-[188px] flex justify-between">
            <div className="banner-text-part">
              <h2 className="text-[53px] font-bold w-[549px] mb-5 text-white">
                Get the next level developments.{" "}
              </h2>
              <p className="text-sm font-semibold w-[519px] text-white mb-11">
                Every line of code we deliver is carefully crafted by our
                in-house team of professional developers. While constantly
                looking for new horizons, challenges, and opportunities in the
                web development, we have focused our attention on these core
                areas:
              </p>

              <div className="button-both flex gap-8.5">
                <button className="bg-[#00D258]  text-wite px-6 py-3 rounded-full font-semibold">
                  Get a Quote
                </button>
                <button className="bg-[#00D258] hover:bg-white hover:text-black duration-150  text-wite px-10 py-3 rounded-full font-semibold">
                  Schedule a call
                </button>
              </div>
            </div>

            <div className="image-part">
                <img className="w-[515PX] h-[58PPX] " src={banner2} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavandBanner;
