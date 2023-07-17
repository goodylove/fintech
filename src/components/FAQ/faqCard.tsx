import { useState } from 'react';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

type FaqProps = {
  answer: string;
  question: string;
  onToggle: number;
  id: number;
  onHandleToggle: (num: number) => void;
};

const FaqCard = ({
  answer,
  question,
  onToggle,
  onHandleToggle,
  id,
}: FaqProps) => {
  const isOpen = id === onToggle;

  const handleToggle = () => {
    let num = isOpen ? 0 : id;
    onHandleToggle(num);
  };
  return (
    <div className="md:m-[30px] m-[10px]">
      <div
        className={`md:p-7  rounded-[14px]  shadow-lg m-5 p-3 ${
          isOpen ? 'border-purple border-2' : 'border-none'
        }`}
      >
        <span className="flex justify-between items-center">
          <span className="md:text-[22px] font-[800] leading-[22px] text-black text-[16px]">
            {question}
          </span>
          <span
            onClick={handleToggle}
            className={`text-[60px] rounded-full h-[50px] w-[50px] flex justify-center items-center shadow-md p-3 ${
              isOpen ? 'bg-purple text-white' : 'bg-white text-purple'
            } `}
          >
            {isOpen ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowRight />
            )}
          </span>
        </span>
        <div className={`${isOpen ? 'visible' : 'hidden'}`}>
          <p className="text-[14px] md:w-[636px] w-full">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
