import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
        );
    }



    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
        );
    }




const ExploreBangladesh = () => {
    

    // Animation 
    useEffect(() => {
        AOS.init();
    },[])




    


        const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
            };




    return (
        <div data-aos="fade-up" className="my-10 lg:my-20">
            
            <div className="mx-10">
            <h1 className="ml-5 text-2xl font-semibold">Explore Bangladesh</h1>
            <p className="ml-5 mb-3">These popular destinations have a lot to offer</p>
            <Slider {...settings}>
                    
                <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="Home"
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-24 w-32 rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">$240,000</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Park Road</dd>
                        </div>
                        </dl>

                    </div>
                </div>
                

                    
                <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="Home"
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-24 w-32 rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">$240,000</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Park Road</dd>
                        </div>
                        </dl>

                    </div>
                </div>
                

                    
                <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="Home"
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-24 w-32 rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">$240,000</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Park Road</dd>
                        </div>
                        </dl>

                    </div>
                </div>
                

                    
                <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="Home"
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-24 w-32 rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">$240,000</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Park Road</dd>
                        </div>
                        </dl>

                    </div>
                </div>
                

                    
                <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="Home"
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-24 w-32 rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">$240,000</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Park Road</dd>
                        </div>
                        </dl>

                    </div>
                </div>
                

                    
                <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="Home"
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-24 w-32 rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">$240,000</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Park Road</dd>
                        </div>
                        </dl>

                    </div>
                </div>
                

                    
                <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="Home"
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-24 w-32 rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">$240,000</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Park Road</dd>
                        </div>
                        </dl>

                    </div>
                </div>
                

                    
                <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="Home"
                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="h-24 w-32 rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                        <div>
                            <dt className="sr-only">Price</dt>

                            <dd className="text-sm text-gray-500">$240,000</dd>
                        </div>

                        <div>
                            <dt className="sr-only">Address</dt>

                            <dd className="font-medium">Park Road</dd>
                        </div>
                        </dl>

                    </div>
                </div>
                




            </Slider>
            </div>
        </div>
    );
};

export default ExploreBangladesh;