import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const BannerHome = () => {
    return (
        <Carousel className="mx-auto">
            <div>
                <img src="https://i.postimg.cc/PrHbp3f4/01.jpg" />

            </div>
            <div>
                <img src="https://i.postimg.cc/SxNWVnMY/02.jpg" />

            </div>
            <div>
                <img src="https://i.postimg.cc/mZCNrf4k/03.png" />

            </div>
            <div>
                <img src="https://i.postimg.cc/J0NbYJxZ/04.jpg" />

            </div>
            <div>
                <img src="https://i.postimg.cc/7Lj0xXQS/05.png" />

            </div>
            <div>
                <img src="https://i.postimg.cc/fLXXkX6p/06.png" />

            </div>
        </Carousel>

    );
};

export default BannerHome;


{/* <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.postimg.cc/PrHbp3f4/01.jpg" className="w-full  md:h-[768px]" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full  md:h-[768px]" >
        <img src="https://i.postimg.cc/SxNWVnMY/02.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full  md:h-[768px]" >
        <img src="https://i.postimg.cc/mZCNrf4k/03.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full  md:h-[768px]" >
        <img src="https://i.postimg.cc/J0NbYJxZ/04.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide5" className="carousel-item relative w-full  md:h-[768px]" >
        <img src="https://i.postimg.cc/7Lj0xXQS/05.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide6" className="carousel-item relative w-full  md:h-[768px]" >
        <img src="https://i.postimg.cc/fLXXkX6p/06.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
</div> */}
