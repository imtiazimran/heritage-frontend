import Container from "@/utils/Container";
import homeIcon from "../../assets/icon.png"
const OtherServices = () => {
  return (
    <Container className="py-8 my-14">
      <h1 className="text-5xl font-bold text-center my-10">Other Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 justify-items-center">
        <div className="flex gap-5 justify-center w-[350px] bg-[#ECF5FF] py-5 rounded">
            <div className="w-8 ">
                <img src={homeIcon} alt="" />
            </div>
            <div className="w-2/3" style={{ fontFamily: 'Montserrat' }}>
                <h1 className="font-semibold text-2xl mb-4 text-[#111827]">Advanced Property Search</h1>
                <p className="text-[#6B7280]">Effortlessly find your dream property with advanced search filters.</p>
            </div>
        </div>
        <div className="flex gap-5 justify-center w-[350px] bg-[#ECF5FF] py-5 rounded">
            <div className="w-8 ">
                <img src={homeIcon} alt="" />
            </div>
            <div className="w-2/3" style={{ fontFamily: 'Montserrat' }}>
                <h1 className="font-semibold text-2xl mb-4 text-[#111827]">Virtual Tours and Multimedia</h1>
                <p className="text-[#6B7280]">Explore properties through immersive virtual tours and HD photos.</p>
            </div>
        </div>
        <div className="flex gap-5 justify-center w-[350px] bg-[#ECF5FF] py-5 rounded">
            <div className="w-8 ">
                <img src={homeIcon} alt="" />
            </div>
            <div className="w-2/3" style={{ fontFamily: 'Montserrat' }}>
                <h1 className="font-semibold text-2xl mb-4 text-[#111827]">Secure Online Transactions</h1>
                <p className="text-[#6B7280]">Ensure secure transactions and e-sign documents seamlessly online.</p>
            </div>
        </div>
      </div>
    </Container>
  );
};

export default OtherServices;
