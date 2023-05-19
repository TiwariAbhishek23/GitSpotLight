import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../assets/githubshine.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch("./api/user")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <hr />
      <div className="footer-links block lg:p-2 p-1">
        <div className="foot-img inline-block">
          {" "}
          <Link href="/">
            <Image
              src={Logo}
              alt="name"
              className="abhiLogo w-11 lg:w-auto"
              height="70"
            />
          </Link>
        </div>

        <div className="tagline inline-block float-right text-xs lg:text-base">
          Made with <big>❤️</big> by Abhishek Tiwari
        </div>
      </div>
    </>
  );
};
export default Footer;
