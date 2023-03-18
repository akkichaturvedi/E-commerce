import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

function Slider() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="h-96 mx-4 mt-5 shadow-2xl"
        >
            <SwiperSlide>
                <img src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-153892434.jpg"
                    className="w-full rounded shadow-xl h-full" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1523039031846-6b3f39302cb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80"
                    className="w-full rounded shadow-xl h-full" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1540340061722-9293d5163008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    className="w-full rounded shadow-xl object-fill h-full" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="w-full rounded shadow-xl h-full" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1528734056081-a1149a9a0856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="w-full rounded shadow-xl h-full" 
                    />
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider