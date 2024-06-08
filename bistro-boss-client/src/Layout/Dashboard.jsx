import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendar, FaWallet, FaAd, FaList, FaSearch, FaPhone, FaUtensils, FaUsers, FaBook } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);
    // const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <div className='flex flex-col justify-center items-center mt-6 mb-2 mx-2'>

                    <img className='bg-white w-18 h-12' src="https://i.postimg.cc/wjZ7JMcp/logo.png" />
                    <h2 className="text-white text-center">
                        Bistro Cafe
                    </h2>
                </div>
                <ul className="menu p-4 space-y-2">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminHome'><FaHome />Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItems'><FaUtensils />Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><FaList />Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/myBooking'><FaBook />Manage Booking</NavLink></li>
                                <li><NavLink to='/dashboard/users'><FaUsers />All Users</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaList />Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaShoppingCart />My Cart</NavLink></li>
                                <div className="divider"></div>
                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'><FaHome />User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendar />Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaWallet />Payment</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaShoppingCart />My Cart</NavLink></li>
                                <li><NavLink to='/dashboard/addReview'><FaAd />Add Review</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaList />Payment History</NavLink></li>
                                <div className="divider"></div>
                            </>
                    }

                    <li><NavLink to='/'><FaHome />Home</NavLink></li>
                    <li><NavLink to='/order'><FaSearch />Menu</NavLink></li>
                    <li><NavLink to='/order/contact'><FaPhone />Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;