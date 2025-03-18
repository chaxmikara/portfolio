"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { ThemeToggle } from "./theme-toggle";
import { motion, useScroll } from "framer-motion";

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  React.useEffect(() => {
    return scrollY.onChange(() => {
      if (scrollY.get() > (scrollY.getPrevious() ?? 0)) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  return (
    <>
      <div className="h-20" />
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 w-full z-[100] bg-background/0 backdrop-blur-sm"
      >
        <div className="relative w-full flex items-center justify-center py-6">
          <div className="flex items-center justify-center gap-16">
            <div className="relative">
              <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                  <div className="flex flex-col space-y-4 text-sm p-3">
                    <HoveredLink href="/">Home</HoveredLink>
                    <HoveredLink href="#about">About</HoveredLink>
                    <HoveredLink href="#projects">Projects</HoveredLink>
                    <HoveredLink href="#contact">Contact</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                  <div className="flex flex-col space-y-4 text-sm p-3">
                    <HoveredLink href="#projects">Featured Projects</HoveredLink>
                    <HoveredLink href="#projects">Web Development</HoveredLink>
                    <HoveredLink href="#projects">Mobile Apps</HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact">
                  <div className="flex flex-col space-y-4 text-sm p-3">
                    <HoveredLink href="#contact">Get in Touch</HoveredLink>
                    <HoveredLink href="#contact">Social Media</HoveredLink>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </>
  );
}