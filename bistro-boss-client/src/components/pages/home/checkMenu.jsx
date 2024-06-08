// import { useEffect, useState } from "react";
import MenuItem from "../../shared/MenuItems/menuItem";
import useMenu from "../../../hooks/useMenu";



const CheckMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-3">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

        </div >
    );
};

export default CheckMenu;