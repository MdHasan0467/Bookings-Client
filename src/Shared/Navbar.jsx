import { Link } from "react-router-dom";
import CountriesModals from "../Modals/CountriesModals";
import CurrencyModals from "../Modals/CurrencyModals";
import NavLogo from "../Utilities/Navbar/NavLogo";

const Navbar = () => {
  return (
    <div id="title" className="bg-[#003580] text-white font-bold">
      <div className=" max-w-screen-xl mx-auto flex justify-between px-4 py-8 sm:px-6 lg:px-8">
        <NavLogo />

        <div>
          <div className="flex justify-between gap-10">
            <div>
              <button className="hover:underline" onClick={() => window.currencyModals.showModal()}>
                BDT
              </button>
              <CurrencyModals />
            </div>
            <div>
              <div className="avatar mt-1">
                <div className="w-6">
                    <button onClick={() => window.countriesModals.showModal()}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/2560px-Flag_of_Bangladesh.svg.png" />
                    </button>
                  <CountriesModals />
                </div>
              </div>
            </div>
            <p>?</p>
            <h1>list of progress</h1>
            <div className="flex gap-3">
              <Link to="/authentication/sign-up" className="border p-1 text-black bg-white">
                Register
              </Link>
              <Link to="/authentication/sign-in" className="border p-1 text-black bg-white">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
