const Banner = () => {
  return (
    <div className="bg-[#003580] h-44 text-white font-bold">
      <div className="max-w-screen-xl  px-8 mx-auto">
        <h1 className="text-5xl font-bold">Lets find your next stay</h1>
        <p className="font-bold mt-4 text-xl">
          Find affordable rates for hotels, residences, and much more.
        </p>
      </div>


      <div className="bg-white h-[8vh] text-black w-9/12 mx-auto mt-12 border border-[#003580]  grid grid-cols-7">
        <div className="col-span-2 border-r border-[#003580]">
        <label
            className="relative block overflow-hidden bg-transparent pt-3 "
          >
            <input type="email" id="UserEmail" placeholder="Email" className="peer w-full border-none bg-transparent p-0 px-3 placeholder-transparent  focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              Search
            </span>
          </label>
        </div>
        
        <div className="col-span-2 border border-[#003580]">
          <input className="w-full h-full" type="datetime-local" name="" id="" />
        </div>
        <div className="col-span-2 border-r border-[#003580]">
        <div className="relative">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        className="flex cursor-pointer h-[8vh] items-center justify-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                    >
                        <span className="text-sm font-medium"> Add Room </span>

                        <span className="transition group-open:-rotate-180">
                        
                        </span>
                    </summary>

                    <div
                        className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2"
                    >
                        <div className="w-96 p-5 rounded border border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700"> </span>
                            <button 
                            type="button"
                            className="text-sm text-gray-900 underline underline-offset-4"
                            >
                            Reset
                            </button>
                        </header>




                        <div className="flex justify-around">
                            <p>Adults</p>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                              >
                                &minus;
                              </button>

                              <input
                                type="number"
                                id="Quantity"
                                value="1"
                                className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                              />

                              <button
                                type="button"
                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          

                        <div className="flex justify-around">
                            <p>Children</p>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                              >
                                &minus;
                              </button>

                              <input
                                type="number"
                                id="Quantity"
                                value="1"
                                className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                              />

                              <button
                                type="button"
                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                              >
                                +
                              </button>
                            </div>
                          </div>





                        <div className="flex justify-around">
                            <p className="ml-6">Room</p>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                              >
                                &minus;
                              </button>

                              <input
                                type="number"
                                id="Quantity"
                                value="1"
                                className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                              />

                              <button
                                type="button"
                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                              >
                                +
                              </button>
                            </div>
                          </div>



                          <button className="btn btn-outline hover:bg-sky-500 w-full hover:border-0" type="submit">Done</button>






                        </div>
                    </div>
                    </details>
                </div>
        </div>
        <button className="col-span-1 bg-[#1e63c4] text-white">Search</button>
      </div>
    </div>
  );
};

export default Banner;
