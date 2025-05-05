"use client";
// import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import NavItem from "./NavItem";

import { usePathname } from "next/navigation";
import { ModeToggle } from "../ModeToggle";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  //   const Logo = "/logo/logo.png";

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);
  return (
    <div>
      <>
        <nav
          className={`
          shadow-lg w-full fixed bg-black/90 dark:bg-white/90 top-0 z-50 backdrop-blur 
        `}
        >
          <div className="mx-auto max-w-7xl px-2 py-2">
            <div className="flex items-center justify-between mx-auto">
              {/* Logo with link */}
              <Link href={`/`} className="">
                {/* <Image
                  src={Logo}
                  width={150}
                  height={80}
                  alt="ATI Limited Logo"
                /> */}
                <div className="flex items-center gap-2 font-bold text-6xl text-white dark:text-black">
                  delta fox
                </div>
              </Link>

              {/* Nav items */}
              <div className="hidden lg:flex items-center gap-x-6">
                <div className="flex items-center gap-4">
                  <NavItem />
                </div>
              </div>

              {/* Mobile menu toggle button */}
             
              <div className="flex items-center z-50">
                <ModeToggle />
              </div>

              {/* Mobile menu toggle button */}
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 ${
                  isNavOpen ? "outline-none ring-2 ring-gray-200" : ""
                }`}
                aria-controls="navbar-default"
                aria-expanded={isNavOpen ? "true" : "false"}
                onClick={handleNavToggle}
              >
                {/* Hamburger icon */}
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile navigation menu */}
        {isNavOpen && (
          <div className="w-full h-4/6 flex flex-col justify-center items-center fixed bg-black text-white lg:hidden top-[6.5rem] z-50 animate-slide-in-left px-6">
            <div className="flex flex-col justify-center items-center  ">
              {/* Navigation links */}
              <li className="flex">
                <Link
                  className={`link ${
                    pathname === `/solutions`
                      ? "flex items-center px-4 active underline underline-offset-8 text-xl font-bold"
                      : "flex items-center hover:underline underline-offset-8 text-xl px-4"
                  }`}
                  href={`/solutions`}
                >
                  solutions
                </Link>
              </li>
              <li className="flex mt-4">
                <Link
                  className={`link ${
                    pathname === `/expertise`
                      ? " flex items-center px-4 active underline  underline-offset-8 text-xl font-bold"
                      : "flex items-center hover:underline underline-offset-8 text-xl px-4"
                  }`}
                  href={`/expertise`}
                >
                  expertise
                </Link>
              </li>
              <li className="flex mt-4">
                <Link
                  className={`link ${
                    pathname === `/about`
                      ? "flex items-center px-4 active underline  underline-offset-8  text-xl font-bold"
                      : "flex items-center hover:underline underline-offset-8 text-xl px-4"
                  }`}
                  href={`/about`}
                >
                  about
                </Link>
              </li>
              <li className="flex mt-4">
                <Link
                  className={`link ${
                    pathname === `/business`
                      ? "flex items-center px-4 active underline underline-offset-8 text-xl font-bold"
                      : "flex items-center hover:underline underline-offset-8 text-xl px-4"
                  }`}
                  href={`/business`}
                >
                  business
                </Link>
              </li>
              <li className="flex mt-4">
                <Link
                  className={`link ${
                    pathname === `/revolution`
                      ? "flex items-center px-4 active underline underline-offset-8 text-xl font-bold"
                      : "flex items-center hover:underline underline-offset-8 text-xl px-4"
                  }`}
                  href={`/revolution`}
                >
                  revolution
                </Link>
              </li>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default NavBar;
