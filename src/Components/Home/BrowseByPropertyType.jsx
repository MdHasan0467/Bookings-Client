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





const BrowseByPropertyType = () => {
    

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
            <h1 className="ml-5 text-2xl font-semibold">Browse by property type</h1>
            <Slider {...settings}>
                    
                <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                    <img
                        alt="Hotel"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/295683402.jpg?k=6e19f3e9a3a628fdfa1f0c18cd3b6de63e58e73ff4f357342029c5b296ba9591&o=&hp=1"
                        className="h-52 w-full rounded-md object-cover"
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
                        alt="Hotel"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/295683402.jpg?k=6e19f3e9a3a628fdfa1f0c18cd3b6de63e58e73ff4f357342029c5b296ba9591&o=&hp=1"
                        className="h-52 w-full rounded-md object-cover"
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
                        alt="Hotel"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/295683402.jpg?k=6e19f3e9a3a628fdfa1f0c18cd3b6de63e58e73ff4f357342029c5b296ba9591&o=&hp=1"
                        className="h-52 w-full rounded-md object-cover"
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
                        alt="Hotel"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/295683402.jpg?k=6e19f3e9a3a628fdfa1f0c18cd3b6de63e58e73ff4f357342029c5b296ba9591&o=&hp=1"
                        className="h-52 w-full rounded-md object-cover"
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
                        alt="Hotel"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/295683402.jpg?k=6e19f3e9a3a628fdfa1f0c18cd3b6de63e58e73ff4f357342029c5b296ba9591&o=&hp=1"
                        className="h-52 w-full rounded-md object-cover"
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
                        alt="Hotel"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/295683402.jpg?k=6e19f3e9a3a628fdfa1f0c18cd3b6de63e58e73ff4f357342029c5b296ba9591&o=&hp=1"
                        className="h-52 w-full rounded-md object-cover"
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
                        alt="Hotel"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/295683402.jpg?k=6e19f3e9a3a628fdfa1f0c18cd3b6de63e58e73ff4f357342029c5b296ba9591&o=&hp=1"
                        className="h-52 w-full rounded-md object-cover"
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
                        alt="Hotel"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/295683402.jpg?k=6e19f3e9a3a628fdfa1f0c18cd3b6de63e58e73ff4f357342029c5b296ba9591&o=&hp=1"
                        className="h-52 w-full rounded-md object-cover"
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
                        alt="Hotel"
                        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/295683402.jpg?k=6e19f3e9a3a628fdfa1f0c18cd3b6de63e58e73ff4f357342029c5b296ba9591&o=&hp=1"
                        className="h-52 w-full rounded-md object-cover"
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

export default BrowseByPropertyType;