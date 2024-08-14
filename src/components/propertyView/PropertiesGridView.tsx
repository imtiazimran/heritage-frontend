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
import Loading from "@/utils/Loading";

interface Property {
  _id: string;
  title: string;
  propertyType: string;
  status: string;
  location: string;
  price: string;
  image: string;
}

interface PropertiesGridViewProps {
  title: string;
  properties: Property[];
  seeAllLink?: string;
  isLoading?: boolean;
}

const PropertiesGridView: React.FC<PropertiesGridViewProps> = ({
  title,
  properties,
  seeAllLink = "/searchResult",
  isLoading,
}) => {

  if (isLoading) {
    return <Loading/>;
  }
  return (
    <Container className="py-10">
      <div className="flex justify-between py-4">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "Montserrat" }}>
          {title || "Properties"}
        </h1>
        <Link className="underline text-primary" to={seeAllLink}>
          See All Properties
        </Link>
      </div>
      <div className="relative">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {properties?.map((property) => (
              <CarouselItem key={property._id} className="md:basis-1/2 lg:basis-1/3">
                <Link to={`/propertyDetails/${property._id}`}>
                <div className="p-1">
                  <Card className="w-full">
                    <CardHeader className="p-0">
                      <CardTitle>
                        <img
                          src={property.image[0]}
                          alt={property.title}
                          className="w-full h-auto object-cover"
                        />
                      </CardTitle>
                      <CardDescription>
                        <Container className="flex justify-between items-center border-b pb-2">
                          <p className="bg-accent px-2 rounded text-[#00254A]">{property.propertyType}</p>
                          <p className="font-medium text-[16px] text-[#111827] flex items-center gap-2">
                            <FaSquare className="text-secondary" />
                            <span>{property.status}</span>
                          </p>
                        </Container>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h1 className="text-[#111827] font-semibold">{property.title}</h1>
                      <p className="flex items-center text-[#667085] text-[16px]">
                        <FaLocationPin className="text-secondary" />
                        <span>{property.location}</span>
                      </p>
                    </CardContent>
                    <CardFooter>
                      <h1 className="text-[#111827] font-semibold">${property.price}</h1>
                    </CardFooter>
                  </Card>
                </div>
                </Link>
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
