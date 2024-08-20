import Container from "@/utils/Container";

const AboutCard = () => {
  return (
    <Container className="py-10">
      {/* Our Story Section */}
      <div className="relative h-auto lg:h-[583px] mb-[120px] flex flex-col lg:flex-row">
        <div
          className="relative w-full lg:w-[70%] h-[300px] lg:h-[80%] bg-no-repeat bg-cover bg-center z-10"
          style={{
            backgroundImage: `url(https://thedailynotes.com/wp-content/uploads/2024/01/Investing-In-Real-Estate.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
        </div>
        <div className="absolute inset-0 w-full lg:w-[50%] h-[240px] lg:h-auto bg-accent top-1/2 lg:top-auto lg:left-1/2 px-4 z-50">
          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 border h-[1px] border-secondary"></div>
            <p className="text-secondary font-semibold">Our Story</p>
          </div>
          <h1
            className="text-title text-[24px] lg:text-[36px] font-bold mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            Efficient and Transparent Home Buying Solutions
          </h1>
          <p
            className="text-muted text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] font-medium"
            style={{ fontFamily: "Poppins" }}
          >
            To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs...
          </p>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="relative h-auto lg:h-[583px] flex flex-col lg:flex-row-reverse mt-10">
        <div
          className="relative w-full lg:w-[70%] h-[300px] lg:h-[80%] bg-no-repeat bg-cover bg-center z-10"
          style={{
            backgroundImage: `url(https://thedailynotes.com/wp-content/uploads/2024/01/Investing-In-Real-Estate.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
        </div>
        <div className="absolute inset-0 w-full lg:w-[50%] h-[240px] lg:h-auto bg-accent top-1/2 lg:top-auto lg:right-1/2 px-4 z-50 ">
          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 border h-[1px] border-secondary"></div>
            <p className="text-secondary font-semibold">Mission Statement</p>
          </div>
          <h1
            className="text-title text-[24px] lg:text-[36px] font-bold mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            Efficient and Transparent Home Buying Solutions
          </h1>
          <p
            className="text-muted text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] font-medium"
            style={{ fontFamily: "Poppins" }}
          >
            To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs...
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutCard;
