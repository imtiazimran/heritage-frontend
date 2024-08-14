
import { FaLocationPin } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as Slider from "@radix-ui/react-slider";
import { Button } from "@/components/ui/button";
import { IProperty } from "@/pages/BuyerSearchResult/SearchResults";
import Overview from "@/pages/propertyDetails.tsx/Overview";
import Amenities from "@/pages/propertyDetails.tsx/Amenities";
import OtherServices from "@/pages/home/OtherServices";
import Container from "@/utils/Container";
import PropertiesGridView from "@/components/propertyView/PropertiesGridView";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";

const PropertyDetailsLayout = ({ property, value, setValue, handleBid }: {property: IProperty, value: number[], setValue: (value: number[]) => void, handleBid: () => void}) => {

  const {data, isLoading} = useGetPropertiesQuery(undefined);
  const properties = data?.data;
  return (
    <div>
      <Container> 
        <div className="flex gap-10 w-[70%] border-b py-4">
          <div>
            <h1 className="text-[18px] font-semibold px-2">{property.title}</h1>
            <p className="flex items-center text-[#667085] text-[16px] py-3">
              <FaLocationPin className="text-secondary" />
              <span className="ml-2">{property.location}</span>
            </p>
          </div>
          <h1 className="text-[18px] font-extrabold">${property.price}</h1>
        </div>

        <div className="flex gap-5 flex-col md:flex-row">
          <div className="w-[70%]">
            <img
              className="w-full px-2 h-[400px] object-cover"
              src={property.image[0]}
              alt={property.title}
            />
            <div className="my-5 px-2 grid grid-cols-1 md:grid-cols-3 gap-2">
              {property.image.slice(1, 4).map((image, index) => (
                <div className="relative" key={index}>
                  <img
                    className="w-full h-[160px] object-cover"
                    src={image}
                    alt={property.title}
                  />
                  {index === 2 && property.image.length > 3 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white text-[18px] font-bold">
                        View All
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Overview />
          </div>
          <aside className="w-[30%]">
            <div className="">
              <div className="bg-accent px-5 w-[100%] ">
                <div className="">
                  <h3 className="text-[18px] py-2 font-semibold text-muted">
                    Property Value
                  </h3>
                  <h1 className="text-[18px] font-extrabold">
                    ${property.price} - ${Number(property.price) + 20000}
                  </h1>
                  <p className="text-muted py-4">
                    Your bid can not be than 10% of the property Minimum value.
                  </p>
                </div>
                <div className="grid w-full max-w-sm py-2 items-center gap-1.5">
                  <Label htmlFor="min">Min</Label>
                  <Input type="text" id="min" placeholder="$ 280k" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="min">Max</Label>
                  <Input type="text" id="max" placeholder="$ 400k" />
                </div>
                <div className="py-4">
                  <Slider.Root
                    className="relative flex items-center"
                    defaultValue={[40000]}
                    max={Number(property.price) + Number(500000)}
                    onValueChange={(newValue) => setValue(newValue)}
                  >
                    <Slider.Track className="relative flex-grow h-2 bg-gray-200 rounded-full">
                      <Slider.Range className="absolute bg-primary h-full rounded-full" />
                    </Slider.Track>
                    <Slider.Thumb className="block w-4 h-4 bg-primary rounded-full" />
                  </Slider.Root>
                  <div className="flex justify-between mt-2">
                    <div className="text-center">
                      <p className="text-sm font-bold">${value[0]}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold">
                        ${Number(property.price) + Number(500000)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center pb-4">
                  <Button type="submit" onClick={handleBid} className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] hover:bg-blue-950 opacity-100">
                    Bid Property
                  </Button>
                </div>
              </div>
            </div>
            <div className="map-container w-[300px] h-[422px] my-5 ">
              <iframe
                width={'100%'}
                height="422"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798885585!2d-74.25987368796863!3d40.6976700635874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bd1ae2c1fb%3A0x81148f87b89f46da!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1691945310950!5m2!1sen!2sbd"
                allowFullScreen
              ></iframe>
            </div>
          </aside>
        </div>
        <Amenities/>
      </Container>
      <OtherServices/>
      <PropertiesGridView
        properties={properties}
        isLoading={isLoading}
        seeAllLink={"/searchResult"}
        title="Popular Property"
      />
    </div>
  );
};

export default PropertyDetailsLayout;
