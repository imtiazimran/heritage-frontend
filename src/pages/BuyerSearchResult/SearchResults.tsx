import  { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Container from "@/utils/Container";
import { FaLocationPin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";
import Pagination from "@/utils/Pagination"; // Adjust the import path as needed
import Loading from '@/utils/Loading';

// Define the types for the property details and the property itself
interface PropertyDetail {
  label: string;
  value: string;
  icon: string;
}

export interface IProperty {
  _id: number;
  title: string;
  location: string;
  price: string;
  totalArea: string;
  status: string;
  image: string[];
  details: PropertyDetail[];
  currentBid: number;
  minBid: number;
  maxBid: number;
}

const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [limit, setLimit] = useState(10); // Default limit
  const [page, setPage] = useState(1);

  const searchQuery = {
    search: params.get("search"),
    location: params.get("location"),
    propertyType: params.get("propertyType"),
    price: params.get("budget"),
    page: page,
    limit: limit,
  };

  const searchParams = Object.entries(searchQuery)
    .filter(([, value]) => value) // Filter out empty values
    .map(([key, value]) => ({ name: key, value }));

  const { data, isLoading } = useGetPropertiesQuery(searchParams);
  const properties = data?.data;
  const pagination = data?.meta;

  useEffect(() => {
    // Trigger data fetch whenever `page` or `limit` changes
    // The API hook will handle the new request automatically
  }, [page, limit]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // Reset to the first page when limit changes
  };

  if (isLoading) {
    return <Loading/>;
  }

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
          <h1 className="text-xl font-bold my-4">
            {pagination?.total} Results on {params.get("tab")}
            
          </h1>
        </div>
        <div>
          {properties?.map((property: IProperty) => (
            <Link key={property._id} to={`/propertyDetails/${property._id}`}>
              <div className="grid grid-cols-4 gap-2 mb-10">
                <div>
                  <img
                    className="w-full h-full object-cover rounded-lg"
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
                        ${property.price}
                      </h1>
                      <Button variant={"outline"} className="my-3">
                        Bid Property
                      </Button>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="ml-2 w-[35%]">Property Details</span>
                      <span className="w-full border-t border-gray-400"></span>
                    </div>
                    <div className="flex justify-between mt-4">
                      {property.details.map(
                        (detail: PropertyDetail, index: number) => (
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
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {pagination && (
          <Pagination
            page={pagination?.page}
            limit={pagination?.limit}
            total={pagination?.total}
            totalPage={pagination?.totalPage}
            onPageChange={handlePageChange}
            onLimitChange={handleLimitChange}
          />
        )}
      </div>
    </Container>
  );
};

export default SearchResults;
