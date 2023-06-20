import React, { useRef } from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';
import { servicesSvg } from '../icons/svg';
import { Link } from 'react-router-dom';

type ServiceProps = {
  title: string;
  details: string;
  link: string;
};
const ServiceCard = ({ title, details, link }: ServiceProps) => {
  return (
    <div className="flex justify-center w-[283px] md:w-[337px] p-6  shadow-lg rounded-md">
      <div className="anmi">
        {servicesSvg.service()}
        <h3 className="text-purple font-[800] text-[24px]">{title}</h3>
        <p>{details}</p>
        <span className="flex items-center text-purple text-[20px] ">
          <Link to={link} className="flex items-center">
            <span className="pr-2 text-[15px]">ReadMore</span>
            <MdOutlineArrowForward />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
