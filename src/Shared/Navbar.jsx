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
              <button onClick={() => window.currencyModals.showModal()}>
                BDT
              </button>
              <CurrencyModals />
            </div>
            <div>
              <div className="avatar mt-1">
                <div className="w-6 rounded-full">
                  <button onClick={() => window.countriesModals.showModal()}>
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </button>
                  <CountriesModals />
                </div>
              </div>
            </div>
            <h1>???</h1>
            <h1>list of progress</h1>
            <div className="flex gap-3">
              <button className="border p-1 text-black bg-white">
                Register
              </button>
              <button className="border p-1 text-black bg-white">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
