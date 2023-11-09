import React from "react";
import NavbarMenu from "./component/navbar/navbar";
import Header from "./component/Section/header";
import CarouselSection from "./component/Section/carousel";
import ProjectContent from "./component/Section/project";
import Skills from "./component/Section/skills";

export default function App() {
  return (
    <>
      <div className="w-full bg-[#272727]">
        <NavbarMenu />
        <div className="w-[100%] lg:mt-[94px] md:mt-[60px] mt-[30px] flex flex-1 flex-col">
          <div className="lg:pl-[150px] md:pl-[100px] pl-[5px]  lg:space-y-[63px] flex flex-col space-y-10">
            <Header />
            <CarouselSection />
            <ProjectContent />
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}
