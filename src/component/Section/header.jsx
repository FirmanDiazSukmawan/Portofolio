import React, { useState } from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import myFoto from "../../assets/myFoto.jpg"
import cv from "../../assets/cv.png"
import email from "../../assets/email.png"
import linkedin from "../../assets/linkedin.png"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useEffect } from "react";
import { useRef } from "react";


function Header() {

  const [showFullscreen,setShowFullscreen] = useState(false)
  const [typedText, setTypedText] = useState("");
  const intervalRef = useRef(null);



  const text = "a human with some ability to love learning and working on teamwork.";



  useEffect(() => {
    function typeText() {
      let index = 0;
  
      intervalRef.current = setInterval(() => {
        
        const normalizedChar = text[index].normalize('NFC');
        
        setTypedText((prevText) => prevText + normalizedChar);
        index++;
  
        if (index === text.length) {
          clearInterval(intervalRef.current);
  
         
          setTimeout(() => {
            setTypedText("");
            typeText(); 
          }, 2000);
        }
      }, 100);
    }
  
    typeText(); 
  
    return () => {
     
      clearInterval(intervalRef.current);
    };
  }, [text]);

  const handleImageClick = () => {
    setShowFullscreen(true);
  }

  const handleImageCloseFullScreen = () => {
    setShowFullscreen(false);
  }

  return (
    <header className="w-[100%] lg:pr-[250px] md:pr-[200px] pr-[0px]" id="aboutMe">
        <div className="textHeader font-sora lg:text-[56px] md:text-[40px] text-[22px] lg:text-start md:text-start text-center lg:h-[180px] md:h-[250px] h-[160px]">
        Hi Im Firman, {typedText}
        </div>

       
        <div className="flex lg:flex-row md:flex-col flex-col items-center lg:space-y-0 md:space-y-5 space-y-3 lg:pt-0 md:pt-3">
          <div className="flex flex-col lg:items-start md:items-center items-center gap-2">
            
          <div className="lg:w-[124px] lg:h-[124px] sm:w-[120px] sm:h-[120px]
          w-[124px] h-[124px] bg-[#3A3636] rounded-[50%] border-2 bg-gradient-to-r from-[#62D9FF] to-[#3BF686] flex items-center justify-center">
            <img
              src={myFoto}
              alt="img"
              className="w-[120px]  h-[120px] rounded-[50%]  bg-[#3A3636] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
          {showFullscreen&& (
            <div className="w-full">
              <img
                className="w-full h-full"
                src={myFoto}
                alt="Full Screen"
                onClick={handleImageCloseFullScreen}
              />
            </div>
          
          )}
          </div>

          <div className="flex flex-col lg:w-[600px] lg:ml-[36px] md:ml-[20px] ml-[5px] lg:space-y-0 md:space-y-0 space-y-2">
            <div className="text-[#FBFBFB] lg-text-[28px] md:text-[25px] text-[20px] font-sora lg:h-[72px] flex flex-col lg:items-start md:items-start items-center justify-center">
              Biography
            </div>
            <div className="font-inter text-[#D6D6D6] lg:text-[18px] lg:text-start md:text-start text-center">
            Firman is a high school graduate with some computer skills and a passion for the world of programming, with a focus on Fullstack Web & Mobile Development. I am a responsible individual when it comes to completing tasks. Exicited on <span className="text-[#87cefa]">React</span>, <span className="text-[#d92186]">Next JS</span>, <span className="text-[#c978eb]">React Native</span>, <span className="text-[#80FFA3]">Node JS</span> and <span className="text-[#3BF686]">Agile</span>.
            </div>
          </div>
          <div className="flex flex-col lg:ml-[86px] lg:h-[168px] items-center">
            <div className="text-[#FBFBFB] lg-text-[28px] md:text-[25px] text-[20px] font-sora lg:w-[197px] lg:h-[72px] flex items-center">
              Lets Connect
            </div>
            <div className="flex flex-row space-x-4">
            <Popover showArrow placement="bottom">
      <PopoverTrigger>
      <img src={twitter} alt="twitter" className="w-[30px] h-[30px] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <a href="https://twitter.com/DiazSukmawan" className="underline">DiazSukmawan </a>
      </PopoverContent>
    </Popover>
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
      <img src={instagram} alt="instagram" className="w-[30px] h-[30px] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <a href="https://www.instagram.com/firman670676/" className="underline">@firman670676 </a>
      </PopoverContent>
    </Popover>
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
      <img src={facebook} alt="facebook" className="w-[30px] h-[30px] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"/>
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <a href="https://www.facebook.com/03MY.Ella.4674/" className="underline">FirmanDiazSukmawan </a>
      </PopoverContent>
    </Popover>
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
      <img src={email} alt="email" className="w-[30px] h-[30px] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <a href="mailto:firman670676@gmail.com" className="underline">firman670676@gmail.com </a>
      </PopoverContent>
    </Popover>
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
      <img src={cv} alt="cv" className="w-[30px] h-[30px] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"/>
      </PopoverTrigger>
      <PopoverContent className="p-1 flex flex-col items-start justify-start">
        <a href="https://drive.google.com/drive/folders/1gLN4mi_C7s0GwU-Lh4z2QO3YujTM5qkz?usp=sharing" className="underline">My CV </a>
      </PopoverContent>
    </Popover>
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
      <img src={linkedin} alt="linkedin" className="w-[30px] h-[30px] object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"/>
      </PopoverTrigger>
      <PopoverContent className="p-1 flex flex-col items-start justify-start">
        <a href="https://www.linkedin.com/in/firman-diaz/" className="underline">Firman D.S</a>
      </PopoverContent>
    </Popover>

              
              
              
             
            </div>
          </div>
        </div>
     
    </header>
  );
}

export default Header;
