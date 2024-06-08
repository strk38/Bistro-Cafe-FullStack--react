// import { useEffect, useState } from "react";
// import { url_link } from "../routes/url";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {

    const axiosPublic = useAxiosPublic();

    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`${url_link}/menu`);
    //             const data = await response.json();
    //             // const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchData();
    // }, []) // Empty dependency array ensures this effect runs only once after the initial render

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })

    return [menu, loading, refetch]
}
export default useMenu;