import React from "react";
import bgimg from "../assets/Images/Group 8913.png";
import rk from "../assets/Images/Rectangle 46.jpg";

const PartnerShip = () => {
  return (
    <>
      <section
        id="partnerShip"
        className="relative w-full h-[580px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg}) `}}
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
                Partnership for agencies
              </h2>
              <p className="text-sm font-normal w-[569px] leading-10 text-black">
                A reliable coding partner that delivers solutions to your
                business challenges and stays by your side in the long term.
                Having the whole spectrum of web development expertise, we are
                here to take care of your projects while making it possible for
                you to focus on growing your own business.
              </p>
                <button className="bg-[#00D258]  hover:bg-white mt-12.5 hover:text-black duration-150  text-wite px-10 py-3 rounded-full font-semibold">
                  Schedule a call
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerShip;
