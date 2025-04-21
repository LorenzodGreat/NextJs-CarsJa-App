"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavigationBar() {
  return (
    <Navbar className="shadow">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">CarsJa</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light" size="sm" isIconOnly><Icon icon="solar:hamburger-menu-bold" className="h-8 w-8"/> </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="home" href="/"> Home</DropdownItem>
              <DropdownItem key="cars" href="/all-cars"> All Cars</DropdownItem>
              <DropdownItem key="sign-in" href="#">Sign in</DropdownItem>
              <DropdownItem key="register" className="text-primary">
              Register
              </DropdownItem>
              <DropdownItem variant="solid" key="help" href="#"  className="text-white bg-danger" color="danger">Help Center</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
