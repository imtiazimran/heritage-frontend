import Testimonials from "@/pages/buyerScreen/Testimonials";
import AskingForLoan from "@/pages/BuyerSearchResult/AskingForLoan";
import SearchResults from "@/pages/BuyerSearchResult/SearchResults";


const BuyerSearchResult = () => {
    return (
        <div>
            <SearchResults />
            <AskingForLoan/>
            <Testimonials/>
        </div>
    );
};

export default BuyerSearchResult;
