import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Engineer", ".Net Full Stack Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
