import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function Card({
  img,
  title,
  price,
  charact1,
  charact2,
  charact3,
  backgroundColor = "#00DF9A",
  color = "black",
}) {
  console.log(backgroundColor);
  const styles = {
    backgroundColor,
    color,
  };
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-10 md:my-4 rounded-lg hover:scale-105 duration-300">
      <img src={img} alt="Single Plan" className="w-20 mx-auto mt-[-3rem] " />
      <h2 className="text-2xl font-bold text-center py-8">{title}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">{charact1}</p>
        <p className="py-2 border-b mx-8">{charact2}</p>
        <p className="py-2 border-b mx-8">{charact3}</p>
      </div>
      <button
        style={styles}
        className="w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black "
      >
        Start Trial
      </button>
    </div>
  );
}

export default Card;
