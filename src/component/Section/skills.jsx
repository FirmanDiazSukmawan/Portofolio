import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import skillImage from "../dummyData/skillsData";
import { debounce } from "lodash";

function Skills() {
  const skillsAnimation = useAnimation();
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScrollThrottled = debounce(() => {
      const scrollPosition = window.scrollY;
      const elementPosition = skillsRef.current.offsetTop;
      const windowHeight = window.innerHeight;
  
      if (scrollPosition > elementPosition - windowHeight * 0.9) {
        skillsAnimation.start((i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1, duration: 1 },
        }));
      }
    }, 200);
  
    window.addEventListener("scroll", handleScrollThrottled);
    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, [skillsAnimation]);

  return (
    <div className="lg:mr-[149px] md:mr-[130px] mr-0 flex flex-col space-y-8" id="skills" ref={skillsRef}>
      <div className="text-white font-sora text-5xl ">MySkills</div>
      <div className="flex flex-row flex-wrap justify-center">
        {Object?.keys(skillImage)?.map((index) => (
          <motion.div
            className="lg:w-[175px] md:w-[130px] w-[75px] lg:h-[125px] md:h-[125px] h-[75px]  rounded-[20px] flex flex-row space-y-1 justify-between mx-4 my-2"
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={skillsAnimation}
          >
            <img
              src={skillImage[index].image}
              alt="html"
              className="w-full h-full object-contain brightness-100"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
