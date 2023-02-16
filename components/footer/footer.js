import React from "react";
import { useState,useEffect } from "react";
import Logo from "../../assets/githubshine.svg";
import Github from "../../assets/githubshine.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Image from "next/image";
import Link from 'next/link'
import Twitter from "../../assets/twitter.svg";
const Footer = () => {
  const [profile,setProfile] = useState({});
  useEffect(() => {
    fetch('./api/user')
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      })
      .catch(error => console.error(error));
  }, []); 
  
    return (
        <>
        <hr/>
        <div className="footer-links block lg:p-2 p-1">
       <div className="foot-img inline-block"> <Link href="/">
          <Image src={Logo} alt="name" className="abhiLogo w-11 lg:w-auto" height="70"/>
        </Link></div>
         
        <div className="tagline inline-block float-right text-xs lg:text-base">Made with <big>❤️</big> by Abhishek Tiwari</div>
      <div className="s ml-96 -mt-20">
        <ul className="socials hidden lg:inline-block">
            
         <li className="foot-link inline-block"> <Link href="/" target= "_blank">
            <Image src={Github} alt="Github"  height="45"/>
          </Link></li>
      <li className="foot-link inline-block ">    <Link href="/" target= "_blank">
            <Image src={LinkedIn} alt="LinkedIn" />
          </Link></li>
      <li className="foot-link inline-block">    <Link href="/" target= "_blank">
            <Image src={Twitter} alt="Twitter" />
         </Link></li>
        </ul>
        </div>
      </div>
      <style jsx>
        {`
          foot-link:hover{
            transform: scale(1.09);
        }    
        `}
      </style>
      </>
    )
}
export default Footer;