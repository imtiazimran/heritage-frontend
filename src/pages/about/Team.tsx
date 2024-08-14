import Container from "@/utils/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const Team = () => {
  return (
    <Container className="py-10">
      <div className=" py-4">
        <div className="flex items-center gap-2 mt-4">
          <div className="w-8 border h-[1px] border-secondary"></div>
          <p className="text-secondary font-semibold">Our Team</p>
        </div>
        <h1
          className="text-title text-3xl font-semibold"
          style={{ fontFamily: "Montserrat" }}
        >
          Discover the Faces Behind Our Success
        </h1>
      </div>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Property"
                    className="w-full h-[384px] object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-white" />
          <CarouselNext className="bg-primary text-white" />
        </Carousel>
      </div>
    </Container>
  );
};

export default Team;
