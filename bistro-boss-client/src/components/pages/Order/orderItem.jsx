import { useContext } from "react";
import { AuthContext } from "../../../providers/authProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { url_link } from "../../../routes/url";
import axios from "axios";
import useCart from "../../../hooks/useCart";


const OrderItem = ({ item }) => {

    const { _id, image, name, recipe, price } = item;
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to database

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                recipe,
                price
            }
            axios.post(`${url_link}/carts`, cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //after succeefully adding update refetch count
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please log in to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div className="mx-auto flex flex-col md:flex-row justify-evenly items-center space-y-4 mb-8">
            <div id={_id} className="w-80 h-fit glass">
                <img src={image} className="w-80 h-52 object-cover" alt="" />
                <div className="text-center my-4">
                    <h2 className="font-bold text-lg">{name}</h2>
                    <p className="text-sm">{recipe}</p>
                    <div onClick={handleAddToCart} className="btn btn-ghost border-0 border-b-2 border-yellow-600 w-fit rounded-lg  my-4">
                        <h2 className="text-center uppercase text-yellow-600 px-4 py-2">Add to cart</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderItem;