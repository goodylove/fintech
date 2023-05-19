import React from 'react';

import { logoSvg, socialmediaIcons } from '../icons/svg';
import FoyLogo from '../../assets/logoa-white 1.png';
import LocationImg from '../../assets/location.png';
import callImg from '../../assets/call.png';
import messageImg from '../../assets/message.png';
const Footer = () => {
  return (
    <section className="bg-purple  md:w-[100%]  pb-5 pt-5 ">
      <div className="flex justify-center w-[100%] p-5 ">
        <div className="flex  md:flex-row  md:justify-evenly  w-full flex-col text-start text-[14px] text-white p-5">
          <div className="flex flex-col mt-3">
            <div className="text-white m-2">
              <img src={FoyLogo} alt="" />
            </div>
            <p className="w-[256px] h-[60px] text-start">
              FOY Global Investments Limited is an African high-scoring
              investment and consulting institution.
            </p>
          </div>
          <div className="flex flex-col md:w-[130px] w-[250px] mt-3">
            <h3 className="text-[16px] font-bold">Quicklinks</h3>
            <div className="flex flex-col">
              <span>About</span>
              <span>services</span>
              <span>FAQs</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="flex flex-col md:w-[133px] w-[250px] mt-3">
            <h3 className="text-[16px] font-bold">Services</h3>
            <div className="flex flex-col">
              <span>Microlending</span>
              <span>Bureau De Change</span>
              <span>Investments</span>
              <span>Real Estate</span>
              <span>Procurement</span>
            </div>
          </div>
          <div className="flex flex-col w-[255px] mt-3 ">
            <h3 className="text-[16px] font-bold">Contact</h3>
            <div className="flex flex-col">
              <span className="flex  items-center ">
                <img
                  src={LocationImg}
                  alt="icon"
                  className="p-[2px] w-[27px] h-[30px]"
                />
                19 Okotie Eboh close, Off Awolowo road, Ikoyi.
              </span>
              <a href="mailTo: info@foyglobalinvestments.com">
                <span className="flex mt-2 mb-2 items-center">
                  <img src={messageImg} alt="icon" className="p-[8px]" />
                  info@foyglobalinvestments.com
                </span>
              </a>
              <a href="tel:+2349116894070">
                <span className="flex items-center ">
                  <img src={callImg} alt="icon" className="p-[8px]" />
                  +2349116894070
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[75px] bg-white mt-5 flex justify-center p-[10px]">
        <div className="md:w-[80%] flex justify-between items-center md:flex-row  flex-col ">
          <div className="flex justify-evenly md:w-[15%] w-[37%]">
            <span>{socialmediaIcons.facebook()}</span>
            <span> {socialmediaIcons.instagram()}</span>
            <span> {socialmediaIcons.twitter()}</span>
            <span>{socialmediaIcons.linkedin()}</span>
          </div>
          <div>
            <span className="text-[13px]">
              © 2023 FOY Global Investments. All rights reserved
            </span>
          </div>
          <div>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
