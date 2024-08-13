import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Feature from "@/pages/home/Feature";
import Header from "@/pages/home/Header";
import OtherServices from "@/pages/home/OtherServices";

const Home = () => {
    return (
        <div>
          <Navbar/>
          <Header/>
          <Feature/>
          <OtherServices/>
          <Footer/>
        </div>
    );
};

export default Home;
