import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Popover,
    PopoverTrigger,
    User,
    PopoverContent,
  } from "@nextui-org/react";
import myFoto from "../../assets/myFoto.jpg"
import { UserCard } from '../cardPopup/cardPopup';

function NavbarMenu() {
    
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Firman Diaz Sukmawan</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
               Home
              </Button>
          </NavbarItem>
          
        
        <NavbarItem>
          <Link href="#" aria-current="page">
           About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Portofolio
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
        <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <User   
          as="button"
          name="Firman"
          description="Fullstack Developer"
          className="transition-transform"
          avatarProps={{
            src: myFoto
          }}
        />
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
