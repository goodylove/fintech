import React from "react";
import loanImg from "../../assets/4.png";
import maskImg from "../../assets/3.png";
import { bdc } from "../../components/icons/svg";
import Investment from "./../../components/investment/index";
import Footer from "./../../components/footer/index";

const RealEstate = () => {
  return (
    <main className="w-full">
      <section className="microlending w-full mt-[5.7rem] flex justify-center items-center h-[13%] relative p-1 ">
        <div>
          <img
            src={loanImg}
            alt=""
            className="h-[200px] w-[482px] md:w-[100vw] md:h-[250px] sm:w-[100%]"
          />
          <div className="absolute top-[4px]  bg-black opacity-[0.8] h-[97%] text-white flex  items-center justify-center  w-[99%]  md:w-[36%] ">
            <div className="text-start">
              <h2 className="text-[25px]">Real Estate</h2>
              <p className="text-start text-[12px]">
                You can earn more interest on your deposits from a
              </p>
              <p className="text-[12px]">
                period as short as 30 days to up to a full year..
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Investment
          text={
            <span className="text-start">
              <h5 className=" text-[15px] mt-2 ml-5 text-start">
                Our objective is to deliver value to our clients via economies
                of scale, while increasing our market share. This would help
                position us to gain broader access to markets, and in turn,
                improve our companys performance and accelerate growth.
              </h5>
              <h5 className="text-[15px] mt-2 ml-5 text-start">
                We have a large portfolio in real estate, and we specialize in
                offering the following services
              </h5>
              <div className="flex items-center text-start mt-2 ml-5">
                <span>{bdc.bdc()}</span>
                <span className="pl-2">Joint ventures and acquisition</span>
              </div>
              <div className="flex items-center text-start mt-2 ml-5">
                <span>{bdc.bdc()}</span>
                <span className="pl-2">
                  Sale, and management of commercial properties.
                </span>
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

export default RealEstate;
