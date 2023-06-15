
const FindGetawayDetails = () => {
    return (
            <div className="relative h-full block overflow-hidden rounded-xl bg-[url(https://cdn.24.co.za/files/Cms/General/d/8488/29ba2037b9eb4334a387b9e20e46f398.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div className="absolute inset-0 bg-black/25"></div>

                <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                    <div className="text-white">
                    <h3 className="text-xl font-bold sm:text-2xl">The great getaway, your way</h3>

                    <p className="text-sm">Save at least 15% on stays worldwide, from relaxing retreats to off-grid adventures</p>
                    <div className="card-actions">
                        <button className="btn bg-sky-500 border-0 mt-5 hover:bg-sky-600 text-white">Find Getaway Details</button>
                    </div>
                    </div>

                    <span
                    className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                    >
                    4.5

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    </span>
                </div>
            </div>
    );
};

export default FindGetawayDetails;