import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingAbout = () => {
  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-6 gap-0 px-[2vw] md:px-[11.8vw] withGrids overflow-hidden scroll-smooth" id="about">
      <div className="w-full md:col-span-1 ">
        <p className="text-md font-bold text-[color:var(--global-color-0)] ">
          04
        </p>
        <h3 className="text-xl font-bold">About Us</h3>
      </div>
      <div className="w-full md:col-span-5 flex flex-col md:-ml-4 gap-14 ">
        <div className="pt-8 ">
          <h2 className="font-bold text-7xl md:text-8xl">Who are we</h2>
        </div>
        <hr className="w-screen md:-ml-[24vw] border-slate-700" />
        <div>
          <hr className="w-screen md:-ml-[24vw] border-slate-700" />
        </div>

        <div className="flex flex-col gap-12 -mt-14 pl-2">
          <div>
            <h3 className="text-2xl font-bold text-pretty">
              We are a global tribe of digital nomads working in a variaty of
              frontier technologies from all over the world.
            </h3>
          </div>
          <div className="flex md:flex-row flex-col gap-8">
            <div className="flex w-full md:w-1/3 pr-10 ">
              <p className="text-3xl text-start font-bold leading-snug">
                We are the ones who can make a difference
              </p>
            </div>
            <div className="flex w-full md:w-2/3 ">
              <p className="text-lg text-start">
              We specialize in AI solutions, website development, and graphic design, blending cutting-edge technology with artistic insight to bring your brand's vision to life. From crafting intelligent, AI-powered tools that streamline processes to designing visually stunning websites and graphics, we’re dedicated to helping businesses stand out in an ever-evolving digital world. Our team of experts works collaboratively to deliver tailored solutions that meet your unique needs, enhance your online presence, and drive meaningful engagement. At [Studio Name], innovation, creativity, and quality are at the core of everything we do. Let’s create something remarkable together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
