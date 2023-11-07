import React from "react";
import img from "../../assets/image1.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/Frame.svg";
import twitter from "../../assets/Frame (1).svg";
function Header() {
  return (
    <header className="w-[100%] lg:pr-[250px] md:pr-[200px] pr-[0px]">
        <div className="textHeader font-sora lg:text-[56px] md:text-[40px] text-[22px] lg:text-start md:text-start text-center">
          Hi Im Naufaldi, a special human with some ability to love learning and
          working on teamwork.
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col items-center lg:space-y-0 md:space-y-0 space-y-3">
          <div className="lg:w-[124px] lg:h-[124px] sm:w-[120px] sm:h-[120px] bg-[#3A3636] rounded-[50%] border-2 bg-gradient-to-r from-[#62D9FF] to-[#3BF686] flex items-center justify-center">
            <img
              src={img}
              alt="img"
              className="lg:w-[120px]  rounded-full  bg-[#3A3636]"
            />
          </div>

          <div className="flex flex-col lg:w-[499px] lg:ml-[36px] md:ml-[20px] ml-[5px] lg:space-y-0 md:space-y-0 space-y-2">
            <div className="text-[#FBFBFB] lg-text-[28px] md:text-[25px] text-[20px] font-sora lg:h-[72px] flex flex-col lg:items-start md:items-start items-center justify-center">
              Biography
            </div>
            <div className="font-inter text-[#D6D6D6] lg:text-[18px] lg:text-start md:text-start text-center">
              Getting Buff +1 for learning, Buff +2 for documentation and more
              buff on managing team. Exicited on React, UX Research and Agile.
            </div>
          </div>
          <div className="flex flex-col lg:ml-[86px] lg:h-[168px]">
            <div className="text-[#FBFBFB] lg-text-[28px] md:text-[25px] text-[20px] font-sora lg:w-[197px] lg:h-[72px] flex items-center">
              Lets Connect
            </div>
            <div className="flex flex-row space-x-4">
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook"></img>
            </div>
          </div>
        </div>
     
    </header>
  );
}

export default Header;
