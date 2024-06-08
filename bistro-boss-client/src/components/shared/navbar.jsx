import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider";
import useCart from "../../hooks/useCart";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const [dropDownUser, setDropDownUser] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const [isAdmin] = useAdmin();

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(e => console.log(e))
    }
    // console.log(user.displayName, user.photoURL)

    const navBar = <>
        <li><Link to='/' className="font-bold text-sm md:text-normal text-white">HOME</Link></li>
        <li><Link to='/contact' className="font-bold text-sm md:text-normal text-white">CONTACT US</Link></li>
        <li><Link to='/' className="font-bold text-sm md:text-normal text-white">DASHBOARD</Link></li>
        <li><Link to='/menu' className="font-bold text-sm md:text-normal text-white">OUR MENU</Link></li>
        <li><Link to='/order' className="font-bold text-sm md:text-normal text-white">OUR SHOP</Link></li>
    </>

    const logIn = <>
        <Link to='/login' className="btn btn-ghost font-bold text-sm md:text-normal text-white">Login</Link>
    </>

    const SignOut = <>
        <div onClick={() => { setDropDownUser(!dropDownUser) }} className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                </div>
            </div>
            {
                dropDownUser &&

                <ul tabIndex={0} className="mt-3 z-[1] p-2  menu menu-sm dropdown-content shadow bg-slate-300 rounded-box w-40">
                    <li className="btn btn-ghost font-bold text-sm md:text-normal text-black">{user?.displayName}</li>
                    {
                        isAdmin ?
                            <li><Link to='/dashboard/adminHome' className="btn btn-ghost border-none bg-transparent font-bold text-sm md:text-normal text-black">


                                <h2 className='flex gap-x-1'><FaHome className="text-lg" /> Admin Panel</h2>

                            </Link></li>
                            :
                            <>
                                <li><Link to='/dashboard/cart' className="btn btn-ghost border-none bg-transparent font-bold text-sm md:text-normal text-black">

                                    <FaShoppingCart className="text-xl" />
                                    <h2 className="badge">+{cart.length}</h2>

                                </Link></li>
                                <li><Link to='/dashboard/userHome' className="btn btn-ghost border-none bg-transparent font-bold text-sm md:text-normal text-black">


                                    <h2 className='flex gap-x-1'><FaHome className="text-lg" /> User Panel</h2>

                                </Link></li>
                            </>
                    }

                    <li><a onClick={handleSignOut} className="btn btn-ghost font-bold text-sm md:text-normal text-black">Logout</a>
                    </li>
                </ul>

            }
        </div>



    </>

    return (
        <div className="navbar bg-black bg-opacity-60 text-neutral-content px-4 md:px-6">
            <div className="navbar-start w-1/6">
                <div onClick={() => { setDropDown(!dropDown) }} className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {
                        dropDown &&
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-80 rounded-box w-52">
                            {navBar}
                        </ul>
                    }
                </div>
                <a className="font-bold text-normal md:text-xl">BISTRO BOSS</a>
            </div>

            <div className="navbar md:flex justify-center items-center w-4/6">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navBar}
                    </ul>
                </div>
            </div>
            <div className="navbar-end w-1/6">
                {user ?
                    SignOut : logIn
                }
            </div>
        </div>
    );
};

export default Navbar;