import React from "react";
import logo1 from "../assets/Logos/logo1.png";
import logo2 from "../assets/Logos/logo2.png";
import logo3 from "../assets/Logos/logo3.png";
import image3 from "../assets/Images/image3.jpg";
import image4 from "../assets/Images/image4.jpg";
import image5 from "../assets/Images/image5.jpg";
import image6 from "../assets/Images/image6.jpg";
import logo17 from "../assets/Logos/logo17.jpg";
import logo23 from "../assets/Logos/logo23.png";
import logo24 from "../assets/Logos/logo24.png";

const History = () => {
  return (
    <div>
      <div className=" relative">
        <img
          src={image3}
          alt="image3"
          loading="lazy"
          className=" w-[1490px] left-2"
        />
      </div>
      <img
        src={logo1}
        alt="logo1"
        loading="lazy"
        className=" absolute top-[100px] left-[250px]"
      />
      <img
        src={logo3}
        alt="logo3"
        loading="lazy"
        className=" absolute top-[160px] left-[370px]"
      />
      <img
        src={logo2}
        alt="logo2"
        loading="lazy"
        className=" absolute top-[230px] left-[320px]"
      />

      <div className="relative">
        <img
          src={image6}
          alt="image3"
          loading="lazy"
          className=" absolute h-[240px] w-[1480px]  opacity-75 "
        />
        <img
          src={image4}
          alt="image3"
          loading="lazy"
          className=" absolute top-[40px] left-[250px]"
        />
        <img
          src={image5}
          alt="image3"
          loading="lazy"
          className=" absolute top-[40px]  left-[510px]"
        />
        <img
          src={image4}
          alt="image3"
          loading="lazy"
          className=" absolute  top-[40px] right-[450px]"
        />
        <img
          src={image5}
          alt="image3"
          loading="lazy"
          className=" absolute  top-[40px] right-[190px]"
        />
      </div>

      <div className="relative top-[20px]">
        <img
          src={logo23}
          alt="image3"
          loading="lazy"
          className=" absolute top-[200px] left-[750px] "
        />
        <img
          src={logo24}
          alt="image3"
          loading="lazy"
          className=" absolute top-[200px] left-[760px] "
        />
        <img
          src={logo24}
          alt="image3"
          loading="lazy"
          className=" absolute top-[200px] left-[770px] "
        />
      </div>
    </div>
  );
};

export default History;
