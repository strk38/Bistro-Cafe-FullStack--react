

const Featured = () => {
    return (
        <div className="md:flex justify-center items-center px-4 md:py-20 md:px-36">
            <div className="">
                <img src='https://i.postimg.cc/jdRNdDv3/featured.jpg' className="w-36 md:w-fit md:h-fit"></img>
            </div>
            <div className="text-white  md:ml-10 0">
                <p className="text-base md:text-normal">March 20, 2023</p>
                <p className="uppercase text-normal md:text-lg">Where can I get some?</p>
                <p className="text-sm md:text-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, saepe facilis alias similique quasi quas a dolores cumque voluptatibus, nisi quaerat velit odit numquam expedita officiis molestias suscipit tempore voluptas.</p>
                <div className="btn btn-outline border-0 border-b-2 w-fit rounded-lg  border-white my-4">
                    <h2 className="text-center uppercase text-white px-4 py-2">Order now</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;