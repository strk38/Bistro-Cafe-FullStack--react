import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { url_link } from "../../../../routes/url";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const AllUsers = () => {

    // const { data: users = [], refetch } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //         const res = await axios.get(`${url_link}/users`, {
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('access-token')}`
    //             }
    //         });
    //         return res.data;
    //     },
    // })

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        },
    })

    const handleDeleteUser = (id) => {
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
                const res = await axios.delete(`${url_link}/users/${id}`)

                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
                refetch();

            }
        });
    }

    const handleUserRole = (user) => {
        axiosSecure.patch(`${url_link}/users/admin/${user._id}`)
            .then(res => {
                // console.log(res)
                if (res.data.modifiedCount > 0) {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
                refetch();
            })
    }

    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' :
                                                <button onClick={() => handleUserRole(user)} className="btn btn-ghost bg-orange-500 text-white"><FaUsers className="text-xl" /></button>
                                        }
                                    </td>

                                    <th>
                                        <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost"><FaTrash /></button>
                                    </th>
                                </tr>
                            )}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;