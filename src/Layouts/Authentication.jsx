import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const Authentication = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Authentication;