import { FaBed, FaBath, FaRegBuilding, FaCouch } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md mx-2">
      <h2 className="text-lg font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-4 mb-4">
        <div className="flex items-center">
          <FaBed className="text-xl mr-2" />
          <span>2 Beds</span>
        </div>
        <div className="flex items-center">
          <FaBath className="text-xl mr-2" />
          <span>2 Bath</span>
        </div>
        <div className="flex items-center">
          <FaRegBuilding className="text-xl mr-2" />
          <span>2 Balcony</span>
        </div>
        <div className="flex items-center">
          <FaCouch className="text-xl mr-2" />
          <span>Fully Furnished</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 text-sm">
        <div>
          <h3 className="font-semibold">Carpet Area</h3>
          <p>2000 sqft</p>
          <p>$225/sqft</p>
        </div>
        <div>
          <h3 className="font-semibold">Floor</h3>
          <p>Second (Out of 6th floor)</p>
        </div>
        <div>
          <h3 className="font-semibold">Transaction Type</h3>
          <p>Ready to move</p>
        </div>
        <div>
          <h3 className="font-semibold">Lift</h3>
          <p>1</p>
        </div>
        <div>
          <h3 className="font-semibold">Facing</h3>
          <p>North - East</p>
        </div>
        <div>
          <h3 className="font-semibold">Additional Rooms</h3>
          <p>1 servant room & 1 guest room</p>
        </div>
        <div>
          <h3 className="font-semibold">Age of Construction</h3>
          <p>New Construction</p>
        </div>

      </div>
    </div>
  );
};

export default Overview;
