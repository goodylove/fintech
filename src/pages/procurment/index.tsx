import React from "react";
import loanImg from "../../assets/4.png";
import proImg from "../../assets/af.png";

import Investment from "./../../components/investment/index";
import Footer from "./../../components/footer/index";

const Procurment = () => {
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
              <h2 className="text-[25px]">Procurement</h2>
              <p className="text-start text-[12px]">
                We leverage on an extensive network of trusted
              </p>
              <p className="text-[12px]"> suppliers and vendors.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Investment
          text={
            <span className="text-start">
              <h5 className=" text-[15px] mt-2 ml-5 text-start">
                Our procurement division provides sourcing services such as
                supplier identification, selection, and contract negotiation. We
                leverage on an extensive network of trusted suppliers and
                vendors to offer our clients high-quality goods and services at
                a competitive price.
              </h5>
              <h5 className="text-[15px] mt-2 ml-5 text-start">
                We endeavor to support the daily operations of our clients, in a
                bid to helping them drive utmost value from their business. Our
                timely delivery and top-notch execution has helped us to earn
                our clients trust, as well as maintain our status as their
                trusted procurement vendors.
              </h5>
            </span>
          }
          img={proImg}
        />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Procurment;
