import Navbar from "@/components/common/Navbar";
import FlatSummery from "@/pages/buyerScreen/FlatSummery";
import Header from "@/pages/buyerScreen/Header";

const BuyerScreen = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <FlatSummery/>
        </div>
    );
};

export default BuyerScreen;
