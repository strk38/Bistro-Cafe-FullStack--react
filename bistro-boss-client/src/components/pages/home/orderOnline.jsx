import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const OrderOnline = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src="https://i.postimg.cc/1tN06bNW/slide1.jpg" className='w-fit' alt="" />
                <h2 className='text-3xl uppercase text-center text-white -mt-12 '>Salads</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.postimg.cc/rF91S1KL/slide2.jpg" alt="" />
                <h2 className='text-3xl uppercase text-center text-white -mt-12 '>Pizza</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.postimg.cc/SxTcPm6T/slide3.jpg" alt="" />
                <h2 className='text-3xl uppercase text-center text-white -mt-12 '>Soups</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.postimg.cc/mrnNPThz/slide4.jpg" alt="" />
                <h2 className='text-3xl uppercase text-center text-white -mt-12 '>Deserts</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.postimg.cc/1tN06bNW/slide1.jpg" className='w-fit' alt="" />
                <h2 className='text-3xl uppercase text-center text-white -mt-12 '>Salads</h2>
            </SwiperSlide>
        </Swiper>

        // <div className="flex flex-col justify-center items-center mt-8 mb-8 mx-auto max-w-7xl sm:max-h-72 md:max-h-fit">
        //     {/* <div className="flex flex-col justify-center items-center mb-4">
        //         <h2 className="font-semibold text-sm italic text-yellow-500">---From 11:00am to 10:00pm---</h2>
        //         <hr className="border-2 border-gray-200 my-4 w-full md:w-64"></hr>
        //         <h2 className="font-semibold text-2xl">ORDER ONLINE</h2>
        //         <hr className="border-2 border-gray-200 my-4 w-full md:w-64"></hr>
        //     </div> */}
        //     <Swiper
        //         slidesPerView={4}
        //         spaceBetween={30}
        //         centeredSlides={true}
        //         pagination={{
        //             clickable: true,
        //         }}
        //         modules={[Pagination]}
        //         className="mySwiper"
        //     >
        //         <SwiperSlide><img src="https://i.postimg.cc/1tN06bNW/slide1.jpg" alt="" /></SwiperSlide>
        //         <SwiperSlide><img src="https://i.postimg.cc/rF91S1KL/slide2.jpg" alt="" /></SwiperSlide>
        //         <SwiperSlide><img src="https://i.postimg.cc/SxTcPm6T/slide3.jpg" alt="" /></SwiperSlide>
        //         <SwiperSlide><img src="https://i.postimg.cc/mrnNPThz/slide4.jpg" alt="" /></SwiperSlide>
        //         {/* <SwiperSlide>Slide 5</SwiperSlide>
        //         <SwiperSlide>Slide 6</SwiperSlide>
        //         <SwiperSlide>Slide 7</SwiperSlide>
        //         <SwiperSlide>Slide 8</SwiperSlide>
        //         <SwiperSlide>Slide 9</SwiperSlide> */}
        //     </Swiper>


        //     {/* <div className="carousel rounded-box w-fit">
        //         <div className="carousel-item mx-1">
        //             <img src="https://i.postimg.cc/1tN06bNW/slide1.jpg" alt="" />
        //         </div>
        //         <div className="carousel-item mx-1">
        //             <img src="https://i.postimg.cc/rF91S1KL/slide2.jpg" alt="" />
        //         </div>
        //         <div className="carousel-item mx-1">
        //             <img src="https://i.postimg.cc/SxTcPm6T/slide3.jpg" alt="" />
        //         </div>
        //         <div className="carousel-item mx-1">
        //             <img src="https://i.postimg.cc/mrnNPThz/slide4.jpg" alt="" />
        //         </div>

        //     </div> */}
        // </div>
    );
};

export default OrderOnline;