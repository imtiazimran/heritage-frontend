import AboutCard from "@/pages/about/AboutCard";
import Consultation from "@/pages/about/Consultation";
import Header from "@/pages/about/Header";
import Team from "@/pages/about/Team";
import FlatSummery from "@/pages/buyerScreen/FlatSummery";
import Testimonials from "@/pages/buyerScreen/Testimonials";

const About = () => {
  return (
    <div>
      <Header />
      <div className="py-10">
        <FlatSummery />
      </div>
      <AboutCard />
      <Team/>
      <Consultation/>
      <Testimonials/>
    </div>
  );
};

export default About;
