import Banner from "../Components/Home/Banner";
import BrowseByPropertyType from "../Components/Home/BrowseByPropertyType";
import ExploreBangladesh from "../Components/Home/ExploreBangladesh";
import Offers from "../Components/Home/Offers";
import QuickAndEasyTripPlanner from "../Components/Home/QuickAndEasyTripPlanner";
import TravelMoreSpendLess from "../Components/Home/TravelMoreSpendLess";
import TrendingDestinations from "../Components/Home/TrendingDestinations";

const Home = () => {
    return (
        <>
            <Banner />
            <Offers />
            <TrendingDestinations />
            <ExploreBangladesh />
            <BrowseByPropertyType />
            <QuickAndEasyTripPlanner />
            <TravelMoreSpendLess />
        </>
    );
};

export default Home;