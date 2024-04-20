import React from "react";
import image1 from "../assets/Images/image1.jpg";
import logo15 from "../assets/Logos/logo15.png";

const Home = () => {
  return (
    <div className="relative flex ">
      <div className="w-[100%]  bg-fixed  overflow-y-hidden">
        <img src={image1} alt="img1" loading="lazy " className="w-full" />
      </div>
      <div className="absolute top-[70px] left-[420px]  z-[1]">
        <img src={logo15} alt="log15" loading="lazy" className="w-[600px]" />
      </div>
    </div>
  );
};

export default Home;
