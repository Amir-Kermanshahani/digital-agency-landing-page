"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationMenu = [
  { key: 1, title: "Home", link: "/" },
  { key: 2, title: "What We Do", link: "#services" },
  { key: 3, title: "Case Studies", link: "#portfolio" },
  { key: 4, title: "About Us", link: "#about" },
  { key: 5, title: "Contact", link: "#contact" },
];

const NavItem = ({ title, link, path }) => {
  return (
    <li className="font-medium text-lg md:text-md">
      <Link
        href={link}
        className={`${
          path == link ? "text-[color:var(--global-color-0)]" : " "
        } ease-linear duration-200 
         hover:text-[color:var(--global-color-0)] hover:bg-transparent visited:bg-transparent`}
      >
        {title}
      </Link>
    </li>
  );
};

export const Header = () => {
  const pathname = usePathname();
  return (
    <navbar className="min-h-24 w-full absolute top-0 flex items-center px-[4vw] lg:px-[12vw] ">
      <div className="drawer z-10 ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-none">
            <div className="flex-1 px-2 text-2xl font-semibold">
              <Link href={"#"}>Digital Tribe</Link>
            </div>
            <div className="flex-none lg:hidden">
              <label
                className="btn btn-circle swap swap-rotate"
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
              >
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block ">
              <ul className="menu-horizontal flex flex-row gap-8">
                {/* Navbar menu content here */}
                {navigationMenu.map((item) => (
                  <NavItem
                    key={item.key}
                    title={item.title}
                    link={item.link}
                    path={pathname}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu px-4 w-80 min-h-full bg-base-200 py-16 flex flex-col gap-4">
            {/* Sidebar content here */}
            {navigationMenu.map((item) => (
              <NavItem
                key={item.key}
                title={item.title}
                link={item.link}
                path={pathname}
              />
            ))}
          </ul>
        </div>
      </div>
    </navbar>
  );
};
