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






const TravelMoreSpendLess = () => {
       

    // Animation 
    useEffect(() => {
        AOS.init();
    },[])




    


        const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
            slidesToShow: 4,
            slidesToScroll: 4,
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
        <div>
            <h1 className="ml-5 lg:ml-16 text-2xl font-semibold">Travel more, spend less</h1>
            <div className="mx-10">
            <Slider {...settings}>

                <div className="relative block rounded-sm border border-blue-500 bg-blue-500 text-white p-4 shadow-xl "
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-3xl font-bold sm:text-4xl">100+</h3>
                    </div>

                    <p className="mt-4 font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="relative block border border-blue-500 rounded-sm p-4 shadow-xl "
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-3xl font-bold sm:text-4xl">100+</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="relative block rounded-sm p-4 shadow-xl "
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-3xl font-bold sm:text-4xl">100+</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="relative block rounded-sm p-4 shadow-xl "
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-3xl font-bold sm:text-4xl">100+</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="relative block rounded-sm p-4 shadow-xl "
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-3xl font-bold sm:text-4xl">100+</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="relative block rounded-sm p-4 shadow-xl "
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-3xl font-bold sm:text-4xl">100+</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="relative block rounded-sm p-4 shadow-xl "
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-3xl font-bold sm:text-4xl">100+</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="relative block rounded-sm p-4 shadow-xl "
                    >
                    <div className="flex items-center gap-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                        </svg>

                        <h3 className="text-3xl font-bold sm:text-4xl">100+</h3>
                    </div>

                    <p className="mt-4 font-medium text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>


                </Slider>
            </div>
        </div>
    );
};

export default TravelMoreSpendLess;