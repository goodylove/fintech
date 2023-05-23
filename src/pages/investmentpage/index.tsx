import React from "react";
import loanImg from "../../assets/4.png";
import InvesImg from "../../assets/2.png";

import Investment from "./../../components/investment/index";
import Footer from "./../../components/footer/index";

const InvestmentPage = () => {
  return (
    <main className="w-full">
      <section className="microlending w-full mt-[5.7rem] flex justify-center items-center h-[13%] relative p-1 ">
        <div>
          <img
            src={loanImg}
            alt=""
            className="h-[200px] w-[482px] md:w-[100vw] md:h-[250px] sm:w-[100%]"
          />
          <div className="absolute top-[4px]  bg-black opacity-[0.8] h-[97%] text-white flex  items-center justify-center w-[99%]  md:w-[36%] ">
            <div className="text-start">
              <h2 className="text-[25px]">Investment</h2>
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
                If you have a lump sum of money to invest and desire amazing
                returns on it, then our fund placement product is perfect for
                you. You can earn more interest on your deposits from a period
                as short as 30 days to up to a full year.
              </h5>
              <h5 className="text-[15px] mt-2 ml-5 text-start">
                With our fund placement product, we help you eliminate the risks
                of investing, as you grow your wealth while earning returns on
                your savings.
              </h5>
            </span>
          }
          img={InvesImg}
        />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default InvestmentPage;

// const InvestmentPage = () => {
//   return <div>investpage</div>;
// };

// export default InvestmentPage;
