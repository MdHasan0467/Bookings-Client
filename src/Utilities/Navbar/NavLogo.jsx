import { IoIosBed } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { BsTaxiFrontFill } from "react-icons/bs";
import { MdAttractions, MdOutlineFlightTakeoff } from "react-icons/md";
import { Link } from "react-router-dom";
const NavLogo = () => {
  return (
    <div>
      <Link to="/" className="text-4xl font-bold">Booking</Link>
      <div className="max-w-screen-sm  mx-auto">
        <div className="flex gap-8 mt-6">
          <div className="flex  gap-3">
            <IoIosBed className="mt-1" />
            <h1> Stays</h1>
          </div>
          <div className="flex gap-2 ">
            <MdOutlineFlightTakeoff className="mt-1" />
            <h1>Flights</h1>
          </div>
          <div className="flex gap-2">
            <FaCar className="mt-1" />
            <h1>Car rentals</h1>
          </div>
          <div className="flex gap-2">
            <MdAttractions className="mt-1" />
            <h1>Attractions</h1>
          </div>
          <div className="flex gap-2">
            <BsTaxiFrontFill className="mt-1" />
            <h1>Airport taxis</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLogo;
