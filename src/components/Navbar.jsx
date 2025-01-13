import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants/index"
import { RiCloseLine,RiMenu3Line } from "@remixicon/react";
const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + offset + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenu(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4">


        {/* Desktop Menu */}


        <div className="mx-auto hidden max-w-xl items-center justify-center rounded-full border border-white/30 py-2 backdrop-blur-3xl lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="/">
                <span className="uppercase font-bold">Dhairya </span>
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-stone-300"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        {/* Mobile Menu */}


        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <span className="pl-2 uppercase font-bold">Dhairya Kaithwar</span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenu ? "Close menu" : "Open menu"}
              >
                {isMobileMenu ?(
                  <RiCloseLine className="m-2 h-6 w-5"/>
                ):(
                  <RiMenu3Line className="m-2 h-6 w-5"/>
                )}
              </button>
            </div>
          </div>
          {isMobileMenu && (

              <ul className=" my-4 ml-4 flex flex-col gap-6 items-center  backdrop-blur-md">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className=" block w-full text-lg hover:text-stone-300"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
