import React from "react";
import loanImg from "../../assets/4.png";
import maskImg from "../../assets/Mask group.png";
import { bdc } from "../../components/icons/svg";
import Investment from "./../../components/investment/index";
import Footer from "./../../components/footer/index";

const Bdc = () => {
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
              <h2 className="text-[25px]">Bureau-de-change (BDC)</h2>
              <p className="text-start text-[12px]">
                We deliver our clients access to a broad range of
              </p>
              <p className="text-[12px]">currency exchange services.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Investment
          text={
            <span className="text-start">
              <h5 className=" text-[15px] mt-2 ml-5 text-start">
                We are licensed by the Central Bank of Nigeria to carry out
                Bureau de change services in Nigeria. We deal mainly in the
                three (3) major world currencies: American Dollars (USD), Great
                British Pounds (GBP) & Euros.
              </h5>
              <h5 className="text-[15px] mt-2 ml-5 text-start">
                We deliver our clients access to a broad range of currency
                exchange services which include the following:
              </h5>
              <div className="flex items-center text-start mt-2 ml-5">
                <span>{bdc.bdc()}</span>
                <span className="pl-2">Cash pick up / delivery</span>
              </div>
              <div className="flex items-center text-start mt-2 ml-5">
                <span>{bdc.bdc()}</span>
                <span className="pl-2">School fees abroad</span>
              </div>
              <div className="flex items-center text-start mt-2 ml-5">
                <span>{bdc.bdc()}</span>
                <span className="pl-2">Medical fees abroad</span>
              </div>
              <div className="flex items-center text-start mt-2 ml-5">
                <span>{bdc.bdc()}</span>
                <span className="pl-2">Personal travel allowance (PTA)</span>
              </div>
              <div className="flex items-center text-start mt-2 ml-5">
                <span>{bdc.bdc()}</span>
                <span className="pl-2">Business travel allowance(BTA)</span>
              </div>
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

export default Bdc;
