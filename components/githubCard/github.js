import React from "react";
import OpenCard from "./openSourceCard";

const OpenSource = () => {
  return (
    <>
      <div className="open-source  p-4  mx-auto lg:mt-32">
        <div className="open-title lg:text-6xl text-3xl font-bold text-center">
          <span className="grade">I love to contribute</span>
        </div>

        <div className="contribution">
          <OpenCard />
        </div>
      </div>
    </>
  );
};
export default OpenSource;
