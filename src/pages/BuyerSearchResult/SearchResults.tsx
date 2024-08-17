import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Container from "@/utils/Container";
import { FaLocationPin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";
import Pagination from "@/utils/Pagination";
import Loading from "@/utils/Loading";

// Define the types for the property details and the property itself
interface PropertyDetail {
  label: string;
  value: string;
  icon: string;
}

interface IProperty {
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

// PropertyCard Component
const PropertyCard: React.FC<{ property: IProperty }> = ({ property }) => {
  return (
    <Link key={property._id} to={`/propertyDetails/${property._id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex md:gap-4 mb-6">
        <img
          className="w-full object-cover md:w-1/3"
          src={property.image[0]}
          alt={property.title}
        />
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <h1 className="text-lg font-semibold">{property.title}</h1>
            <p className="flex items-center text-gray-500 text-sm mt-2">
              <FaLocationPin className="text-secondary mr-2" />
              {property.location}
            </p>
            <h1 className="text-xl font-semibold mt-2">${property.price}</h1>
          </div>
          <Button variant="outline" className="mt-4">
            Bid Property
          </Button>
          <div className="mt-4 border-t border-gray-300 pt-2">
            <div className="flex items-center">
              <span className="text-sm font-medium">Property Details</span>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {property.details.map((detail, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img
                    className="w-6 h-6"
                    src={detail.icon}
                    alt={detail.label}
                  />
                  <div>
                    <h2 className="text-sm font-medium">{detail.label}</h2>
                    <p className="text-sm text-gray-600">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// SearchResults Component
const SearchResults: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [limit, setLimit] = useState(10); // Default limit
  const [page, setPage] = useState(1);

  const searchQuery = {
    search: params.get("search"),
    location: params.get("location"),
    propertyType: params.get("propertyType"),
    price: params.get("budget"),
    page,
    limit,
  };

  const searchParams = Object.entries(searchQuery)
    .filter(([, value]) => value) // Filter out empty values
    .map(([key, value]) => ({ name: key, value }));

  const { data, isLoading } = useGetPropertiesQuery(searchParams);
  const properties = data?.data;
  const pagination = data?.meta;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // Reset to the first page when limit changes
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container className="py-10">
      <div className="w-full md:w-[70%]">
        <div>
          <div className="bar flex flex-col md:flex-row gap-3 md:gap-10 border-b py-4">
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
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
        {pagination && (
          <Pagination
            page={pagination.page}
            limit={pagination.limit}
            total={pagination.total}
            totalPage={pagination.totalPage}
            onPageChange={handlePageChange}
            onLimitChange={handleLimitChange}
          />
        )}
      </div>
    </Container>
  );
};

export default SearchResults;
