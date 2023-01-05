import Image from "next/image";
import testimonialsData from "../data/testimonialsData";
import { useEffect, useState } from "react";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

export default function Testimonials() {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="testimonials">
            <h2 className="title">Testimonials</h2>
            <span className="subTitle">My Client Say</span>

            <Swiper className="max-xs:w-full max-md:w-[348px] lg:w-[768px]"
                loop={mounted ? true : false}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
                }}
                modules={[Pagination]}
            >
                {testimonialsData.map(({ id, image, title, description }: {id: number, image: string , title: string , description: string}) => {
                    return (
                        <SwiperSlide key={id} className="bg-container-color border border-border-color/10 py-5 md:py-6 px-6 md:px-8 rounded-3xl mb-12">
                            <Image src={image} alt={"testimonial" + id} width={100} height={100} className="w-14 rounded-full mb-4" />
                            <h3 className="font-medium mb-1 text-title-color">{title}</h3>
                            <p className="text-sm text-justify">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>

    )
}