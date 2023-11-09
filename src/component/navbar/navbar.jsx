import React, { useEffect, useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Popover,
    PopoverTrigger,
    User,
    PopoverContent,
  } from "@nextui-org/react";
import myFoto from "../../assets/myFoto.jpg"
import { UserCard } from '../cardPopup/cardPopup';
import { Link, animateScroll } from 'react-scroll';

function NavbarMenu() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <Navbar>
      <NavbarBrand as="button">
        <p className="font-bold text-inherit" onClick={scrollToTop}>Firman Diaz Sukmawan</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem as="button">
          <Link to="aboutMe" smooth={true} duration={500} color="foreground">
           About Me
          </Link>
          </NavbarItem>
          
        
        <NavbarItem as="button">
          <Link to="portofolio" smooth={true} duration={500} color="foreground">
           Portofolio
          </Link>
        </NavbarItem>
        <NavbarItem as="button">
          <Link color="foreground" smooth={true} duration={500} to="skills">
            Skills
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
        <Popover showArrow placement="bottom">
      <PopoverTrigger>
        {isSmallScreen?<User   
          as="button"
          className="transition-transform"
          avatarProps={{
            src: myFoto
          }}
        />:<User   
        as="button"
        name="Firman"
        description="Fullstack Developer"
        className="transition-transform"
        avatarProps={{
          src: myFoto
        }}
      /> }
        
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <UserCard image={myFoto} />
      </PopoverContent>
    </Popover>
        </NavbarItem>
       
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarMenu
