import { useForm } from "react-hook-form";
import { FaUtensilSpoon } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const UpdateItem = () => {

    const { name, category, recipe, price, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();

    const [axiosSecure] = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        // const imageFile = { image: data.image[0] }
        //image upload to imgbb and then get an url
        // console.log(imageFile);

        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        // console.log(res.data);

        // if (res.data.success) {
        if (data) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: "https://i.postimg.cc/rF91S1KL/slide2.jpg"
                // res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is update to menu!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
            }
        }


    }
    return (
        <div>

            <div>
                <h2 className="text-xl font-bold uppercase">Update Item</h2>
            </div>
            <div className="bg-[#F4F3F0] p-4 md:p-8 w-full">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text"
                            defaultValue={name}
                            placeholder="Recipe Name" {...register("name", { required: true })} className="input input-bordered w-full" />
                    </label>

                    <div className="flex gap-6">
                        {/* Category */}
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>

                        {/* Price */}
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input type="number"
                                defaultValue={price}
                                placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* recipe details */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea
                            defaultValue={recipe}
                            {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </label>

                    {/* choose file  */}
                    {/* <div className="form-control w-full my-6">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div> */}

                    <button className="btn my-6">Update Recipe Details<FaUtensilSpoon className='ml-4'></FaUtensilSpoon></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;