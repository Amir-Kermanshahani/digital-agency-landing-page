"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BreadcrumbHero = () => {
  const pathname = usePathname();
  return (
    <div className="w-full mt-[10vh] ">
      <div className="px-20 pt-[30vh]">
        <div className="text-5xl font-bold breadcrumbs ">
          <ul className="">
            <div className="">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0"
                  y1="0"
                  x2="30"
                  y2="0"
                  stroke="white"
                  strokeWidth="6"
                />
              </svg>
            </div>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>{pathname}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHero;
