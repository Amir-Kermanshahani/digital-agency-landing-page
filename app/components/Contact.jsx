import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-8 md:flex-row md:gap-0 p-[2vw] md:px-[11.8vw] withGrids overflow-hidden scroll-smooth" id="contact">
      <div className="w-full flex gap-6 flex-col">
        <h3 className="text-xl font-bold">Contact Us</h3>
        <h2 className="font-bold text-7xl md:text-8xl">Let's Talk</h2>
        <div className="flex flex-col gap-4 pb-4">
          
        </div>
      </div>
      <div className="w-full justify-around flex flex-col gap-4">
        <div className="">
          <h4 className="text-2xl font-bold text-pretty leading-snug">
            Providing value for your business through digital innovation
          </h4>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 justify-starts items-center">
            <Image src={"/img/phone.svg"} width={32} height={32}></Image>
            <p>+12 345 67 89</p>
          </div>
          <div className="flex flex-row gap-4 justify-starts items-center">
            <Image src={"/img/mail.svg"} width={32} height={32}></Image>
            <p>agency@gmail.com</p>
          </div>
          <div className="flex flex-row gap-4 justify-starts items-center">
            <Image src={"/img/mail.svg"} width={32} height={32}></Image>
            <p>contact@agency.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
