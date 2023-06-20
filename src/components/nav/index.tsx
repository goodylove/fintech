import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import FoyLogo from '../../assets/logoa 1.png';
import Button from '../button/index';
import { Fade as Hamburger } from 'hamburger-react';
import { Link, NavLink } from 'react-router-dom';
import Hambuger from '../Hambuger/index';

// React.FunctionComponent<CommonBurgerProps>
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollPage, setScrollPage] = useState(0);
  const [dropdown, setDropdown] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

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
    <>
      <nav
        className={`flex  bg-white  h-[71px]  fixed  md:flex-row   w-full justify-between items-center  left-0 z-10 ${
          scrollPage >= 24 ? 'top-0 opacity-[1]' : 'top-2 opacity-[0.8] '
        } `}
      >
        <div className="md:w-[20%] w-[35%] pl-4">
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
              <span className="md:mt-[3px]">
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
        <div className="md:hidden pr-6" onClick={handleToggleMenu}>
          <Hambuger isOpen={toggleMenu} />
        </div>
        {/* mobile */}
      </nav>
      <div
        className={`  md:hidden ${
          toggleMenu ? 'is-open' : 'is-closed'
        } flex flex-col items-start   pl-3 w-[57%]  left-0 bg-white  fixed h-[100vh] z-[100] top-[70px] 
        `}
      >
        <ul className="flex flex-col  justify-between  font-[400] text-[18px] leading-[24px] w-[45%]  cursor-pointer">
          <li className="p-5" onClick={handleToggleMenu}>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="p-5" onClick={handleToggleMenu}>
            <NavLink to="/about"> About</NavLink>
          </li>
          <li
            className="flex items-center justify-center relative flex-col  sm:pr[28px] pl-7 
           pb-5 pt-5 "
          >
            <div className="flex pr-[25px]">
              <NavLink to="/services">Service</NavLink>
              <span className="mt-[4px] w-0">
                <MdOutlineKeyboardArrowDown
                  onClick={() => setDropdown((prev) => !prev)}
                />
              </span>
            </div>
            <div
              className={`w-[185px] bg-white   text-purple ml-20  rounded-md shadow-md transition ${
                dropdown ? 'visible' : 'hidden  '
              } ${toggleMenu ? '' : 'hidden'}`}
            >
              <ul className="flex flex-col justify-center text-[16px] font-[700] pt-2 ">
                <li
                  className="pt-2 pb-1 pl-1 hover:p-0"
                  onClick={handleToggleMenu}
                >
                  <Link to="services/microlending">Microlending</Link>
                </li>
                <li
                  className="pt-2 pb-1 pl-1 hover:p-0"
                  onClick={handleToggleMenu}
                >
                  <Link to="services/bdc">Bureau-de-change(BDC)</Link>
                </li>
                <li
                  className="pt-1 pb-1 pl-1 hover:p-0"
                  onClick={handleToggleMenu}
                >
                  <Link to="services/investmentpage">Investments</Link>
                </li>
                <li
                  className="pt-1 pb-1 pl-1 hover:p-0 "
                  onClick={handleToggleMenu}
                >
                  <Link to="services/realestate"> Real Estate</Link>
                </li>
                <li
                  className="pt-1 pb-1 pl-1 hover:p-0"
                  onClick={handleToggleMenu}
                >
                  <Link to="services/procurment">Procurement</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="p-5" onClick={handleToggleMenu}>
            <NavLink to="/faqpage">FAQ</NavLink>
          </li>
          <li className="p-5" onClick={handleToggleMenu}>
            <NavLink to="/contact"> Contact</NavLink>
          </li>
          <li className="mb-2" onClick={handleToggleMenu}>
            <Button
              text="Apply now"
              className="bg-purple text-white w-[130px] h-[40px] rounded  "
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
