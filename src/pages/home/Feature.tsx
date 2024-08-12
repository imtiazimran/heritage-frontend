import { Button } from "@/components/ui/button";
import Container from "@/utils/Container";

const Feature = () => {
  return (
    <Container className="py-8 my-10">
      <div className="relative flex justify-between items-center">
        {/* Background Image */}
        <div className="w-full md:w-1/2 h-64 relative">
          <img
            src="https://bandaproperty.com/wp-content/uploads/2023/03/Perry-Street_Living-Room_040-scaled.jpg"
            alt="Background Image"
            className="w-[80%] h-full object-cover rounded-lg"
          />
          {/* Overlay Image */}
          <img
            src="https://bandaproperty.com/wp-content/uploads/2023/06/230518-Banda-Paris-02-Print-scaled.jpg"
            alt="Overlay Image"
            className="absolute top-1/4 left-1/4 w-[70%] h-auto rounded-lg border-4 border-white shadow-lg z-10"
          />
        </div>

        <div className="description w-full md:w-1/2 pl-8">
          <div className="flex items-center gap-2">
            <div className="w-8 border h-[1px] border-secondary"></div>
            <p className="text-secondary font-semibold">Property Buying</p>
          </div>
          <p className="block text-3xl font-bold text-gray-900">
            Efficient and Transparent <br /> Home Buying Solutions
          </p>
          <p className="mt-4 text-lg text-gray-700">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <Button className="mt-6 w-[210px] h-[56px] px-6 py-4 bg-[#ECF5FF] text-primary font-semibold text-base rounded-l-xl border border-transparent shadow-md transition-opacity duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
            Find Property
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Feature;
