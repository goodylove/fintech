import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import FoyLogo from '../../assets/logoa 1.png';
import Button from '../button/index';
import { Fade as Hamburger } from 'hamburger-react';
import { Link, NavLink } from 'react-router-dom';

// React.FunctionComponent<CommonBurgerProps>
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(0);
  const [dropdown, setDropdown] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPage(scrollPosition);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex flex-col bg-white  h-[71px]  fixed   w-full justify-between items-center  left-0 z-10 ${
        scrollPage >= 24 ? 'top-0 opacity-[1]' : 'top-2 opacity-[0.8] '
      } `}
    >
      <div className="w-full flex justify-between items-center p-3">
        <div className="md:w-[20%] w-[35%]">
          <img src={FoyLogo} alt="log" className="text-purple" />
        </div>
        <div className=" hidden md:flex justify-around  w-[80%]">
          <ul className="flex justify-around font-[400] text-[18px] leading-[24px] w-[45%] items-center cursor-pointer">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="flex items-center justify-center relative">
              <NavLink to="/services">Service</NavLink>
              <span className="mt-[2px]">
                <MdOutlineKeyboardArrowDown
                  onMouseEnter={() => setDropdown(true)}
                />
              </span>
              <div
                className={`w-[185px] bg-white   text-purple h-auto absolute top-[20px] z-[-20] left-[0px] rounded-md shadow-md transition ${
                  dropdown ? 'visible' : 'hidden  '
                }`}
                onMouseLeave={() => setDropdown(false)}
              >
                <ul className="flex flex-col justify-center text-[16px] font-[700] pt-2 ">
                  <li className="pt-2 pb-1 pl-1">
                    <Link to="services/microlending">Microlending</Link>
                  </li>
                  <li className="pt-2 pb-1 pl-1">
                    <Link to="services/bdc">Bureau-de-change(BDC)</Link>
                  </li>
                  <li className="pt-1 pb-1 pl-1">
                    <Link to="services/investmentpage">Investments</Link>
                  </li>
                  <li className="pt-1 pb-1 pl-1">
                    <Link to="services/realestate"> Real Estate</Link>
                  </li>
                  <li className="pt-1 pb-1 pl-1">
                    <Link to="services/procurment">Procurement</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/faqpage">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <Button
            text="Apply now"
            className="bg-purple text-white w-[167px] h-[50px] rounded"
          />
        </div>
        <div className="md:hidden pr-6">
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
      </div>
      {/* mobile */}
      <div
        className={`  md:hidden ${
          toggleMenu ? 'is-open' : 'is-closed'
        } flex flex-col items-center w-[100%]  bg-white absolute] 
        `}
      >
        <ul className="flex flex-col  justify-between  font-[400] text-[18px] leading-[24px] w-[45%]  cursor-pointer">
          <li className="p-5">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="p-5">
            <NavLink to="/about"> About</NavLink>
          </li>
          <li className="flex items-center justify-center relative flex-col pr-[54px] sm:pr[28px] ">
            <div className="flex pr-[25px]">
              <NavLink to="/services">Service</NavLink>
              <span className="mt-[2px]">
                <MdOutlineKeyboardArrowDown
                  onMouseEnter={() => setDropdown(true)}
                />
              </span>
            </div>
            <div
              className={`w-[185px] bg-white   text-purple absolute  rounded-md shadow-md transition ${
                dropdown ? 'visible' : 'hidden  '
              }`}
              onMouseLeave={() => setDropdown(false)}
            >
              <ul className="flex flex-col justify-center text-[16px] font-[700] pt-2 ">
                <li className="pt-2 pb-1 pl-1 hover:p-0">
                  <Link to="services/microlending">Microlending</Link>
                </li>
                <li className="pt-2 pb-1 pl-1 hover:p-0">
                  <Link to="services/bdc">Bureau-de-change(BDC)</Link>
                </li>
                <li className="pt-1 pb-1 pl-1 hover:p-0">
                  <Link to="services/investmentpage">Investments</Link>
                </li>
                <li className="pt-1 pb-1 pl-1 hover:p-0">
                  <Link to="services/realestate"> Real Estate</Link>
                </li>
                <li className="pt-1 pb-1 pl-1 hover:p-0">
                  <Link to="services/procurment">Procurement</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-5">
            <NavLink to="/faqpage">FAQ</NavLink>
          </li>
          <li className="p-5">
            <NavLink to="/contact"> Contact</NavLink>
          </li>
          <li className="mb-2">
            <Button
              text="Apply now"
              className="bg-purple text-white w-[130px] h-[40px] rounded  "
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
