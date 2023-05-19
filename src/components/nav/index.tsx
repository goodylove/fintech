import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FoyLogo from "../../assets/logoa 1.png";
import Button from "../button/index";
import { Fade as Hamburger } from "hamburger-react";

// React.FunctionComponent<CommonBurgerProps>
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex bg-white p-3 absolute top-4 w-full justify-between items-center opacity-[0.8] left-0">
      <div className="md:w-[20%] w-[35%]">
        <img src={FoyLogo} alt="log" className="text-purple" />
      </div>
      <div className=" hidden md:flex justify-around  w-[80%]">
        <ul className="flex justify-around font-[400] text-[18px] leading-[24px] w-[45%] items-center cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li className="flex items-center">
            Service <MdOutlineKeyboardArrowDown />
          </li>
          <li>FAQ</li>
          <li>contact</li>
        </ul>
        <Button
          text="Apply now"
          className="bg-purple text-white w-[181px] h-[50px] rounded"
        />
      </div>
      <div className="md:hidden pr-3">
        <Hamburger
          onToggle={(toggleMenu: boolean) => {
            if (toggleMenu) {
              setToggleMenu(true);
            } else {
              setToggleMenu(false);
            }
          }}
        />
      </div>
      {/* mobile */}
      <div
        className={`flex flex-col   items-center   w-[50%] fixed right-0  h-[100vh] bg-white top-20 opacity-[1]  ${
          toggleMenu ? "is-open" : "is-closed"
        }`}
      >
        <ul className="flex flex-col  justify-between  font-[400] text-[18px] leading-[24px] w-[45%]  cursor-pointer">
          <li className="p-5">
            <a href=""> Home</a>
          </li>
          <li className="p-5">
            <a href="/about"> About</a>
          </li>
          <li className="flex items-center p-5">
            <a href=""> Service</a> <MdOutlineKeyboardArrowDown />
          </li>
          <li className="p-5">
            <a href="/faq">FAQ</a>
          </li>
          <li className="p-5">
            <a href="/service"> Contact</a>
          </li>
          <li>
            <Button
              text="Apply now"
              className="bg-purple text-white w-[140px] h-[50px] rounded"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
