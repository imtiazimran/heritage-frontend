import Container from "@/utils/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { FaSquare } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const PropertiesGridView = ({title}: {title: string}) => {
  return (
    <Container className="py-10">
      <div className="flex justify-between py-4">
        <h1
          className="text-3xl font-semibold"
          style={{ fontFamily: "Montserrat" }}
        >
          {title || "Properties"}
        </h1> 
        <Link className="underline text-primary" to="/">
          See All Properties
        </Link>
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
                  <Card className="w-full">
                    <CardHeader className="p-0">
                      <CardTitle>
                        <img
                          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                          alt="Property"
                          className="w-full h-auto object-cover"
                        />
                      </CardTitle>
                      <CardDescription>
                        <Container className="flex justify-between items-center border-b pb-2">
                          <p className="bg-accent px-2 rounded text-[#00254A]">Apartment</p>
                          <p className="font-medium text-[16px] text-[#111827] flex items-center gap-2"> <FaSquare className="text-secondary"/> <span>Ready to Move</span></p>
                          
                        </Container>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h1 className="text-[#111827] font-semibold">SunnySlope Suites</h1>
                      <p className="flex items-center text-[#667085] text-[16px]"> <FaLocationPin className="text-secondary"/> <span>Meadowshire Park, Greenfield, USA</span></p>
                    </CardContent>
                    <CardFooter>
                    <h1 className="text-[#111827] font-semibold">$ 25000</h1>
                    </CardFooter>
                  </Card>
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

export default PropertiesGridView;
