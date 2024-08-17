import { Button } from "@/components/ui/button";
import Container from "@/utils/Container";
import { FaPlayCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <Container className="py-8 my-10  ">
      {/* First Section */}
      <div className="flex flex-wrap justify-between items-center  mb-10 h-screen">
        {/* Background Image */}
        <div className="w-full md:w-1/2 h-64 relative mb-8 md:mb-0 my-10">
          <img
            src="https://bandaproperty.com/wp-content/uploads/2023/03/Perry-Street_Living-Room_040-scaled.jpg"
            alt="Background Image"
            className="w-[70%] h-full object-cover rounded-lg"
          />
          {/* Overlay Image */}

          <FaPlayCircle className=" z-50 text-primary absolute right-[24%] text-5xl bottom-[20%]" />
          <img
            src="https://bandaproperty.com/wp-content/uploads/2023/06/230518-Banda-Paris-02-Print-scaled.jpg"
            alt="Overlay Image"
            className="absolute top-3/4 left-1/4 w-[70%] h-auto rounded-lg border-4 border-white shadow-lg z-10"
          />
        </div>

        <div className="w-full md:w-1/2 pl-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 border h-[1px] border-secondary"></div>
            <p className="text-secondary font-semibold">Property Buying</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-4">
            Efficient and Transparent <br /> Home Buying Solutions
          </p>
          <p className="text-lg text-gray-700 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Link to={"/buy"}>
            <Button className="w-[210px] h-[56px] px-6 py-4 bg-accent text-primary font-semibold text-base rounded-l-xl border border-transparent shadow-md transition-opacity duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
              <FaSearch className="mx-4 text-xl " /> Find Property
            </Button>
          </Link>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-wrap justify-between items-center mb-10 h-screen">
        <div className="w-full md:w-1/2 pl-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 border h-[1px] border-secondary"></div>
            <p className="text-secondary font-semibold">Property Buying</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-4">
            Efficient and Transparent <br /> Home Buying Solutions
          </p>
          <p className="text-lg text-gray-700 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Link to={"/buy"}>
            <Button className="w-[210px] h-[56px] px-6 py-4 bg-accent text-primary font-semibold text-base rounded-l-xl border border-transparent shadow-md transition-opacity duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
              <FaSearch className="mx-4 text-xl " /> Find Property
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 h-64 relative mb-8 md:mb-0">
          <img
            src="https://bandaproperty.com/wp-content/uploads/2023/03/Perry-Street_Living-Room_040-scaled.jpg"
            alt="Background Image"
            className="w-[70%] absolute top-2/4 left-0 h-full object-cover rounded-lg"
          />
          {/* Overlay Image */}

          <FaPlayCircle className=" z-50 text-primary absolute left-[20%] text-5xl top-[35%]" />
          <img
            src="https://bandaproperty.com/wp-content/uploads/2023/06/230518-Banda-Paris-02-Print-scaled.jpg"
            alt="Overlay Image"
            className="absolute -top-1/5 left-1/4 w-[70%] h-auto rounded-lg border-4 border-white shadow-lg z-10"
          />
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-wrap justify-between items-center h-screen">
        {/* Background Image */}
        <div className="w-full md:w-1/2 h-64 relative mb-8 md:mb-0">
          <img
            src="https://bandaproperty.com/wp-content/uploads/2023/03/Perry-Street_Living-Room_040-scaled.jpg"
            alt="Background Image"
            className="w-[70%] h-full object-cover rounded-lg"
          />
          {/* Overlay Image */}
          <FaPlayCircle className=" z-50 text-primary absolute right-[24%] text-5xl bottom-[20%]" />
          <img
            src="https://bandaproperty.com/wp-content/uploads/2023/06/230518-Banda-Paris-02-Print-scaled.jpg"
            alt="Overlay Image"
            className="absolute top-3/4 left-1/4 w-[70%] h-auto rounded-lg border-4 border-white shadow-lg z-10"
          />
        </div>

        <div className="w-full md:w-1/2 pl-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 border h-[1px] border-secondary"></div>
            <p className="text-secondary font-semibold">Property Buying</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-4">
            Efficient and Transparent <br /> Home Buying Solutions
          </p>
          <p className="text-lg text-gray-700 mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Link to={"/buy"}>
            <Button className="w-[210px] h-[56px] px-6 py-4 bg-accent text-primary font-semibold text-base rounded-l-xl border border-transparent shadow-md transition-opacity duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
              <FaSearch className="mx-4 text-xl " /> Find Property
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Feature;
