import FindAStay from "../../Utilities/Offers/FindAStay";
import FindGetawayDetails from "../../Utilities/Offers/FindGetawayDetails";


const Offers = () => {
    return (
        <div className="my-20">
            <h1 className="lg:ml-20 ml-10 text-2xl font-semibold">Offers</h1>
            <p className="lg:ml-20 ml-10 mb-3">Promotions, deals and special offers for you</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mx-10">
                <FindAStay />
                <FindGetawayDetails />
            </div>
        </div>
    );
};

export default Offers;