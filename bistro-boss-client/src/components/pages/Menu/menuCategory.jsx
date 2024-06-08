import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/MenuItems/menuItem";


const MenuCategory = ({ category }) => {
    const [menu] = useMenu();
    const items = menu.filter(item => item.category === category);
    return (
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="grid md:grid-cols-2 gap-3">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${category}`}>
                <div className="btn btn-ghost border-0 border-b-2 border-gray-800 w-fit rounded-lg  my-4">
                    <h2 className="text-center uppercase text-gray-800 px-4 py-2">Order Your Favourite Food</h2>
                </div>
            </Link>

        </div>
    );
};

export default MenuCategory;