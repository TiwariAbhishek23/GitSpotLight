import React from 'react'
import Type from "./typewrite.js";


const HeroEffect = () => {
    return (
        <div className="container ">
            <div className="subheading text-center text-4xl m-4 p-4">
              Welcode <span className="wave">👋</span> to{" "}
              <span className="grade">GitSpotLight</span>
            </div>
            <div className="text-center text-4xl ">
              {" "}
              <div className="inline ">
                <Type />
              </div>{" "}
            </div>
            <style jsx>
          {`
            .wave {
              animation-name: wave-animation;
              animation-duration: 2.5s;
              animation-iteration-count: infinite;
              transform-origin: 70% 70%; 
              display: inline-block;
            }

            @keyframes wave-animation {
              0% {
                transform: rotate(0deg);
              }
              10% {
                transform: rotate(14deg);
              } /* The following five values can be played with to make the waving more or less extreme */
              20% {
                transform: rotate(-8deg);
              }
              30% {
                transform: rotate(14deg);
              }
              40% {
                transform: rotate(-4deg);
              }
              50% {
                transform: rotate(10deg);
              }
              60% {
                transform: rotate(0deg);
              } /* Reset for the last half to pause */
              100% {
                transform: rotate(0deg);
              }
            }
            .grade {
              font-weight: bold;

              background: linear-gradient(-90deg, #ee0979, #ff6a00, #fcfc8f);
              -webkit-background-clip: text;
              background-size: 200%;
              -webkit-text-fill-color: transparent;
              animation: grading 8s ease infinite;
            }
            @keyframes grading {
              from {
                -webkit-filter: hue-rotate(0);
                -moz-filter: hue-rotate(0);
                -ms-filter: hue-rotate(0);
                filter: hue-rotate(0);
              }
              to {
                -webkit-filter: hue-rotate(360deg);
                -moz-filter: hue-rotate(360deg);
                -ms-filter: hue-rotate(360deg);
                filter: hue-rotate(360deg);
              }
            }
          `}
        </style>
          </div>
    )
}
export default HeroEffect;
