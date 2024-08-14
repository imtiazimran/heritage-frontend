import PropertiesGridView from "@/components/propertyView/PropertiesGridView";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";

const NewListedProperties = () => {
    const { data, isLoading } = useGetPropertiesQuery(undefined);
    const properties = data?.data;
    return (
        <div>
           <PropertiesGridView properties={properties} isLoading={isLoading} seeAllLink={"/searchResult"} title="New Listed Property"/>
        </div>
    );
};

export default NewListedProperties;
