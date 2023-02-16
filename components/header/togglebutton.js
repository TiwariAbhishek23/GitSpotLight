import Image from "next/image";
import useDarkMode from "./dark";
import React, { createContext, useContext, useEffect } from "react";
// import Bulb from "../../assets/socials/gear.svg";
// import moon from "../../assets/socials/moon.svg";
import { useState } from "react";

export default function Home() {
  // Get the initial value of the colorTheme state variable from localStorage
  let initialTheme;
  if (typeof localStorage !== "undefined") {
    initialTheme = localStorage.getItem("colorTheme") || "light";
  } else {
    initialTheme = "light";
  }
  const [colorTheme, setTheme] = useDarkMode(initialTheme);
  // Use the useEffect hook to update the localStorage value when the colorTheme state variable changes
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
          const colorScheme = window.matchMedia('(preference-color-scheme:dark').matches ?'dark' : 'light';
          const storagetheme = window.localStorage.getItem('theme');
          setTheme(storagetheme || colorScheme)
      }
    } catch (error) {
      // handle the error
      alert(error)
    }
  }, [colorTheme]);

  return (
    <div className=" inline-block cursor-pointer ">
      {/* {colorTheme === "light" ? (
        <Image
          src={Bulb}
          alt="bulb"
          className="bg-black p-1 rounded"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Image
          src={moon}
          alt="moon"
          className="bg-goldenyellow p-1 rounded"
          onClick={() => setTheme("dark")}
        />
      )} */}
    </div>
  );
}