import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter 
      options={{
        strings : [" Get You Github Stats", "Compare Stats with Friends", "Share Your Stats", "Be HAPPY"],
        autoStart:true,
        loop:true,
        pauseFor : 1200,
        cursor:'_',
        deleteSpeed:100,
      }}
    />
  );
}

export default Type;