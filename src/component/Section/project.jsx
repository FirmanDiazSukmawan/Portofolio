import React from "react";
import MobilePicture from "../../assets/MobileRecipe.png";
import MyRecipeWeb from "../../assets/myRecipeWeb.png";
import New from "../../assets/New.svg";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";

function ProjectContent() {
  return (
    <div className=" lg:mr-[91px]">
      <div className="flex flex-col space-y-9 md:w-full lg:items-start md:items-start items-center">
        <div className="font-sora lg:text-[48px] md:text-[35px] text-[24px] text-white">
          Featured Project
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col sm:items-center space-y-2 w-full">
          <div className="lg:w-[556px] lg:h-[282px] md:w-[450px] md:h-[200px]  relative flex flex-col justify-end items-center bg-[#323443] space-y-3 rounded-md">
            <button className="w-9 h-9 bg-[#3F4152] absolute right-0 top-0 rounded-lg flex items-center justify-center">
            <i className="bi bi-box-arrow-in-up-right  text-xl text-[#EBEBEB]"></i>
            </button>
            <img src={New} alt="new" className="absolute top-0 left-12" />
            <div className="flex flex-row space-x-2 w-[80%]">
              <div className="flex bg-[#FBFBFB] w-3 rounded-sm">
                <img src={tailwind} alt="tailwind" />
              </div>
              <div className="flex bg-[#FBFBFB] w-3 rounded-sm">
                <img src={react} alt="tailwind" />
              </div>
            </div>
            <img src={MyRecipeWeb} alt="porto" className="w-[80%] h-[75%]" />
          </div>
          <div className="flex-col flex justify-center ml-7 lg:space-y-6 md:space-y-6 space-y-3 lg:items-start md:items-start items-center">
            <div className="textInterBold text-[#DEDEDE] text-lg"> Web Development</div>
            <div className="text-[#fff] font-sora lg:text-5xl md:text-2xl">Bolder Landing Page</div>
            <div className="text-[#D4D4D4] font-inter lg:text-lg md:text-base lg:w-[556px]">
              Serrow restructured and designed core pages, creating interactive
              elements that put users in control and allowed them to discover
              the information needed to make a decision.
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col sm:items-center space-y-2 w-full">
          <div className="lg:w-[556px] lg:h-[282px] md:w-[450px] md:h-[200px]  relative flex flex-col justify-end items-center bg-[#323443] space-y-3 rounded-md">
            <button className="w-9 h-9 bg-[#3F4152] absolute right-0 top-0 rounded-lg flex items-center justify-center">
            <i className="bi bi-box-arrow-in-up-right  text-xl text-[#EBEBEB]"></i>
            </button>
            <img src={New} alt="new" className="absolute top-0 left-12" />
            <div className="flex flex-row space-x-2 w-[80%]">
              <div className="flex bg-[#FBFBFB] w-3 rounded-sm">
                <img src={tailwind} alt="tailwind" />
              </div>
              <div className="flex bg-[#FBFBFB] w-3 rounded-sm">
                <img src={react} alt="tailwind" />
              </div>
            </div>
            <img src={MyRecipeWeb} alt="porto" className="w-[80%] h-[75%]" />
          </div>
          <div className="flex-col flex justify-center ml-7 lg:space-y-6 md:space-y-6 space-y-3 lg:items-start md:items-start items-center">
            <div className="textInterBold text-[#DEDEDE] text-lg"> Web Development</div>
            <div className="text-[#fff] font-sora lg:text-5xl md:text-2xl">Bolder Landing Page</div>
            <div className="text-[#D4D4D4] font-inter lg:text-lg md:text-base lg:w-[556px]">
              Serrow restructured and designed core pages, creating interactive
              elements that put users in control and allowed them to discover
              the information needed to make a decision.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
