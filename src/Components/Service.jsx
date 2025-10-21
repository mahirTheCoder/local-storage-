import React from "react";
import servimg from "../assets/Images/Rectangle 70.jpg";
import s1 from "../assets/Images/Ellipse 178.png";
import s2 from "../assets/Images/Ellipse 179.png";
import s3 from "../assets/Images/Ellipse 180.png";
import s4 from "../assets/Images/Ellipse 181.png";
const Service = () => {
  return (
    <>
      <section id="service" className="mt-[184px] mb-[108px]">
        <div className="container">
          <div className="service-both items-center flex justify-between">
            <div className="img-part">
              <img
                className="w-[455px] h-[521px]  "
                src={servimg}
                alt="Service Image"
              />
            </div>
            <div className="content-part">
              <h2 className="text-[36px] font-semibold text-black mb-[25px] ">
                Our Core Services
              </h2>
              <p className="text-sm font-medium text-black mb-6 ">
                Our technology solutions are perfectly designed to ensure the
                virtual world meets your needs.
              </p>

              <div className="imag-and-c flex gap-7 mb-6">
                <div className="img">
                  <img className="w-[50px] h-[50px]" src={s1} alt="img" />
                </div>
                <div className="content">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Mobile Applications
                  </h2>
                  <p className="text-xs font-normal text-black mb-4">
                    We do highly customizable, easy-to-manage, and extendable
                    WordPress solutions.
                  </p>
                  <p className="text-xs font-normal text-black mb-4">
                    Plugins, themes, or an eCommerce. We can do it. ,
                  </p>
                </div>
              </div>

              <div className="imag-and-c flex gap-7 mb-6">
                <div className="img">
                  <img className="w-[50px] h-[50px]" src={s2} alt="img" />
                </div>
                <div className="content">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Web Development
                  </h2>
                  <p className="text-xs font-normal text-black mb-4">
                    We convert any design file: PSD, Sketch, Figma, Adobe XD to
                    pixel-perfect,
                  </p>
                  <p className="text-xs font-normal text-black mb-4">
                    semantic, and standard-compliant HTML/CSS templates. ,
                  </p>
                </div>
              </div>

              <div className="imag-and-c flex gap-7 mb-6">
                <div className="img">
                  <img className="w-[50px] h-[50px]" src={s3} alt="img" />
                </div>
                <div className="content">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Shopify & Woo Commerce Development
                  </h2>
                  <p className="text-xs font-normal text-black mb-4">
                    We know the ins and outs of Shopify & WooCommerce and we can
                    help you get your
                  </p>
                  <p className="text-xs font-normal text-black mb-4">
                    eCommerce site running in a matter of weeks.
                  </p>
                </div>
              </div>

              <div className="imag-and-c flex gap-7 mb-6">
                <div className="img">
                  <img className="w-[50px] h-[50px]" src={s4} alt="img" />
                </div>
                <div className="content">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Vue - React Development & Email Template Coding
                  </h2>
                  <p className="text-xs font-normal text-black w-[478px] mb-4">
                    Performance, Scalability, Reusable Components, One Way Data
                    Flow - the perfect ingredients for building websites or web
                    apps; also high class coding for email marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
