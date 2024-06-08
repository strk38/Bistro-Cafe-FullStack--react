import { useContext } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { url_link } from "../../routes/url";
import axios from "axios";

const SignUp = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext);
    // const axiosPublic = useAxiosPublic();
    // const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.firstName.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(() => {
                updateUserInfo(name, photo)
                const userInfo = {
                    name: name,
                    email: email,
                    photo: photo
                };
                axios.post(`${url_link}/users`, userInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            console.log('before swal');
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${name} added to your cart`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/login');
                        }
                    })
                    .catch(error => {
                        console.error('Error in axios post:', error);
                    });

            })
            .catch(e => { alert(e); })
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/L57DRB17/authentication.png)' }}>
            <div className="flex flex-col md:flex-row justify-center items-center border border-gray-300 shadow-xl" >

                <div className="card shrink-0 sm:w-full md:w-1/2 max-w-sm bg-base-100 pt-4 md:px-4 bg-transparent">

                    <h2 className="text-3xl text-center mt-2 font-bold">Sign Up</h2>

                    <form onSubmit={handleSignUp} className="card-body">

                        <input type="text" name='firstName' placeholder="First Name" className="input input-bordered" required />

                        <input type="text" name='photoURL' placeholder="Photo Url" className="input input-bordered" required />

                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        <button className="btn btn-accent">Create an account</button>

                        <h2 className="font-semibold text-sm text-center text-slate-700">Already have an account ?
                            <NavLink to='/login' className="text-orange-600"> Log in</NavLink>
                        </h2>

                    </form>
                    <h2 className="text-center">Or Sign up with</h2>
                    <div className="flex justify-center items-center my-4 gap-4">
                        <button className="btn btn-circle border-1 border-blue-950">
                            <FaGoogle />
                        </button>
                        <button className="btn btn-circle border-1 border-blue-950">
                            <FaFacebook />
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 pt-6 px-4">
                    <img src='https://i.postimg.cc/g0Q3xkJX/authentication2.png' className="bg-transparent"></img>
                </div>
            </div>
        </div>
    );
};

export default SignUp;