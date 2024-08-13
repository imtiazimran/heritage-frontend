import Container from "@/utils/Container";
import { FaStar, FaStarHalf } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"; // Adjust the import based on your actual carousel component

const testimonials = [
  {
    id: 1,
    text: `"The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."`,
    name: "John Doe",
    position: "Marketing Manager, Google",
    image: "https://i.pravatar.cc/300",
  },
  {
    id: 2,
    text: `"Excellent customer service and great features. I would highly recommend CypherPlay to anyone looking for reliable and secure financial solutions."`,
    name: "Jane Smith",
    position: "Product Manager, Microsoft",
    image: "https://i.pravatar.cc/301",
  },
  {
    id: 3,
    text: `"A fantastic experience from start to finish. The security features are top-notch, and the customer support is always helpful and responsive."`,
    name: "Alice Johnson",
    position: "Software Engineer, Facebook",
    image: "https://i.pravatar.cc/302",
  },
  {
    id: 4,
    text: `"CypherPlay has transformed the way I handle my finances. The user interface is intuitive and the security features are impressive."`,
    name: "Bob Brown",
    position: "UX Designer, Apple",
    image: "https://i.pravatar.cc/303",
  },
];

const Testimonials = () => {
  return (
    <Container className="py-10">
      <h1 className="text-center text-3xl font-bold mb-6">
         Testimonials
      </h1>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex space-x-4">
            {testimonials.map(({ id, text, name, position, image }) => (
              <CarouselItem
                key={id}
                className="flex-shrink-0 md:basis-full lg:basis-1/2 bg-accent p-5 rounded text-center"
              >
                <p className="text-secondary flex justify-center mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </p>
                <p className="text-muted mb-9 md:px-10">{text}</p>
                <div className="flex flex-col items-center">
                  <img
                    className="rounded-full w-12 h-12 mb-2"
                    src={image}
                    alt={name}
                  />
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-muted">{position}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full" />
        </Carousel>
      </div>
    </Container>
  );
};

export default Testimonials;
