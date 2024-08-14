import { useState } from "react";
import { useParams } from "react-router-dom";
import PropertyDetailsLayout from "@/layout/PropertyDetails";
import { useGetPropertyQuery } from "@/redux/features/properties/propertyApi";
import Loading from "@/utils/Loading";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [value, setValue] = useState([20000]);
const {data, isLoading, isError,  error} = useGetPropertyQuery(id);
  const property = data?.data;


  if (isLoading) return <Loading/>;
  if (isError) return <p>Error: {error.toString()}</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <PropertyDetailsLayout
      property={property}
      value={value}
      setValue={setValue}
    />
  );
};

export default PropertyDetails;
