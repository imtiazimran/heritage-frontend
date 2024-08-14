import { Button } from "@/components/ui/button";
import Container from "@/utils/Container";

const Consultation = () => {
  return (
    <Container className="py-10">
      <div className="flex justify-between ">
        <div className="flex flex-col justify-between w-2/3 ">
          <div className="flex items-center gap-2 mt-4">
            <div className="w-8 border h-[1px] border-secondary"></div>
            <p className="text-secondary font-semibold">
              Meet the Team For Book Consultation
            </p>
          </div>
          <h1 className="text-3xl font-semibold">
            Meet the stewards of your <br /> heritage journey
          </h1>
          <p className="text-muted md:pr-20">
            each member an embodiment of expertise and warmth, dedicated to
            guiding you home, every step of the way.
          </p>
          <Button className="btn-primary w-1/4 hover:bg-blue-950">Book Consult Now</Button>
        </div>
        <div>
            <img className="h-[304px]" src="https://img.freepik.com/premium-photo/photo-real-state-house-holding-hand_763111-15176.jpg" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Consultation;
