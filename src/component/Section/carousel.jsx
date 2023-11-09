import React from "react";
import globe from "../../assets/Globe (1).svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import frontEnd from "../../assets/iconFrontEnd.png"
import backEnd from "../../assets/iconBackend.png"
import fullstack from "../../assets/iconFullstack.png"
import mobileDev from "../../assets/iconMobileDev.png"

function CarouselSection() {
    const smallScreen = window.innerWidth<= 640;
    const mediumScreen = window.innerHeight>= 640
    const largeScreen = window.innerHeight<=1280
  return (
    <div className="text-white lg:mr-[165px] md:mr-[130px] flex xl:flex-row lg:flex-col md:flex-col flex-col space-x-7 space-y-16 items-center">
      <div className="flex flex-col lg:w-[458px] lg:mr-[36px] md:mr-[20px] mr-[5px] lg:space-y-0 md:space-y-0 space-y-2">
        <div className="text-[#FBFBFB] lg-text-[28px]  md:text-[25px] text-[20px] font-sora lg:h-[72px] flex flex-col lg:items-start md:items-start items-center justify-center">
          What I do
        </div>
        <div className="font-inter text-[#EDCECE] lg:text-[18px] lg:text-start md:text-start text-center lg:w-[458px]">
        Building and maintaining websites, <span className="text-[#3BF686]">fullstack dev</span> also possess a high level of curiosity,My motto is always learning new things there's never a word <span className="text-[#62D9FF]"> too late</span>.
        </div>
      </div>
      <Carousel autoPlay interval={3000} showStatus={false} showThumbs={false} width={smallScreen? 245: mediumScreen? 500 : largeScreen? 600 : 700} dynamicHeight={false}>
        <div className="flex lg:flex-row md:flex-row flex-row lg:space-x-7 md:space-x-5 space-x-3 items-center justify-center">
          <div className="bg-[#323443] lg:w-[262px] md:w-[250px] w-[130px] lg:h-[190px] md:h-[250px] h-[300px] flex relative flex-col justify-center items-center lg:px-[19px] md:px-[15px] px-[5px] rounded-xl space-y-1">
            <div className="w-[72px] h-[72px] bg-[#323443] rounded-full flex items-center justify-center border-2 border-[#4CA9FF, #3BF686] text-center">
              <img src={globe} alt="globe" />
            </div>
            <div className="font-sora text-[16px] text-center lg:pt-0 md:pt-0 pt-6">Web Development</div>
            <div className="font-inter text-[14px] text-[#EFEDE8A6]">
            Creating and designing a website according to your needs and ensuring its compatibility across various devices.
            </div>
          </div>
          <div className="bg-[#323443] lg:w-[262px] md:w-[250px] w-[130px] lg:h-[190px] md:h-[250px] h-[300px] flex relative flex-col justify-center items-center lg:px-[19px] md:px-[15px] px-[5px] rounded-xl space-y-1">
            <div className="w-[72px] h-[72px] bg-[#323443] rounded-full flex items-center justify-center border-2 border-[#4CA9FF, #3BF686] text-center">
              <img src={frontEnd} alt="frontend" className="brightness-200" />
            </div>
            <div className="font-sora text-[16px] text-center lg:pt-0 md:pt-0 pt-6">Front End developer</div>
            <div className="font-inter text-[14px] text-[#EFEDE8A6]">
            Designing visuals and interfaces for websites or apps to meet specific needs,ensuring functionality on all devices.
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-row lg:space-x-7 md:space-x-5 space-x-3 items-center justify-center">
          <div className="bg-[#323443] lg:w-[262px] md:w-[250px] w-[130px] lg:h-[190px] md:h-[250px] h-[300px] flex relative flex-col justify-center items-center lg:px-[19px] md:px-[15px] px-[5px] rounded-xl space-y-1">
            <div className="w-[72px] h-[72px] bg-[#323443] rounded-full flex items-center justify-center border-2 border-[#4CA9FF, #3BF686] text-center">
              <img src={backEnd} alt="backend" className="brightness-200" />
            </div>
            <div className="font-sora text-[16px] text-center lg:pt-0 md:pt-0 pt-6">Back End developer</div>
            <div className="font-inter text-[14px] text-[#EFEDE8A6]">
            Designing & optimiz the web or app database and server-side for seamless functionality across devices.
            </div>
          </div>
          <div className="bg-[#323443] lg:w-[262px] md:w-[250px] w-[130px] lg:h-[190px] md:h-[250px] h-[300px] flex relative flex-col justify-center items-center lg:px-[19px] md:px-[15px] px-[5px] rounded-xl space-y-1">
            <div className="w-[72px] h-[72px] bg-[#323443] rounded-full flex items-center justify-center border-2 border-[#4CA9FF, #3BF686] text-center">
              <img src={fullstack} alt="fullstack" />
            </div>
            <div className="font-sora text-[16px] text-center lg:pt-0 md:pt-0 pt-6">Full Stack developer</div>
            <div className="font-inter text-[14px] text-[#EFEDE8A6]">
            Designing & optimiz the web or app backend & frontend for seamless functionality all devices
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-row lg:space-x-7 md:space-x-5 space-x-3 items-center justify-center">
          <div className="bg-[#323443] lg:w-[262px] md:w-[250px] w-[130px] lg:h-[190px] md:h-[250px] h-[300px] flex relative flex-col justify-center items-center lg:px-[19px] md:px-[15px] px-[5px] rounded-xl space-y-1">
            <div className="w-[72px] h-[72px] bg-[#323443] rounded-full flex items-center justify-center border-2 border-[#4CA9FF, #3BF686] text-center">
              <img src={mobileDev} alt="mobileDev" className="brightness-200" />
            </div>
            <div className="font-sora text-[16px] text-center lg:pt-0 md:pt-0 pt-6">Mobile Developer</div>
            <div className="font-inter text-[14px] text-[#EFEDE8A6]">
            Designing and implementing efficient mobile applications for a seamless user experience on various devices.
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselSection
