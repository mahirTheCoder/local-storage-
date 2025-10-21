import React from "react";
import bgimg from "../assets/Images/Group 8913.png";
import rk from "../assets/Images/Rectangle 46.jpg";
const Petrong = () => {
  return (
    <>
      <section
        id="partnerShip"
        className="relative w-full h-[580px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})  ` }}
      >
        <div className="container ">
          <div className="img-and-content-both flex justify-between items-center ">
            <div className="img flex-shrink-0 ">
              <img
                className="relative w-[607px] h-[472px] z-10 mt-[54px] ml-10 "
                src={rk}
                alt="partner"
              />
            </div>
            <div className="content text-white mt-[38px]">
              <h2 className="text-4xl font-bold text-black mb-12.5">
                Petrong & Pacioli
              </h2>
              <p className="text-sm font-normal w-[569px] leading-10 text-black">
                Pacioli is the flagship product at petrong software solutions, a
                tailored digital lending tools that helps microfinance
                institutions to efficiently and quickly onboard customers and to
                account reconciliation with financial inclution as the
                motivation. Pacioli improves female customers comfort with the
                service by specifically design for unique constraint.
              </p>
              <div className="button-both flex gap-8.5">
                <button className="bg-[#00D258]  text-wite px-6 py-3 rounded-full font-semibold">
                  Pacioli
                </button>
                <button className="bg-[#00D258] hover:bg-white hover:text-black duration-150  text-wite px-10 py-3 rounded-full font-semibold">
                  Demo Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Petrong;
