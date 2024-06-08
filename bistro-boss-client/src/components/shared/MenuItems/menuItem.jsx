

const MenuItem = ({ item }) => {
    const { _id, image, name, recipe, price } = item;
    return (
        <>
            <div id={_id} className="flex space-x-3">
                <img style={{ borderRadius: '0 200px 200px' }} className='w-[100px]' src={image} alt="" />
                <div className="">
                    <h2 className="uppercase">{name}--------</h2>
                    <p className="max-w-[400px] text-sm text-gray-400">{recipe}</p>
                </div>
                <div className="text-yellow-500">
                    $ {price}
                </div>
            </div>
        </>
    );
};

export default MenuItem;