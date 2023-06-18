

const FindAStay = () => {
    return (
        <div>
            <div className="grid grid-cols-3 bg-base-100 shadow-lg">
                <div className="card-body col-span-2">
                    <h2 className="card-title">Take your longest holiday yet</h2>
                    <p>
                    Browse properties offering long-term stays, many at reduced monthly rates.
                    </p>
                    <div className="card-actions">
                        <button className="btn bg-sky-500 hover:bg-sky-600 text-white">Find a stay</button>
                    </div>
                </div>

                <img className="col-span-1 h-full" src="https://quaysidehotel.co.uk/wp-content/uploads/2022/09/Benefits-to-booking-a-room-directly-with-a-hotel-over-a-third-party-travel-site.jpg" alt="Booking"/>
            </div>
        </div>
    );
};

export default FindAStay;