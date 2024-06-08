import SectionTitle from "../../../shared/sectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
// import axios from "axios";
// import { url_link } from "../../../../routes/url";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
// const image_hosting_api = `https://freeimage.host/api/1/upload/?key=${image_hosting_key}`;

// const image_hosting_api = `https://www.imghippo.com/v1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    // const axiosPublic = useAxiosPublic();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] }
        //image upload to imgbb and then get an url
        console.log(imageFile);

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
            const menuRes = await axiosSecure.post('/menu', menuItem);
            // const menuRes = await axios.post(`${url_link}/menu`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to menu!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }


    }

    return (
        <div>

            <SectionTitle
                subHeading={"What's new?"}
                Heading={'Add an item'}
                textColor={'text-gray-800'}>
            </SectionTitle>

            <div className="bg-[#F4F3F0] p-4 md:p-8 w-full">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full mb-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text" placeholder="Recipe Name" {...register("name", { required: true })} className="input input-bordered w-full" />
                    </label>

                    <div className="flex gap-6">
                        {/* Category */}
                        <label className="form-control w-full mb-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full">
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
                            <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full" />
                        </label>
                    </div>

                    {/* recipe details */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </label>

                    {/* choose file  */}
                    <div className="form-control w-full my-6">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">Add Item<FaUtensils className='ml-4'></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;