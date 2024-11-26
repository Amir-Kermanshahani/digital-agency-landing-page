import Image from "next/image";
import React from "react";

const heroData = {
  title: "Grow & Shine Digittaly!",
  quote: "Creating value through service is the highest of all men duties.",
  quoteAuthor: "Amir Kermanshahani",
  authoSign: "/img/signature.png",
};

const Hero = () => {
  return (
    <div className="w-full py-[12vh] md:pt-[21vh] flex flex-col md:grid md:grid-cols-6 gap-0 px-[2vw] md:px-[8vw] lg:px-[12vw]">
      <div className="w-full md:col-span-1 pt-8">
        <div className="md:hidden sm:block my-auto">
          <svg
            viewBox="0 0 100 10"
            xmlns="http://www.w3.org/2000/svg"
            className="my-auto"
          >
            <line x1="0" y1="0" x2="30" y2="0" stroke="white" strokeWidth="6" />
          </svg>
        </div>
        <div className="md:block hidden pt-4">
          <svg
            viewBox="0 0 100 10"
            xmlns="http://www.w3.org/2000/svg"
            className="my-auto"
          >
            <line
              x1="0"
              y1="0"
              x2="60"
              y2="0"
              stroke="white"
              strokeWidth="14  "
            />
          </svg>
        </div>
      </div>
      <div className="col-span-3 text-6xl md:text-8xl leading-normal md:leading-tight font-bold">
        {heroData.title}
      </div>
      <div className="col-span-2 items-end flex flex-col">
        <Image src={"/img/quote-open.svg"} width={132} height={132}></Image>
        <div className="flex flex-col gap-6 -mt-11 pr-[2rem] text-white font-bold -mb-5 text-end w-1/2 md:w-3/4  ">
          <p className="">{heroData.quote}</p>
          <p className="font-medium">{heroData.quoteAuthor}</p>
        </div>
        <Image src={heroData.authoSign} width={156} height={156}></Image>
      </div>  
    </div>
  );
};

export default Hero;
