import React from "react";
import Button from "../button";
import maskImg from "../../assets/Mask group.png";
import { JsxElement } from "typescript";

type InvestProps = {
  button?: JSX.Element;
  text: string | JSX.Element;
  img: string;
  title: string | JSX.Element;
  subTitle?: string;
  className?: string;
};

const Investment = ({ text, button, img, title, subTitle }: InvestProps) => {
  return (
    <section className="flex justify-center w-full md:m-3">
      <div className="flex w-full  md:w-[86%] md:justify-around  items-center md:flex-row-reverse  flex-col p-5">
        <div className="">
          <h3>{title}</h3>
          <h2 className="md:text-[30px] font-[800] text-black leading-[50px] text[23px]">
            {subTitle}
          </h2>
          <div className="md:w-[385px] w-[332px] leading-[24px] font-[500] text-[16px] ">
            {text}
          </div>

          {button}
        </div>
        <div className=" mt-5 mb-5">
          <img src={img} alt="" className="rounded-bl-[50px]" />
        </div>
      </div>
    </section>
  );
};

export default Investment;
