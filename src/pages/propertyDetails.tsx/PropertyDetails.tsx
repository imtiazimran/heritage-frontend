/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useParams } from "react-router-dom";
import PropertyDetailsLayout from "@/layout/PropertyDetails";
import { useGetPropertyQuery } from "@/redux/features/properties/propertyApi";
import Loading from "@/utils/Loading";
import { usePostBidMutation } from "@/redux/features/bid/bidApi";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/features/authentication/authSlice";
import Swal from "sweetalert2";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetPropertyQuery(id);
  const property = data?.data;
  const [placeBid] = usePostBidMutation();
  const user = useAppSelector(selectUser);
  const [value, setValue] = useState([property?.currentBid || 0]);
console.log(property);
  const handleBid = async () => {
    try {
      const res = await placeBid({
        property: id,
        amount: value[0],
        bidder: user?._id,
      }).unwrap();
      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Your bid was placed successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (err: any) {
      console.log(err);
      Swal.fire({
        title: "Error!",
        text: err?.data.message +  " current bid Is $" + property?.currentBid || "Something went wrong.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.log(err);
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <p>Error: {error.toString()}</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <PropertyDetailsLayout
      property={property}
      value={value}
      handleBid={handleBid}
      setValue={setValue}
    />
  );
};

export default PropertyDetails;
