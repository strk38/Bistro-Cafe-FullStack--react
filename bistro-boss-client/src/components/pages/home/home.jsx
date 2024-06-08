import Footer from "../../shared/footer";
import Navbar from "../../shared/navbar";
import SectionTitle from "../../shared/sectionTitle";
import CheckMenu from "./checkMenu";
import BannerHome from "./bannerHome";
import OrderOnline from "./orderOnline";
import Featured from "./Featured/featured";
import Testimonials from "./Testimonials/testimonials";
import ChefRecommends from "./ChefRecommends/chef_Recommends";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Cafe | Home</title>
            </Helmet>
            <div className="relative mb-8">
                <div className='w-full z-10 top-0 left-0 absolute'>
                    <Navbar ></Navbar>
                </div>
                <div className='relative'>
                    <BannerHome></BannerHome>
                </div>
            </div>

            <div className="mx-auto max-w-7xl max-h-fit mb-8">
                <SectionTitle
                    subHeading={"From 11:00am to 10:00pm"}
                    Heading={'ORDER ONLINE'}>
                </SectionTitle>
                <OrderOnline></OrderOnline>
            </div>

            <div className="relative max-w-7xl mx-auto mb-8">
                <img src='https://i.postimg.cc/FFy34ybJ/chef-service.jpg' className="w-fit mx-auto"></img>
                <div className="relative md:absolute md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center justify center text-center bg-white w-full md:w-fit h-fit mx-auto">
                    <div className="mx-4 my-4 md:mx-12 md:my-6 w-fit h-fit">
                        <h2 className="text-lg font-semibold uppercase">BISTRO BOSS</h2>
                        <p className="text-sm font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eaque eius id cumque <br />consectetur consequuntur, minima ipsam sit similique delectus maxime mollitia veritatis<br /> modi numquam quis velit atque unde iusto</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl max-h-fit mb-8">
                <SectionTitle
                    subHeading={"Check it out"}
                    Heading={'From our menu'}
                    textColor={'text-gray-800'}
                ></SectionTitle>
                <CheckMenu></CheckMenu>

                <div className="btn btn-ghost border-0 border-b-2 border-gray-800 w-fit rounded-lg  my-4">
                    <h2 className="text-center uppercase text-gray-800 px-4 py-2">View Full Menu</h2>
                </div>
            </div>

            <div className="bg-gray-900 mx-auto max-w-7xl h-fit mb-8">
                <h2 className="text-center text-normal md:text-3xl text-white py-2 md:py-8">Call Us: +88019875215</h2>
            </div>

            <div className="mb-8">
                <SectionTitle
                    subHeading={"Should Try"}
                    Heading={'Chef Recommends'}
                    textColor={'text-black'}
                ></SectionTitle>
                <ChefRecommends></ChefRecommends>
            </div>

            <div style={{ backgroundImage: "url('https://i.postimg.cc/jdRNdDv3/featured.jpg')" }} className="bg-fixed bg-cover bg-center w-full h-screen md:h-[848px] mb-8">
                <div className="bg-black bg-opacity-60 pt-12 pb-12 h-full">
                    <SectionTitle
                        subHeading={"Check it out"}
                        Heading={'From our menu'}
                        textColor={'text-white'}
                    ></SectionTitle>
                    <Featured></Featured>
                </div>
            </div>

            <div className="mb-8">
                <SectionTitle
                    subHeading={"What Our Clients Say"}
                    Heading={'Testimonials'}
                    textColor={'text-black'}
                ></SectionTitle>
                <Testimonials></Testimonials>
            </div>

            <Footer></Footer>

        </>
    );
};

export default Home;