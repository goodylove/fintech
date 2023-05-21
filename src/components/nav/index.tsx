import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FoyLogo from "../../assets/logoa 1.png";
import Button from "../button/index";
import { Fade as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

// React.FunctionComponent<CommonBurgerProps>
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex bg-white p-3 absolute top-4 w-full justify-between items-center opacity-[0.8] left-0 z-10">
      <div className="md:w-[20%] w-[35%]">
        <img src={FoyLogo} alt="log" className="text-purple" />
      </div>
      <div className=" hidden md:flex justify-around  w-[80%]">
        <ul className="flex justify-around font-[400] text-[18px] leading-[24px] w-[45%] items-center cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li className="flex items-center">
            <Link to="/service" className="flex items-center">
              Service <MdOutlineKeyboardArrowDown />
            </Link>
          </li>
          <li>
            <Link to="/faqpage">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <Button
          text="Apply now"
          className="bg-purple text-white w-[167px] h-[50px] rounded"
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
            <Link to="/"> Home</Link>
          </li>
          <li className="p-5">
            <Link to="/about"> About</Link>
          </li>
          <li className="flex items-center p-5">
            <Link to="/service"> Service</Link> <MdOutlineKeyboardArrowDown />
          </li>
          <li className="p-5">
            <Link to="/faqpage">FAQ</Link>
          </li>
          <li className="p-5">
            <Link to="/contact"> Contact</Link>
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
