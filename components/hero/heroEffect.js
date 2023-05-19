import React from 'react'
import Type from "./typewrite.js";

const HeroEffect = () => {
    return (
        <div className="container ">
            <div className="subheading text-center text-4xl m-4 p-4">
              Welcode <span className=" wave ">👋</span> to{" "}
              <span className="grade">GitSpotLight</span>
            </div>
            <div className="text-center text-4xl ">
              {" "}
              <div className="inline ">
                <Type />
              </div>{" "}
            </div>
          </div>
    )
}
export default HeroEffect;
