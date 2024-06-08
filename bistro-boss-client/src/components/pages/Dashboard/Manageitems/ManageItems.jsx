import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../../../hooks/useMenu";
import SectionTitle from "../../../shared/sectionTitle";
import Swal from "sweetalert2";
// import axios from "axios";
// import { url_link } from "../../../../routes/url";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                // axios.delete(`${url_link}/menu/${item._id}`)
                const res = await axiosSecure.delete(`/menu/${item._id}`)

                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `Your ${item.name} has been deleted.`,
                        icon: "success"
                    });
                }
                refetch();

            }
        });
    }


    return (
        <div>
            <SectionTitle
                subHeading={"Hurry Up"}
                Heading={'Manage all items'}
                textColor={'text-gray-800'}>
            </SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map((item, index) =>
                                <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        $ {item.price}
                                    </td>
                                    <td>
                                        {/* {
                                            user.role === 'admin' ? 'Admin' :
                                                <button onClick={() => handleEditItem(item)} className="btn btn-ghost bg-orange-500 text-white"><FaEdit className="text-xl" /></button>
                                        } */}
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn btn-ghost bg-orange-500 text-white"><FaEdit className="text-xl" /></button>
                                        </Link>
                                    </td>

                                    <th>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost"><FaTrash /></button>
                                    </th>
                                </tr>
                            )}

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageItems;