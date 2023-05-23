import React from "react";
import loanImg from "../../assets/4.png";
import maskImg from "../../assets/Mask group.png";

import Investment from "./../../components/investment/index";
import Footer from "./../../components/footer/index";

const Microlending = () => {
  return (
    <main className="w-full">
      <section className="microlending w-full mt-[5.7rem] flex justify-center items-center h-[13%] relative p-1 ">
        <div>
          <img
            src={loanImg}
            alt=""
            className="h-[200px] w-[482px] md:w-[100vw] md:h-[250px] sm:w-[100%]"
          />
          <div className="absolute top-[4px]  bg-black opacity-[0.8] h-[97%] text-white flex  items-center justify-center  w-[99%] md:w-[36%] ">
            <div className="text-start">
              <h2 className="text-[25px]">Microlending</h2>
              <p className="text-start text-[12px]">
                We avail them the opportunity to access soft loans
              </p>
              <p className="text-[12px]">within a 48 hour window.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Investment
          text={
            <span className="text-start">
              <h5 className=" text-[15px] mt-2 ml-5 text-start">
                Our micro-lending division offers short-term loans to
                individuals and businesses in need of financial assistance. This
                micro-loan product is designed to enable individuals with small
                business ventures to access loan facilities. .
              </h5>
              <h5 className="text-[15px] mt-2 ml-5 text-start">
                With our micro-lending service, small business owners no longer
                have to worry about the many hurdles that have to be crossed for
                them to access loans from commercial banks. We avail them the
                opportunity to access soft loans within a 48 hour window
              </h5>
            </span>
          }
          img={maskImg}
        />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Microlending;
