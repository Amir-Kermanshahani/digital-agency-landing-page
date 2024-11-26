import React from "react";
import Image from "next/image";

const whyUsItems = [
  {
    id: 1,
    subtitle: "Sit back & enjoy",
    title: "Professional Attitude",
    description:
      "Tired of explaining what you want to your developer? Here you only need to have ocasional meetings to express your ideas and taste, the rest is with us!",
    image: "/img/sit-back-and-relax.jpg",
    isRTL: false,
  },

  {
    id: 2,
    subtitle: "Supercharge your business",
    title: "Digital Acceleration",
    description:
      "We help our clients achieve their online business goals by delivering innovative, customized, and data-driven solutions that outperform their competitors.",
    image: "/img/digital-acceleration.jpg",
    isRTL: true,
  },

  {
    id: 3,
    subtitle: "Trust the expert",
    title: "Highly-skilled team",
    description:
      "We are more than just a tech agency, We are your partners. We help you solve your most complex challenges by providing cutting-edge, creative, and cost-effective solutions that set you apart from the rest.",
    image: "/img/highly-skilled-team.jpg",
    isRTL: false,
  },
];

const WhyCard = ({ subtitle, title, description, image, isRTL }) => (
  <div
    className={`border-b border-slate-700 bg-[#1C2735] md:grid md:grid-cols-3 flex flex-col overflow-hidden`}
    dir={`${isRTL ? "rtl" : ""}`}
  >
    <div className="md:col-span-1 w-full max-h-[320px] max-w-[500px]">
      <Image className="" src={image} height={320} width={500} />
    </div>
    <div
      className={`flex flex-2  bg-[#1C2735] gap-4 flex-col p-8 col-span-2 justify-center`}
      dir="ltr"
    >
      <h3 className="text-lg font-semibold">{subtitle}</h3>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-pretty leading-6 mt-4">{description}</p>
    </div>
  </div>
);

const WhyUs = () => {
  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-6 gap-0 px-[2vw] md:px-[11.8vw] withGrids overflow-hidden">
      <div className="w-full md:col-span-1 ">
        <p className="text-md font-bold text-[color:var(--global-color-0)] ">
          02
        </p>
        <h3 className="text-xl font-bold">Why Us</h3>
      </div>
      <div className="w-full md:col-span-5 flex flex-col md:-ml-4 gap-12 ">
        <div className="pt-8 ">
          <h2 className="font-bold text-7xl md:text-8xl">How we do it</h2>
        </div>
        <hr className="w-screen -ml-[24vw] border-slate-700" />
        <div className="overflow-hidden">
          <hr className="w-screen -ml-[24vw] border-slate-700" />
          {whyUsItems.map((item) => (
            <WhyCard
              key={item.id}
              subtitle={item.subtitle}
              title={item.title}
              description={item.description}
              image={item.image}
              isRTL={item.isRTL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
