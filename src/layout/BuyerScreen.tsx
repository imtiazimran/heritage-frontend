
import FlatSummery from "@/pages/buyerScreen/FlatSummery";
import Header from "@/pages/buyerScreen/Header";
import NewListedProperties from "@/pages/buyerScreen/NewListedProperties";
import PopularProperties from "@/pages/buyerScreen/PopularProperties";
import Testimonials from "@/pages/buyerScreen/Testimonials";

const BuyerScreen = () => {
    return (
        <div>
            <Header/>
            <FlatSummery/>
            <PopularProperties/>
            <NewListedProperties/>
            <Testimonials/>
        </div>
    );
};

export default BuyerScreen;
