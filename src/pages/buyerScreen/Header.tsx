/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
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
import { Link } from "react-router-dom";

const tabOptions = [
  { value: "buy", label: "Buy" },
  { value: "rent", label: "Rent" },
  { value: "pg", label: "PG" },
  { value: "plot", label: "Plot" },
  { value: "commercial", label: "Commercial" },
];

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

const propertyTypes = ["Apartment", "Plot", "Builder Floor", "Villa"];

const Header = () => {
  const [query, setQuery] = useState({
    search: "",
    location: "",
    propertyType: "",
    budget: "",
    tab: "plot",
  });

  const handleInputChange = (e: any) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

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
        <div className="absolute top-[25%] inset-0 flex flex-col items-center py-8 text-center px-4 w-[984px] h-[376px] rounded shadow-lg bg-white mx-auto">
          <div>
            <Tabs
              defaultValue="plot"
              className="w-full bg-white"
              onValueChange={(value) => setQuery({ ...query, tab: value })}
            >
              <TabsList className="bg-white border-b block w-[900px] mx-auto text-left">
                {tabOptions.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {tabOptions.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      name="search"
                      value={query.search}
                      onChange={handleInputChange}
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
                      <Select
                        onValueChange={(value) =>
                          setQuery({ ...query, location: value })
                        }
                      >
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
                      <Select
                        onValueChange={(value) =>
                          setQuery({ ...query, propertyType: value })
                        }
                      >
                        <SelectTrigger className="w-[180px] bg-accent">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          {propertyTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
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
                      <Input
                        name="budget"
                        value={query.budget}
                        onChange={handleInputChange}
                        className="w-[180px] bg-accent"
                      />
                    </div>
                  </div>
                  <Link
                    className="flex justify-center items-center gap-2"
                    to={`/searchResult?tab=${query.tab}&search=${query.search}&location=${query.location}&propertyType=${query.propertyType}&budget=${query.budget}`}
                  >
                    <Button className="bg-primary text-white text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[24px] py-[16px] gap-[12px] opacity-100 w-full hover:bg-blue-800">
                      <FaSearch /> <span>Find Property</span>
                    </Button>
                  </Link>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
