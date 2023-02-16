import React from "react";
import OpenCard from "./openSourceCard";

const OpenSource = () => {
  return (
    <>
    <div className="open-source  p-4  mx-auto lg:mt-32">
        <div className="open-title lg:text-6xl text-3xl font-bold text-center"><span className='grade' >I love to contribute</span></div>

      <div className="contribution">

        <OpenCard />
      </div>
      </div>
      <style jsx>
        {`
          .grade{
            font-weight: bold;
            background: -webkit-linear-gradient(-45deg, #2cadc1, #1bb08d, #264deb, #cc23d5);
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;       
        }      
        `}
      </style>
      </>
      
  );
};
export default OpenSource;