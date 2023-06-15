

const TrendingDestinations = () => {
    return (
        <div>
            <h1 className="lg:ml-20 ml-10 text-2xl font-semibold">Trending destinations</h1>
            <p className="lg:ml-20 ml-10 mb-3">Most popular choices for travellers from Bangladesh</p>


            <div className=" lg:mx-10">
            <div className="grid m-5 grid-cols-1 lg:grid-cols-2 gap-5">
                
            <div className="relative block group">
                <img
                    src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                    alt=""
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute top-3 p-6">
                    <h3 className="text-xl font-medium text-white">Bangladesh</h3>
                </div>
            </div>
                
            <div className="relative block group">
                <img
                    src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?b=1&s=612x612&w=0&k=20&c=3PEobOthDnogYweVRbKoRqf7-p1aB6UQvKXSyYdDmVY="
                    alt=""
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute top-3 p-6">
                    <h3 className="text-xl font-medium text-white">India</h3>
                </div>
            </div>

            </div>


            <div className="grid m-5 grid-cols-1 lg:grid-cols-3 gap-5">

                
            <div className="relative block group">
                <img
                    src="https://www.thoughtco.com/thmb/mmpjK8CDFzUJGNJ3-OaqLUwutjU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-480604953-589aac555f9b5874ee32b9b1.jpg"
                    alt=""
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute top-3 p-6">
                    <h3 className="text-xl font-medium text-white">Nepal</h3>
                </div>
            </div>
                
            <div className="relative block group">
                <img
                    src="https://www.state.gov/wp-content/uploads/2022/02/shutterstock_1025960785-2560x1300.jpg"
                    alt=""
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute top-3 p-6">
                    <h3 className="text-xl font-medium text-white">Australia</h3>
                </div>
            </div>
                
            <div className="relative block group">
                <img
                    src="https://static.independent.co.uk/2023/05/03/17/iStock-1202982084.jpg"
                    alt=""
                    className="h-[220px] w-full object-cover transition duration-500 group-hover:opacity-90"
                />
                <div className="absolute top-3 p-6">
                    <h3 className="text-xl font-medium text-white">Indonesia</h3>
                </div>
            </div>

          

            </div>
            </div>


        </div>
    );
};

export default TrendingDestinations;