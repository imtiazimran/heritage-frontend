import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProperty } from "../BuyerSearchResult/SearchResults";
import PropertyDetailsLayout from "@/layout/PropertyDetails";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState([20000]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("/properties.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: IProperty[] = await response.json();
        setProperties(data);
      } catch (error) {
        setError("Error fetching properties");
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const propertyId = id ? Number(id) : null;
  const property = properties.find((prop) => prop.id === propertyId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
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
