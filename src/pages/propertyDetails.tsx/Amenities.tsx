import { FaPowerOff, FaBuilding, FaSwimmer, FaDumbbell, FaTree, FaCar, FaShieldAlt, FaWater, FaLeaf, FaRulerCombined, FaWrench, FaParking, FaPhone, FaBroom, FaTrash, FaTshirt, FaWifi, FaTv, FaGasPump, FaRunning, FaChild } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { FaTableTennisPaddleBall } from "react-icons/fa6";

const Amenities = () => {
  const amenities = [
    { icon: <FaPowerOff />, label: "Power Back Up" },
    { icon: <FaBuilding />, label: "Lift" },
    { icon: <FaSwimmer />, label: "Club House" },
    { icon: <FaDumbbell />, label: "Gymnasium" },
    { icon: <FaTree />, label: "Park" },
    { icon: <FaCar />, label: "Reserved Parking" },
    { icon: <FaShieldAlt />, label: "Security" },
    { icon: <FaWater />, label: "Water Storage" },
    { icon: <FaLeaf />, label: "Private Terrace/Garden" },
    { icon: <FaRulerCombined />, label: "Vaastu Compliant" },
    { icon: <FaWrench />, label: "Service/Goods Lift" },
    { icon: <FaParking />, label: "Visitor Parking" },
    { icon: <FaPhone />, label: "Intercom Facility" },
    { icon: <FaBroom />, label: "Maintenance Staff" },
    { icon: <FaTrash />, label: "Waste Disposal" },
    { icon: <FaTshirt />, label: "Laundry Service" },
    { icon: <FaWifi />, label: "Internet/Wi-Fi Connectivity" },
    { icon: <FaTv />, label: "DTH Television Facility" },
    { icon: <FaGasPump />, label: "Piped Gas" },
    { icon: <FaRunning />, label: "Jogging and Strolling Track" },
    { icon: <FaTableTennisPaddleBall />, label: "Outdoor Tennis Courts" },
    { icon: <MdOutlineSchool />, label: "Early Learning Centre" },
    { icon: <FaChild />, label: "Kids Play Area" },
  ];

  return (
    <div>
      <div className="border p-6 rounded-lg bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Amenities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center">
              <div className="text-primary text-2xl mr-3">
                {amenity.icon}
              </div>
              <span className="text-sm text-gray-700">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
