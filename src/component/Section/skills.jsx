import React from "react";
import skillImage from "../dummyData/skillsData";

function Skills() {
  // console.log(skillImage)
  return (
    <div className="lg:mr-[149px] md:mr-[130px] mr-0 flex flex-col space-y-8" id="skills">
      <div className="text-white font-sora text-5xl ">MySkills</div>
      <div className="flex flex-row flex-wrap justify-center">
        {Object?.keys(skillImage)?.map((index)=>(
        <div className="lg:w-[175px] md:w-[130px] w-[75px] lg:h-[125px] md:h-[125px] h-[75px]  rounded-[20px] flex flex-row space-y-1 justify-between mx-4 my-2" key={index}>
              <img src={skillImage[index].image} alt="html" className="w-full h-full object-fill brightness-100"/>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
