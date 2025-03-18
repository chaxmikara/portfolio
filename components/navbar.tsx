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

  // Utility function to navigate to any section with delay
  const navigateToSection = (sectionId: string, callback?: () => void) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });

    // Execute callback after scrolling if provided
    if (callback) {
      setTimeout(callback, 500); // Small delay to ensure scroll completes first
    }
  };

  // Function to navigate to projects with category filter
  const navigateToProjectCategory = (category: string) => {
    // First navigate to the projects section
    navigateToSection("projects", () => {
      // Find the button for the selected category and click it
      const categoryButtons = document.querySelectorAll("#projects .inline-flex button");
      categoryButtons.forEach((button) => {
        if (button.textContent?.includes(category)) {
          (button as HTMLButtonElement).click();
        }
      });
    });
  };

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
                    <HoveredLink
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection("about");
                      }}
                    >
                      About
                    </HoveredLink>
                    <HoveredLink
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection("projects");
                      }}
                    >
                      Projects
                    </HoveredLink>
                    <HoveredLink
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection("contact");
                      }}
                    >
                      Contact
                    </HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                  <div className="flex flex-col space-y-4 text-sm p-3">
                    <HoveredLink
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToProjectCategory("All Projects");
                      }}
                    >
                      All Projects
                    </HoveredLink>
                    <HoveredLink
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToProjectCategory("Full-Stack");
                      }}
                    >
                      Full-Stack Applications
                    </HoveredLink>
                    <HoveredLink
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToProjectCategory("UI/UX Design");
                      }}
                    >
                      UI/UX Design
                    </HoveredLink>
                    <HoveredLink
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToProjectCategory("Software Dev");
                      }}
                    >
                      Software Development
                    </HoveredLink>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact">
                  <div className="flex flex-col space-y-4 text-sm p-3">
                    <HoveredLink
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection("contact");
                      }}
                    >
                      Get in Touch
                    </HoveredLink>
                    <HoveredLink
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection("contact");
                      }}
                    >
                      Social Media
                    </HoveredLink>
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