import React, { useEffect, useState } from "react";
import NavbarMenu from "./component/navbar/navbar";
import Header from "./component/Section/header";
import CarouselSection from "./component/Section/carousel";
import ProjectContent from "./component/Section/project";
import Skills from "./component/Section/skills";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingCat from "./assets/loading/loading.json";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex w-screen h-screen justify-center items-center bg-[#272727]">
          <Player
            autoplay
            loop
            src={loadingCat}
            className="lg:w-[300px] md:w-[250px] w-[150px] lg:h-[300px] md:h-[250px] h-[150px]"
          ></Player>
        </div>
      ) : (
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
      )}
    </>
  );
}
