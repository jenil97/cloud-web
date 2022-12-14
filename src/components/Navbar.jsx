import React, { useState } from "react";
import logo from "../assests/cloud-icon.png";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll as scroll, } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center ml-2">
          <img
            width={80}
            src={logo}
            alt="logo"
            className="text-3xl font-bold mr-4 sm:text-4xl"
          ></img>
          <ul className="hidden md:flex cursor-default">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li><Link to="pricing" smooth={true} offset={-100} duration={500}>Pricing</Link></li>
          <li><Link to="footer" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Log In
          </button>
          <button className="px-8 py-3 hover:bg-blue-600 hover:text-white">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-5" /> : <XMarkIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 text-center"}>
      <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-100} duration={500}>Pricing</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="footer" smooth={true} offset={-50} duration={500}>Contact</Link></li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-black px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
