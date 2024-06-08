import useMenu from "../../../hooks/useMenu";
import OrderItem from "./orderItem";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const OrderCategory = ({ category }) => {
    const [menu] = useMenu();
    const items = menu.filter(item => item.category === category);

    // const chunkArray = (array, size) => {
    //     const chunkedArr = [];
    //     for (let i = 0; i < array.length; i += size) {
    //         chunkedArr.push(array.slice(i, i + size));
    //     }
    //     return chunkedArr;
    // };

    // const itemChunks = chunkArray(items, 6);
    // console.log(itemChunks[0])
    // console.log(itemChunks[1])

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 mx-auto">
                        {
                            items.map(item => <OrderItem
                                key={item._id}
                                item={item}
                            ></OrderItem>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>

        </>
    );
};

export default OrderCategory;

