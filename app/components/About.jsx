import Image from "next/image";

const abooutSectionsContent = [
  {
    id: 1,
    heading:
      "A digital community, driven by responsibility, talent and inteligence.",
    description:
      "Our digital community is a place for developers, designers, graphists and people with in demand talents to participate in community chosen projects and gain value by creating it for others.",
    image: "/img/connected_world_illustration.svg",
  },
  {
    id: 2,
    heading: "The projects you love the most!",
    description:
      "The community decides which projects to accept and work on. Each project is proposed by a community member, enterpreneur or a person with a great idea and is discussed within the community. The project with the most votes will be start as soon as possible.",
    image: "/img/collaboration_illustration.svg",
    dir: "rtl",
  },
  {
    id: 3,
    heading: "Now is the Time to share the benefits.",
    description:
      "After completing each mini project, each participant will have a share of total amount of shares dedicated to the specific project and task. Congratulations! You are now a stackeholder in the project you helped develop! From now on, you have the control over your shares, sell them and rip the product of your work, or continue helping the business grow and gain more revnue from more shares and more value per share.",
    image: "/img/revenue_illustration.svg",
  },
];

const AboutSection = ({ heading, description, image, dir }) => (
  <div
    className={`flex flex-col ${
      dir == "rtl" ? "md:flex-row" : "md:flex-row-reverse"
    } py-16 bg-base-300 w-full gap-8`}
    
  >
    <div className="w-full text-pretty px-8 md:px-16 leading-8 gap-8 flex flex-col my-auto">
      <h3 className="text-bold text-3xl ">{heading}</h3>
      <p>{description}</p>
    </div>
    <div className="w-full p-8">
      <Image src={image} width={400} height={400} className="mx-auto" />
    </div>
  </div>
);

const About = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 gap-8 scroll-smooth" >
      <h2 className="text-4xl font-bold px-8 leading-relaxed">
        How Everything works here?!
      </h2>
      <div className="w-full flex flex-col gap-16">
        {abooutSectionsContent.map((item) => (
          <AboutSection
            key={item.id}
            heading={item.heading}
            description={item.description}
            image={item.image}
            dir={item.dir}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
