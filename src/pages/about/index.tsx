import React, { useRef } from 'react';
import Investment from './../../components/investment/index';
import abtImg from '../../assets/1.png';
import exeImg from '../../assets/excellence.png';
import integretImg from '../../assets/integration.png';
import proImg from '../../assets/professional-services.png';
import phlisoImg from '../../assets/philosophy 1.png';
import vision from '../../assets/vision 1.png';
import vision2 from '../../assets/target 1.png';
import Footer from './../../components/footer/index';
import { useElementOnscreen } from '../../components/hooks/useElementOnscreen';

const About = () => {
  const refObj = useRef<HTMLDivElement>(null);

  const refValue = useElementOnscreen(refObj, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  return (
    <main className="w-full">
      <section className="mt-5 md:h-[25%] flex justify-center items-center h-[13%]  ">
        <div
          className="flex justify-center flex-col p-2
        "
        >
          <article className="text-[30px] md:text-[40px] text-purple font-[500] leading-[40px] text-center mt-8 mb-3">
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
            <span className="text-black  text-[28px] font-[700] leading-[36px] ml-5">
              Who We Are
            </span>
          }
          text={
            <span className=" text-start">
              <h5 className="text-[15px] mt-2 ml-5 text-start">
                "FOY Global investment service limited is a multi-faceted
                service provider with a diversified portfolio in Forex trading,
                real estate, procurement, investments, and micro-lending. <br />
              </h5>
              <h5 className="text-[15px] mt-2 ml-5 text-start">
                It was established in 2015 with the mission to provide
                comprehensive financial solutions to meet the needs of
                individuals and businesses alike. <br />
              </h5>
              <h5 className="text-[15px] mt-2 ml-5 text-start">
                We seek to partner with small and medium-scale enterprises led
                by a strong result-driven management team that can grow into
                large dominant enterprises. <br />
              </h5>
              <h5 className="text-[15px] mt-2 ml-5 text-start">
                The company thrives on a strong business culture built on
                time-trusted principles such as integrity, excellent delivery,
                efficiency, professionalism, and growing together."
              </h5>
            </span>
          }
          img={`${abtImg}`}
        />
      </section>
      <section className="bg-purple w-full flex justify-center p-10">
        <div className="w-[90%] flex justify-center  p-5 items-center md:items-start">
          <div className="flex items-center justify-around w-full flex-col md:flex-row ">
            {/* our value */}
            <div className="text-white md:w-[335px] ">
              <h3>Our Value</h3>
              <span className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
            {/* img */}
            <div className="flex justify-around xl:w-[60%] text-white sm:w-[90%] flex-col md:flex-row mr-[20px] pr-[20px] mt-5">
              <div className="flex flex-col justify-center items-center mb-3">
                <img src={integretImg} alt="integrity" className="w-10" />
                <span>integrity</span>
              </div>
              <div className="flex flex-col justify-center items-center mb-3">
                <img src={exeImg} alt="execellent" className="w-10" />
                <span className="text-[12px]">Excellent Service Delivery</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={proImg} alt="profession" className="w-10" />
                <span>Professionalism</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full justify-center mt-5 flex md:mt-20   md:mb-5 ">
        <div className=" flex justify-center w-[80%] " ref={refObj}>
          {refValue && (
            <div className=" w-full  grid md:grid-cols-3 gap-6 sm:grid-cols-2">
              <div className="bg-grey md:w-[330px] w-[264px] rounded p-5 anmi">
                <img src={phlisoImg} alt="" />
                <h5 className="text-[30px] mt-4 mb-4 font-[700]">
                  Our Philosophy
                </h5>
                <span className="leading-[30px] text-[16px]">
                  Our company thrives on a strong business culture built on time
                  trusted principles such as integrity, excellent service
                  delivery, and professionalism. This positions us to constantly
                  harness opportunities in diverse sectors, promoting value
                  addition, wealth creation and preservation.
                </span>
              </div>

              <div className="bg-grey md:w-[330px] w-[264px] rounded p-5 anmi">
                <img src={vision} alt="" />
                <h5 className="text-[30px] mt-4 mb-4 font-[700]">Our Vision</h5>
                <span className="leading-[30px] text-[16px]">
                  To become a global brand that adds sustainable value to all
                  stakeholders.
                </span>
              </div>

              <div className="bg-grey md:w-[330px] md:h-[400px] w-[264px] rounded p-5 anmi">
                <img src={vision2} alt="" />
                <h5 className="text-[30px] mt-4 mb-4 font-[700]">
                  Our Mission
                </h5>
                <span className="leading-[30px] text-[16px]">
                  To constantly harness opportunities in diverse sectors while
                  promoting value addition, and sustainable wealth creation for
                  the satisfaction of all stakeholders through a dedicated
                  workforce.
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
