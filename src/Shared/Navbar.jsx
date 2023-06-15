import NavLogo from "../Utilities/Navbar/NavLogo";


const Navbar = () => {
    return (
        <div>
            <div className=" max-w-screen-xl flex justify-between px-4 py-8 sm:px-6 lg:px-8">
                <NavLogo />
                <div className="flex items-center justify-end gap-4">
                <div className="flex items-center gap-4">
                    <div className="relative">
                    <label className="sr-only"> Search </label>

                    <input
                        className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                        id="search"
                        type="search"
                        placeholder="Search website..."
                    />

                    <button
                        type="button"
                        className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                    >
                        <span className="sr-only">Search</span>
                        
                    </button>
                    </div>

                    <a
                    href="#"
                    className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                    >
                    <span className="sr-only">Notifications</span>
                    
                    </a>
                </div>

                <span
                    aria-hidden="true"
                    className="block h-6 w-px rounded-full bg-gray-200"
                ></span>

                <a href="#" className="block shrink-0">
                    <span className="sr-only">Profile</span>
                    <img
                    alt="Man"
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-10 w-10 rounded-full object-cover"
                    />
                </a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;