

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

                <img className="col-span-1 h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh00VbPjud8t8gECWZdI4YIqbiVrT3I4-5JA&usqp=CAU" alt="Movie"/>
            </div>
        </div>
    );
};

export default FindAStay;