const services = [
  {
    id: 1,
    title: "Web Development",
    subtitle:
      "When your business needs a website, web application or any online solution.",
    description:
      "We use the latest web technologies as a leverage for your business growth by developing websites and web applications, E-Commerce websites, automations, data scrapping, etc.",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    subtitle:
      "When your business needs a data-driven solution for its facing challenges.",
    description:
      "We use the state-of-the-art artificial intelligence, machine learning and neural network algorithms and implementations to see things beyond human recognition and propose the best solutions to your business' challenges.",
  },
  {
    id: 3,
    title: "Branding & Identity ",
    subtitle:
      "When your company wants to draw all the attention of its target audience.",
    description:
      "We manifest a memorable, creative and professional brand identity for your business and promote its values through the creative process of branding. ",
  },
];

const ServiceCard = ({ title, subtitle, description }) => (
  <div className="w-full px-8 py-8 flex flex-col gap-4 border-1 border-[color:var(--e-global-color-secondary)] serviceCard border-b border-slate-700 md:border-none" id="services" >
    <h3 className="text-3xl font-bold leading-snug">{title}</h3>
    <p className="text-md font-semibold text-pretty leading-2">{subtitle}</p>
    <div className="md:block hidden pt-4">
      <svg
        viewBox="0 0 100 10"
        xmlns="http://www.w3.org/2000/svg"
        className="my-auto"
      >
        <line x1="0" y1="0" x2="30" y2="0" stroke="white" strokeWidth="4" />
      </svg>
    </div>
    <p className="">{description}</p>
  </div>
);

export const Services = () => {
  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-6 gap-0 px-[2vw] md:px-[11.8vw] border-y border-slate-700">
      <div className="w-full md:col-span-1 pb-6">
        <p className="text-md font-bold text-[color:var(--global-color-0)] ">
          01
        </p>
        <h3 className="text-xl font-bold">Services</h3>
      </div>

      <div className="w-full md:col-span-5 flex flex-col md:flex-row  md:-ml-4">
        {services.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
