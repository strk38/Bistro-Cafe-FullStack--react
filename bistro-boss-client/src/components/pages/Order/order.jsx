import { Helmet } from 'react-helmet-async';
import Navbar from '../../shared/navbar';
import Cover from '../../shared/cover/cover';
import Footer from '../../shared/footer';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import OrderCategory from './orderCategory';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    // console.log(category);

    let initialIndex = categories.indexOf(category);
    if (initialIndex === -1) { initialIndex = 0; }
    // console.log(initialIndex);

    const [tabIndex, setTabIndex] = useState(initialIndex);



    const menuImg = "https://i.postimg.cc/YqMwftVT/banner2.jpg";

    return (
        <div>
            <Helmet>
                <title>Bistro Cafe | Our Shop</title>
            </Helmet>

            <div className="relative mb-8">
                <div className='w-full z-10 top-0 left-0 absolute'>
                    <Navbar ></Navbar>
                </div>
                <div className='relative '>
                    <Cover img={menuImg} title='our shop' subHead="would you like to try a dish?"></Cover>
                </div>
            </div>

            <div className='mx-auto max-w-7xl max-h-fit mb-8'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>
                    <TabPanel>
                        <OrderCategory category={categories[0]}></OrderCategory>
                    </TabPanel>

                    <TabPanel>
                        <OrderCategory category={categories[1]}></OrderCategory>
                    </TabPanel>

                    <TabPanel>
                        <OrderCategory category={categories[2]}></OrderCategory>
                    </TabPanel>

                    <TabPanel>
                        <OrderCategory category={categories[3]}></OrderCategory>
                    </TabPanel>

                    <TabPanel>
                        <OrderCategory category={categories[4]}></OrderCategory>
                    </TabPanel>
                </Tabs>



            </div>

            <></>
            <Footer></Footer>
        </div>
    );
};

export default Order;