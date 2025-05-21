import React from "react";
import FeatureCard from "./FeatureCard.jsx";
import featureIcon from "../assets/featureIcon.gif";

const KeyFeatures = () => {
  return (
    <div className="top-0 left-0 z-[-2] h-[45rem] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex justify-center">
      <div className="w-[90%] h-[80%] bg-slate-900 rounded-3xl px-10">
        <div className="text-white text-4xl font-semibold py-8 font-lansui flex justify-center gap-4">
          Key Features
          <img className="w-12" src={featureIcon} />
        </div>
        <div className="flex gap-14">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
