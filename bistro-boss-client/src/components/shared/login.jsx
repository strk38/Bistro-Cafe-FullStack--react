import { useContext, useEffect, useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/authProvider";
import axios from "axios";
import { url_link } from "../../routes/url";
// import Swal from "sweetalert2";

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { signInUser, GoogleSignIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleChange = () => {

        let user_captcha_value = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha_value) == true) {

            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        let from = location.state?.from?.pathname || "/";
        let user_captcha_value = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha_value) == true) {
            // alert('Captcha Matched');
            // setDisabled(false);
            // console.log(email, password);
            signInUser(email, password)
                .then(() => {
                    alert('Logged in Successfully!!')
                    navigate(from, { replace: true });
                })
                .catch(e => { alert(e); })
        }
        else {
            alert('Captcha Does Not Match');
        }
    }

    const GoogleLogIn = () => {
        let from = location.state?.from?.pathname || "/";
        GoogleSignIn()
            .then((result) => {
                console.log(result.user)

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL
                }
                axios.post(`${url_link}/users`, userInfo)
                    .then(res => {
                        console.log(res.data);
                        // if (res.data.insertedId) {
                        //     console.log('before swal');
                        //     Swal.fire({
                        //         position: "top-end",
                        //         icon: "success",
                        //         title: `${name} added to your cart`,
                        //         showConfirmButton: false,
                        //         timer: 1500
                        //     });

                        // }
                    })
                    .catch(error => {
                        console.error('Error in axios post:', error);
                    });


                navigate(from, { replace: true });
            })
            .catch(e => { alert(e); })

    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/L57DRB17/authentication.png)' }}>
            <div className="flex flex-col md:flex-row justify-center items-center border border-gray-300 shadow-xl" >
                <div className="md:w-1/2 pt-6 px-4">
                    <img src='https://i.postimg.cc/g0Q3xkJX/authentication2.png' className="bg-transparent"></img>
                </div>

                <div className="card shrink-0 sm:w-full md:w-1/2 max-w-sm bg-base-100 pt-4 md:px-4 bg-transparent">

                    <h2 className="text-3xl text-center mt-2 font-bold">Login</h2>

                    <form onSubmit={handleLogin} className="card-body">

                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        <LoadCanvasTemplate />
                        <input type="text" name='Captcha' id='user_captcha_input' onBlur={handleChange} placeholder="Type here" className="input input-bordered" required />

                        {/* <button className="btn btn-accent">Sign In</button> */}
                        <button disabled={disabled} className="btn btn-accent">Sign In</button>

                        <h2 className="font-semibold text-sm text-center text-slate-700">Do not have an account ?
                            <NavLink to='/signup' className="text-orange-600"> Sign Up</NavLink>
                        </h2>

                    </form>
                    <h2 className="text-center">Or Sign in with</h2>
                    <div className="flex justify-center items-center my-4 gap-4">
                        <button onClick={GoogleLogIn} className="btn btn-circle border-1 border-blue-950">
                            <FaGoogle />
                        </button>
                        <button className="btn btn-circle border-1 border-blue-950">
                            <FaFacebook />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;