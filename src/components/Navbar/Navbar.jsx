import React, { useState } from "react";
import logo from "/assets/logo.png";
import { navItems } from "../../constants/index";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight bolder">Virtual Arts</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 ">
            {navItems.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center item-center space-x-12">
            <a href="#" className="hover:bg-gradient-to-r from-orange-500 to-orange-800 transition duration-200 ease-in-out py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="hover:bg-gradient-to-r from-orange-500 to-orange-900  transition duration-200 ease-in-out py-2 px-3 border rounded-md"
            >
              Create Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((items, index) => (
                <li key={index} className="py-4 ">
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-900  py-2 px-3 border rounded-md"
            >
              Create Account
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
