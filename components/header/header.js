import React, { useContext, useEffect, useState } from "react";
import ToggleButton from "./togglebutton";
import useDarkMode from "./dark";
import Logo from "../../assets/githubshine.svg";

import Image from "next/image";
import Link from "next/link";
import HeaderBox from './headerbox.js'
const Header = () => {
  const theme = useDarkMode();
  return (


    <>
    <div className="header border  rounded-4xl border-myblue border-solid w-80 lg:w-8/12 px-3.5 py-4 mx-auto text-white " >
      <div className="name-logo inline-block  ">
        <Link href="/" className="logo">
            <Image src={Logo} alt="logo" className="abhiLogo inline w-24 lg:w-auto" height="70" />
            <div className="name inline m-2 text-2xl">GitSpotLight</div>
        </Link>
      </div>
        <div className="menu-item lg:inline-block float-right hidden lg:m-4 ">
          <ul className="kk inline  lg:mt-6">
            <li className="inline lg:m-4 lg:p-1.5 cursor-pointer  hover:border hover:border-solid hover:border-myblue hover:rounded-4xl hover:duration-1000 hover:text-myblue">
              <Link href="/">Home</Link>
            </li>
            <li className="inline lg:m-4 lg:p-1.5 cursor-pointer hover:border hover:border-solid hover:border-myblue hover:rounded-4xl hover:duration-1000 hover:text-myblue">
              <Link href="/compare">Compare</Link>
            </li>
            <li className="inline lg:m-4 lg:p-1.5 cursor-pointer hover:border hover:border-solid hover:border-myblue hover:rounded-4xl hover:duration-1000 hover:text-myblue">
              <Link href="/contactme">Contact Me</Link>
            </li>
            <li className="aat  float-right inline m-0 p-0 cursor-pointer" >
              <ToggleButton className="inline bg-pink" />
            </li>
          </ul>
      </div>
      <div
          className="hamburger-open lg:hidden inline float-right"
        >
          <ToggleButton className="inline bg-pink" />
        </div>
      </div>
      
      </>
  );
};

export default Header;
