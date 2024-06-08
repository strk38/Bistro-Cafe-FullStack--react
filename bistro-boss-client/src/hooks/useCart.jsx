import axios from "axios";
import { url_link } from "../routes/url";
import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";

const useCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axios.get(`${url_link}/carts?email=${user.email}`)
            return res.data;
        },
    })
    return [cart, refetch];
};

export default useCart;