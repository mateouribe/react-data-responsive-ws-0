import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTB", "BTC", "SASS"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 120,
      backSpeed: 120,
      backDelay: 300,
      loop: true,
      cursorChar: "|",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="text-white ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center  ">
        <p className="text-[#00DF9A] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center ">
          <p className="text-xl sm:text-4xl md:text-5xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <span
            className="text-gray-400 text-xl sm:text-4xl font-bold md:text-5xl pl-2 sm:pl-4"
            ref={el}
          ></span>
        </div>
        <p className="text-xl md:text-2xl font-semibold text-gray-400 px-4">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="bg-[#00DF9A] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
