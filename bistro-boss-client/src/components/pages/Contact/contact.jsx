import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/cover";
import Navbar from "../../shared/navbar";
import SectionTitle from "../../shared/sectionTitle";


const Contact = () => {
    const menuImg = "https://i.postimg.cc/85gVkMh7/banner.jpg";

    return (
        <div>
            <Helmet>
                <title>Bistro Cafe | Contact</title>
            </Helmet>

            <div className="relative mb-8">
                <div className='w-full z-10 top-0 left-0 absolute'>
                    <Navbar ></Navbar>
                </div>
                <div className='relative'>
                    <Cover img={menuImg} title='Contact us' subHead="would you like to try a dish?"></Cover>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl max-h-fit mb-8">
                <SectionTitle
                    subHeading={"Visit Us"}
                    Heading={"Our Location"}
                    textColor={'text-gray-800'}
                ></SectionTitle>

                <div className="flex sm:flex-col md:flex-row gap-2">
                    <div className="card w-96 h-32 bg-base-100 border-2 border-gray-100 text-center mb-2">
                        <h2 className="bg-[#9c7f2a] text-white">Phone Image</h2>
                        <div className=" mx-8 p-4">
                            <p className="font-bold">Phone</p>
                            <p className="text-sm">+38795215580</p>
                        </div>
                    </div>
                    <div className="card w-96 h-32 bg-base-100 border-2 border-gray-100 text-center mb-2">
                        <h2 className="bg-[#9c7f2a] text-white">Location</h2>
                        <div className=" mx-8 p-4">
                            <p className="font-bold">Address</p>
                            <p className="text-sm">+38795215580</p>
                        </div>
                    </div>
                    <div className="card w-96 h-32 bg-base-100 border-2 border-gray-100 text-center mb-2">
                        <h2 className="bg-[#9c7f2a] text-white">Time</h2>
                        <div className=" mx-8 p-4">
                            <p className="font-bold">Working Hours</p>
                            <p className="text-sm">Mon -- Friday 00:00-20:00</p>
                            <p className="text-sm">Sat -- Sun 00:00-20:00</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col justify-center items-center mx-auto max-w-7xl max-h-fit mb-8">
                <SectionTitle
                    subHeading={"Send Us a Message"}
                    Heading={"Contact Form"}
                    textColor={'text-gray-800'}
                ></SectionTitle>

                <div className="bg-[#F4F3F0] p-12 text-center w-full">
                    <form >

                        <div className="md:flex mb-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name='name' placeholder="Enter Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" name='Email' placeholder="Enter email" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className="md:flex mb-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone*</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name='Phone' placeholder="Enter your phone number" className="input input-bordered w-full" />
                                </label>
                            </div>

                        </div>

                        <div className="mb-4">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text">Message*</span>
                                </label>
                                <label className="input-group ">

                                    <textarea type="text" name='message' placeholder="Write message here" className="input input-bordered w-full min-h-64" />
                                </label>
                            </div>
                        </div>

                        <></>

                        <input type='submit' value='Send message' className="btn bg-[#9c7f2a] text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;