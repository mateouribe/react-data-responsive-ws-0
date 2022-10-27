import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240] mx-auto grid md:grid-cols-2">
        <img
          src={Laptop}
          alt="Laptop"
          className="w-[500px] mx-auto md:my-4 my-10"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00DF9A] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nobis omnis facilis accusantium aspernatur itaque provident nam et
            nostrum quo quam illo.
          </p>
          <button className="bg-black w-[200px] rounded-md mx-auto md:mx-0 font-medium my-6 py-3 text-[#00DF9A] ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
