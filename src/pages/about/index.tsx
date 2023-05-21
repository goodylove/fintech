import React from "react";
import Investment from "./../../components/investment/index";
import abtImg from "../../assets/1.png";

const About = () => {
  return (
    <main>
      <section className="mt-10 h-[30%] flex justify-center items-center  ">
        <div
          className="flex justify-center flex-col
        "
        >
          <article className="text-[40px] text-purple font-[500] leading-[40px] text-center m-2">
            Were changing the way
            <br /> people think about Investment
          </article>
          <article className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua.
          </article>
        </div>
      </section>
      <section>
        <Investment
          title={
            <span className="text-black  text-[24px] font-[700] leading-[36px] ml-5">
              Who We Are
            </span>
          }
          className="flex w-full  md:w-[90%] md:justify-between  items-center md:flex-row-reverse  flex-col"
          text={
            <span className="">
              <p className="text-[15px] mt-2 ml-5">
                "FOY Global investment service limited is a multi-faceted
                service provider with a diversified portfolio in Forex trading,
                real estate, procurement, investments, and micro-lending
              </p>
              <p className="text-[15px] mt-2 ml-5">
                It was established in 2015 with the mission to provide
                comprehensive financial solutions to meet the needs of
                individuals and businesses alike.
              </p>
              <p className="text-[15px] mt-2 ml-5">
                We seek to partner with small and medium-scale enterprises led
                by a strong result-driven management team that can grow into
                large dominant enterprises.
              </p>
              <p className="text-[15px] mt-2 ml-5">
                The company thrives on a strong business culture built on
                time-trusted principles such as integrity, excellent delivery,
                efficiency, professionalism, and growing together."
              </p>
            </span>
          }
          img={`${abtImg}`}
        />
      </section>
    </main>
  );
};

export default About;
