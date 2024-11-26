import Image from "next/image";
import Link from "next/link";
import React from "react";

const clients = [
  {
    id: 1,
    name: "Zenith Ventures",
    websiteLink: "https://raadwin.com/index.html",
    logo: "/img/colleuges/rcs-logo.png",
  },

  {
    id: 2,
    name: "Echo Media Group",
    websiteLink: "https://raadwin.com/index.html",
    logo: "/img/colleuges/rcs-logo.png",
  },
  {
    id: 3,
    name: "PulseTech Solutions",
    websiteLink: "https://raadwin.com/index.html",
    logo: "/img/colleuges/rcs-logo.png",
  },
  {
    id: 4,
    name: "UrbanNest Interiors",
    websiteLink: "https://raadwin.com/index.html",
    logo: "/img/colleuges/rcs-logo.png",
  },
  {
    id: 5,
    name: "BrightWave Marketing",
    websiteLink: "https://raadwin.com/index.html",
    logo: "/img/colleuges/rcs-logo.png",
  },
  {
    id: 6,
    name: "Vantage Health Partners",
    websiteLink: "https://raadwin.com/index.html",
    logo: "/img/colleuges/rcs-logo.png",
  },
];

const ClientThumbnail = ({ title, link, image }) => (
  <div className="grid-cols-subgrid col-span-1 justify-center my-auto h-full flex items-center">
    <Link href={link} rel="nofollow">
      <p className="text-3xl font-bold text-center hover:underline underline-offset-4">{title}</p>
    </Link>
  </div>
);

const LandingClients = () => {
  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-6 gap-0 px-[2vw] md:px-[11.8vw] withGrids overflow-hidden">
      <div className="w-full md:col-span-1 ">
        <p className="text-md font-bold text-[color:var(--global-color-0)] ">
          05
        </p>
        <h3 className="text-xl font-bold">Some of</h3>
      </div>
      <div className="w-full md:col-span-5 flex flex-col md:-ml-4 gap-12 ">
        <div className="pt-8">
          <h2 className="font-bold text-7xl md:text-8xl">Our Clients</h2>
        </div>

        <hr className="w-screen md:-ml-[24vw] border-slate-700" />
        <hr className="w-screen md:-ml-[24vw] border-slate-700" />

        <div className="flex flex-col md:grid md:grid-cols-3 md:min-h-[400px] items-start gap-y-16">
          {clients.map((item) => (
            <ClientThumbnail
              key={item.id}
              title={item.name}
              image={item.logo}
              link={item.websiteLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingClients;
