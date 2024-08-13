import Container from "@/utils/Container";
import homeIcon from "../../assets/icon.png";
import ServiceCard from "@/components/customComponent/ServiceCard";



const OtherServices = () => {
  const services = [
    {
      title: "Advanced Property Search",
      description:
        "Effortlessly find your dream property with advanced search filters.",
      icon: homeIcon,
    },
    {
      title: "Virtual Tours and Multimedia",
      description:
        "Explore properties through immersive virtual tours and HD photos.",
      icon: homeIcon,
    },
    {
      title: "Secure Online Transactions",
      description:
        "Ensure secure transactions and e-sign documents seamlessly online.",
      icon: homeIcon,
    },
  ];

  return (
    <Container className="py-8 my-14">
      <h1 className="text-3xl md:text-5xl font-bold text-center my-10">
        Other Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default OtherServices;
