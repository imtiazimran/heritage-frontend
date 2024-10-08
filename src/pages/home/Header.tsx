import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://qtxasset.com/cdn-cgi/image/w=850,h=478,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud5/media/image/GettyImages-1170944737%20%281%29.jpg?VersionId=OBvwO_y6YWxF9qPEvd8qQhiikkCDEsrU)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-12">
        <h1
          className="text-white font-bold text-[32px] sm:text-[48px] lg:text-[64px] leading-tight sm:leading-[56px] lg:leading-[72px] tracking-[-0.02em] mb-4"
          style={{ fontFamily: "Montserrat", maxWidth: "90%", width: "auto" }}
        >
          Your Portal to India's Exquisite Real Estate
        </h1>
        <p
          className="text-white text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium mb-6"
          style={{ fontFamily: "Poppins" }}
        >
          Seamlessly connecting you to the heartbeat of India's prime properties.
        </p>
        <Link to={"/buy"}>
          <Button
            className="bg-primary hover:bg-blue-950 text-white text-[14px] sm:text-[16px] font-medium rounded-tl-[4px] rounded-br-[4px] px-[20px] sm:px-[24px] py-[12px] sm:py-[16px] gap-[8px] sm:gap-[12px] opacity-100"
            style={{ width: "180px", height: "48px", maxWidth: "210px", maxHeight: "56px" }}
          >
            <FaSearch /> Find Property
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;