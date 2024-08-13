import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaDollarSign, FaHome, FaSearch } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Header = () => {
  const Locations = [
    "Delhi",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Noida",
    "Gurgaon",
    "Faridabad",
    "Kanpur",
    "All",
  ];
  return (
    <div className="h-screen">
      <div
        className="relative w-full h-[309px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://qtxasset.com/cdn-cgi/image/w=850,h=478,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud5/media/image/GettyImages-1170944737%20%281%29.jpg?VersionId=OBvwO_y6YWxF9qPEvd8qQhiikkCDEsrU)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
        <div className="absolute top-[25%] inset-0 flex flex-col items-center py-8 text-center px-4 w-[984px] h-[376px] rounded shadow-lg bg-white  mx-auto">
          <div>
            <Tabs defaultValue="plot" className="w-full bg-white">
              <TabsList className="bg-white border-b block w-[900px] mx-auto text-left">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="pg">PG</TabsTrigger>
                <TabsTrigger value="plot">Plot</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
              </TabsList>
              <TabsContent value="buy">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    className="w-full p-4 pl-10 rounded-md border border-gray-200 focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
                <div className="my-10 flex justify-between">
                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaLocationPin className="text-secondary" />
                      Your Location
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaHome className="text-secondary" />
                      Property Type
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaDollarSign className="text-secondary" />
                      Budget
                    </p>
                    <Input className="w-[180px] bg-accent" />
                  </div>
                </div>
                <Button className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] opacity-100 w-full hover:bg-blue-800">
                  <FaSearch /> Find Property
                </Button>
              </TabsContent>
              <TabsContent value="rent">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    className="w-full p-4 pl-10 rounded-md border border-gray-200 focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
                <div className="my-10 flex justify-between">
                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaLocationPin className="text-secondary" />
                      Your Location
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaHome className="text-secondary" />
                      Property Type
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaDollarSign className="text-secondary" />
                      Budget
                    </p>
                    <Input className="w-[180px] bg-accent" />
                  </div>
                </div>
                <Button className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] opacity-100 w-full hover:bg-blue-800">
                  <FaSearch /> Find Property
                </Button>
              </TabsContent>
              <TabsContent value="pg">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    className="w-full p-4 pl-10 rounded-md border border-gray-200 focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
                <div className="my-10 flex justify-between">
                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaLocationPin className="text-secondary" />
                      Your Location
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaHome className="text-secondary" />
                      Property Type
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaDollarSign className="text-secondary" />
                      Budget
                    </p>
                    <Input className="w-[180px] bg-accent" />
                  </div>
                </div>
                <Button className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] opacity-100 w-full hover:bg-blue-800">
                  <FaSearch /> Find Property
                </Button>
              </TabsContent>
              <TabsContent value="plot">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    className="w-full p-4 pl-10 rounded-md border border-gray-200 focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
                <div className="my-10 flex justify-between">
                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaLocationPin className="text-secondary" />
                      Your Location
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaHome className="text-secondary" />
                      Property Type
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaDollarSign className="text-secondary" />
                      Budget
                    </p>
                    <Input className="w-[180px] bg-accent" />
                  </div>
                </div>
                <Button className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] opacity-100 w-full hover:bg-blue-800">
                  <FaSearch /> Find Property
                </Button>
              </TabsContent>
              <TabsContent value="commercial">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    className="w-full p-4 pl-10 rounded-md border border-gray-200 focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
                <div className="my-10 flex justify-between">
                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaLocationPin className="text-secondary" />
                      Your Location
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaHome className="text-secondary" />
                      Property Type
                    </p>
                    <Select>
                      <SelectTrigger className="w-[180px] bg-accent">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="">
                    <p className="text-left flex items-center gap-2 font-semibold my-5">
                      <FaDollarSign className="text-secondary" />
                      Budget
                    </p>
                    <Input className="w-[180px] bg-accent" />
                  </div>
                </div>
                <Button className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] opacity-100 w-full hover:bg-blue-800">
                  <FaSearch /> Find Property
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
