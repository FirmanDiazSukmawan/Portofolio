import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Dropdown,
    Avatar,
  } from "@nextui-org/react";
 

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
        <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        </NavbarItem>
       
      </NavbarContent>
    </Navbar>
  )
}

export default NavbarMenu
