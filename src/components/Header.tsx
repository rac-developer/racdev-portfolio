"use client";
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Logotipo from "@/components/Logotipo";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md h-16 shadow-md"
          : "bg-transparent h-20"
      }`}
    >
      <NavbarBrand className="pl-6">
        <Button as={Link} color="primary" href="/" variant="flat">
            <Logotipo className="transition-all duration-300 text-secundary" width={160} />
          </Button>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="pr-6">
          {/* <Button as={Link} color="primary" href="#" variant="flat">
            Idioma
          </Button> */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
