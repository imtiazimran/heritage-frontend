import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/utils/Container";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Define the types for the property details and the property itself
interface PropertyDetail {
  label: string;
  value: string;
  icon: string;
}

export interface IProperty {
  id: number;
  title: string;
  location: string;
  price: string;
  totalArea: string;
  status: string;
  image: string[];
  details: PropertyDetail[];
}

const SearchResults = () => {
  const [properties, setProperties] = useState<IProperty[]>([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/properties.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON data
      })
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  return (
    <Container className="py-10">
      <div className="w-[70%]">
        <div>
          <div className="bar flex gap-10 border-b py-4">
            <Button className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] hover:bg-blue-950 opacity-100">
              Properties
            </Button>
            <Button className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] hover:bg-blue-950 opacity-100">
              New Projects
            </Button>
            <Button className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] hover:bg-blue-950 opacity-100">
              Pre-Launch Offers
            </Button>
          </div>
          <h1 className="text-xl font-bold">
            {properties.length} Results on Rental
          </h1>
        </div>
        <div>
          {properties.map((property) => (
            <Link key={property.id} to={`/propertyDetails/${property.id}`}>
              <div className="grid grid-cols-4 gap-2 mb-10">
                <div>
                  <img
                    className="w-full h-auto object-cover rounded-lg"
                    src={property.image[0]}
                    alt={property.title}
                  />
                </div>
                <div className="flex flex-col gap-5 col-span-3">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-[18px] font-semibold px-2">
                        {property.title}
                      </h1>
                      <p className="flex items-center text-[#667085] text-[16px] py-3">
                        <FaLocationPin className="text-secondary" />
                        <span className="ml-2">{property.location}</span>
                      </p>
                    </div>
                    <div>
                      <h1 className="text-[18px] font-semibold">
                        {property.price}
                      </h1>
                      <Button variant={"outline"} className="my-3">
                        Bid Property
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="ml-2 w-[30%]">Property Details</span>
                      <span className="w-full border-t border-gray-400"></span>
                    </div>
                    <div className="flex justify-between mt-4">
                      {property.details.map((detail, index) => (
                        <div key={index} className="flex gap-2 items-center">
                          <img
                            className="size-10"
                            src={detail.icon}
                            alt={detail.label}
                          />
                          <div>
                            <h1 className="font-medium text-[#303030]">
                              {detail.label}
                            </h1>
                            <p className="text-[#535353]">{detail.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SearchResults;
