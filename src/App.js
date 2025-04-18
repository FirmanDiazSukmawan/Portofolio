import React, { useEffect, useState } from "react";
import NavbarMenu from "./component/navbar/navbar";
import Header from "./component/Section/header";
import CarouselSection from "./component/Section/carousel";
import ProjectContent from "./component/Section/project";
import Skills from "./component/Section/skills";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingCat from "./assets/loading/loading.json";
import { useAnimation, motion } from "framer-motion";
import { debounce, throttle } from "lodash";
import Experience from "./component/Section/experience";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const headerAnimation = useAnimation();
  const projectContentAnimation = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const delayedStartAnimation = debounce(() => {
      if (!loading) {
        headerAnimation.start({
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
        });
      }
    }, 200);

    delayedStartAnimation();

    window.addEventListener("scroll", delayedStartAnimation);

    return () => {
      window.removeEventListener("scroll", delayedStartAnimation);
      delayedStartAnimation.cancel();
    };
  }, [loading, headerAnimation]);

  useEffect(() => {
    const throttledHandleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.1) {
        projectContentAnimation.start({
          opacity: 1,
          x: 0,
          transition: { duration: 1 },
        });
      }
    }, 200);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      throttledHandleScroll.cancel();
    };
  }, [projectContentAnimation]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);

  return (
    <div className="w-full">
      <Analytics />
      {loading ? (
        <div className="flex w-screen h-screen justify-center items-center bg-[#272727]">
          <Player
            autoplay
            loop
            src={loadingCat}
            className="lg:w-[300px] md:w-[250px] w-[150px] lg:h-[280px] md:h-[250px] h-[110px]"
          ></Player>
        </div>
      ) : (
        <div className="w-full bg-[#272727]">
          <NavbarMenu />
          <div className="w-[100%] lg:mt-[94px] md:mt-[60px] mt-[30px] flex flex-1 flex-col pb-5">
            <div className="lg:pl-[150px] md:pl-[100px] pl-[5px]  lg:space-y-[63px] flex flex-col space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={headerAnimation}
              >
                <Header />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={headerAnimation}
              >
                <CarouselSection />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={headerAnimation}
              >
                <Experience />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={projectContentAnimation}
              >
                <ProjectContent />
              </motion.div>
              <Skills />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
