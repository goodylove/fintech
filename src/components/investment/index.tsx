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

const Investment = ({
  text,
  button,
  img,
  title,
  subTitle,
  className,
}: InvestProps) => {
  return (
    <section className="flex justify-center w-full md:m-10">
      <div className="flex w-full  md:w-[90%] md:justify-between  items-center md:flex-row-reverse  flex-col">
        <div className=" w-[70%] md:p-3">
          <h3>{title}</h3>
          <h2 className="md:text-[30px] font-[800] text-black leading-[50px] text[23px]">
            {subTitle}
          </h2>
          <p className="md:w-[385px] leading-[24px] font-[500] text-[16px] w-[242px]">
            {text}
          </p>

          {button}
        </div>
        <div className="40%">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Investment;
