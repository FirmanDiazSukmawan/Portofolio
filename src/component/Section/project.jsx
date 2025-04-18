import React, { useState } from "react";
import New from "../../assets/New.svg";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import pageData from "../dummyData/pageProjectData";
import {
  Pagination,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

function ProjectContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(
    Object?.keys(pageData)?.length / projectsPerPage
  );

  const [showFullscreen, setShowFullscreen] = useState({});

const handleImageClick = (num) => {
  setShowFullscreen((prev) => ({
    ...prev,
    [num]: true,
  }));
};

const handleImageCloseFullScreen = (num) => {
  setShowFullscreen((prev) => ({
    ...prev,
    [num]: false,
  }));
};




  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const project = Object?.values(pageData)?.slice(startIndex, endIndex);

  return (
    <div className=" lg:mr-[91px]" id="portofolio">
      <div className="flex flex-col space-y-9 md:w-full lg:items-start md:items-start items-center">
        <div className="font-sora lg:text-[48px] md:text-[35px] text-[24px] text-white">
          My Project
        </div>
        {project?.map((item, index) => (
          <div
            className="flex lg:flex-row md:flex-row flex-col sm:items-center space-y-2 w-full"
            key={index}
          >
            <div className="lg:w-[556px] lg:h-[282px] md:w-[556px] md:h-[227px] w-[100%] h-[300px]  relative flex flex-col justify-end items-center bg-[#323443] space-y-3 rounded-md">
              <button className="w-9 h-9 bg-[#3F4152] absolute right-0 top-0 rounded-lg flex items-center justify-center">
                <Popover placement="left" showArrow={true}>
                  <PopoverTrigger>
                    <i className="bi bi-box-arrow-in-up-right  text-xl text-[#EBEBEB]"></i>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2 flex flex-col space-y-2">
                      <a href={item.github} className="text-base">
                        Link Github
                      </a>
                      <a href={item.link} className="text-base">
                        Demo WEB/APK
                      </a>
                    </div>
                  </PopoverContent>
                </Popover>
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
              <img
                src={item.image}
                alt="porto"
                className="w-[80%] h-[70%] object-contain"
                onClick={()=>handleImageClick(index)}
              />
             {showFullscreen[index] && (
                <img
                src={item.image}
                alt="porto"
                className="w-[100%] h-[100%] object-contain absolute"
                onClick={()=>handleImageCloseFullScreen(index)}
              />
              )}
            </div>
            <div className="flex-col flex justify-center ml-7 lg:space-y-6 md:space-y-6 space-y-3 lg:items-start md:items-start items-center">
              <div className="textInterBold text-[#DEDEDE] text-lg">
                {item.title}
              </div>
              <div className="text-[#fff] font-sora lg:text-5xl md:text-2xl">
                {item.tittleImage}
              </div>
              <div className="text-[#D4D4D4] font-inter lg:text-lg md:text-base lg:w-[556px]">
                <span className="font-semibold">{item.subtittle}</span>{" "}
                {item.description}
              </div>
            </div>
          </div>
        ))}
        <div className="flex-col flex justify-center ml-7 lg:space-y-6 md:space-y-6 space-y-3 items-center w-[90%] ">
          <Pagination
            total={totalPages}
            initialPage={currentPage}
            onChange={(page) => handlePageChange(page)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
