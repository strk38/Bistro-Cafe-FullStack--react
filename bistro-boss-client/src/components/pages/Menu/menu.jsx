import Cover from "../../shared/cover/cover";
import Footer from "../../shared/footer";
import Navbar from "../../shared/navbar";
import { Helmet } from 'react-helmet-async';
import SectionTitle from "../../shared/sectionTitle";
import CheckMenu from "../home/checkMenu";
import MenuCategory from "./menuCategory";
import { Link } from "react-router-dom";


const Menu = () => {
    const menuImg = "https://i.postimg.cc/gcZ4NRRT/banner3.jpg";
    const subMenuImg = "https://i.postimg.cc/FFy34ybJ/chef-service.jpg";
    return (
        <div>
            <Helmet>
                <title>Bistro Cafe | Menu</title>
            </Helmet>

            <div className="relative mb-8">
                <div className='w-full z-10 top-0 left-0 absolute'>
                    <Navbar ></Navbar>
                </div>
                <div className='relative'>
                    <Cover img={menuImg} title='our menu' subHead="would you like to try a dish?"></Cover>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl max-h-fit mb-8">
                <SectionTitle
                    subHeading={"Don't miss"}
                    Heading={"Today's offer"}
                    textColor={'text-gray-800'}
                ></SectionTitle>
                <CheckMenu></CheckMenu>

                <Link to='/order'>
                    <div className="btn btn-ghost border-0 border-b-2 border-gray-800 w-fit rounded-lg  my-4">
                        <h2 className="text-center uppercase text-gray-800 px-4 py-2">Order Your Favourite Food</h2>
                    </div>
                </Link>
            </div>

            <div className="relative mx-auto mb-8">
                <Cover img={subMenuImg} title='Desserts' subHead="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eaque eius id cumque consectetur consequuntur, minima ipsam sit similique"></Cover>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl max-h-fit mb-8">
                <MenuCategory category={'dessert'}></MenuCategory>
            </div>

            <div className="relative mx-auto mb-8">
                <Cover img={subMenuImg} title='Pizza' subHead="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eaque eius id cumque consectetur consequuntur, minima ipsam sit similique"></Cover>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl max-h-fit mb-8">
                <MenuCategory category={'pizza'}></MenuCategory>
            </div>

            <div className="relative mx-auto mb-8">
                <Cover img={subMenuImg} title='Salads' subHead="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eaque eius id cumque consectetur consequuntur, minima ipsam sit similique"></Cover>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl max-h-fit mb-8">
                <MenuCategory category={'salad'}></MenuCategory>
            </div>

            <div className="relative mx-auto mb-8">
                <Cover img={subMenuImg} title='Soups' subHead="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eaque eius id cumque consectetur consequuntur, minima ipsam sit similique"></Cover>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl max-h-fit mb-8">
                <MenuCategory category={'soup'}></MenuCategory>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Menu;