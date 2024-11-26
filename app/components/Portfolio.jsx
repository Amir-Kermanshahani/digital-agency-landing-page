import Image from "next/image";
import Link from "next/link";
import React from "react";

// Images

const projects = [
  {
    id: 1,
    title: "Developer Personal Website",
    description:
      "A fully customized website for a developer and tech enterprenuer. The project fully describes his abbilites and demonstrates his projects.",
    year: "2023",
    services: ["UI Design", "UX Writing", "Web Development"],
    features: ["Animated", "Responsive", "Theming"],
    thumbnail: "/img/project1.png",
  },
  {
    id: 2,
    title: "Advertisement Agency",
    description:
      "A fully customized website for a developer and tech enterprenuer. The project fully describes his abbilites and demonstrates his projects.",
    year: "2023",
    services: ["UI Design", "UX Writing", "Web Development"],
    features: ["Animated", "Responsive", "Theming"],
    thumbnail: "/img/project2.jpg",
  },
  {
    id: 3,
    title: "NGO Website",
    description:
      "A fully customized website for a developer and tech enterprenuer. The project fully describes his abbilites and demonstrates his projects.",
    year: "2023",
    services: ["UI Design", "UX Writing", "Web Development"],
    features: ["Animated", "Responsive", "Theming"],
    thumbnail: "/img/project3.jpg",
  },
];

const Portfolio = () => {
  return (
    <div
      className="w-full flex flex-col md:grid md:grid-cols-6 gap-0 px-[2vw] md:px-[11.8vw] withGrids overflow-hidden scroll-smooth"
      id="portfolio"
    >
      <div className="w-full md:col-span-1 ">
        <p className="text-md font-bold text-[color:var(--global-color-0)] ">
          03
        </p>
        <h3 className="text-xl font-bold">Portfolio</h3>
      </div>
      <div className="w-full md:col-span-5 flex flex-col md:-ml-4 gap-4 justify-start">
        <div className="pt-8 ">
          <h2 className="font-bold text-7xl md:text-8xl">Case Studies</h2>
        </div>
        <hr className="w-screen md:-ml-[24vw] border-slate-700" />
        <div>
          <hr className="w-screen md:-ml-[24vw] border-slate-700" />
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-4 items-center">
          <div className="col-span-1 max-w-1024 flex flex-col h-full justify-start overflow-hidden gap-4">
            <div className="bg-slate-900 relative cursor-pointer group">
              <Image
                src={projects[0].thumbnail}
                width={2048}
                height={1024}
                className="group-hover:opacity-30 group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <p className="absolute top-16 left-0 font-medium text-lg md:text-4xl opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 w-full px-4 text-center leading-loose">
                {projects[0].title}
              </p>
            </div>
            <div className="bg-slate-900 relative cursor-pointer group">
              <Image
                src={projects[1].thumbnail}
                width={2048}
                height={1024}
                className="group-hover:opacity-30 group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <p className="absolute top-16 left-0 font-medium text-lg md:text-4xl opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 w-full px-4 text-center leading-loose">
                {projects[1].title}
              </p>
            </div>
          </div>
          <div className="col-span-2 max-w-1024 overflow-hidden bg-slate-900 relative cursor-pointer group">
            <Image
              src={projects[2].thumbnail}
              width={2048}
              height={1024}
              className="group-hover:opacity-30 group-hover:scale-105 transition duration-300 ease-in-out"
            />
            <p className="absolute top-48 left-0 font-medium text-lg md:text-4xl opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 w-full px-4 text-center leading-loose">
              {projects[2].title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
