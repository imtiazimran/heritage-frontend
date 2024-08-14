import PropertiesGridView from "@/components/propertyView/PropertiesGridView";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";

const PopularProperties = () => {
  const { data, isLoading } = useGetPropertiesQuery(undefined);
  const properties = data?.data;
  return (
    <div>
      <PropertiesGridView
        properties={properties}
        isLoading={isLoading}
        seeAllLink={"/searchResult"}
        title="Popular Property"
      />
    </div>
  );
};

export default PopularProperties;
