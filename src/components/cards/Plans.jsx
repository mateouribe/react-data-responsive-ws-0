import React from "react";
import Card from "./Card";
import singleImg from "../../assets/single.png";
import doubleImg from "../../assets/double.png";
import tripleImg from "../../assets/triple.png";

function Plans() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          img={singleImg}
          title="Single User"
          price="$149"
          charact1="500 GB Storage"
          charact2="1 Granted User"
          charact3="Send up to 2 GB"
        />
        <Card
          img={doubleImg}
          title="Double User"
          price="$200"
          charact1="1000 GB Storage"
          charact2="2 Granted User"
          charact3="Send up to 4 GB"
          backgroundColor="black"
          color="#00DF9A"
        />
        <Card
          img={tripleImg}
          title="Triple User"
          price="$200"
          charact1="1000 GB Storage"
          charact2="2 Granted User"
          charact3="Send up to 4 GB"
        />
      </div>
    </div>
  );
}

export default Plans;
