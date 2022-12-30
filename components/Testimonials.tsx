import Image from "next/image";
import testimonialsData from "../data/testimonialsData";

//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

export default function Testimonials() {
    return (
        <section id="testimonials" className="pt-8 sm:pt-24 pb-8 px-8 max-w-4xl mx-auto">
            <h2 className="text-4xl text-title-color text-center font-semibold">Testimonials</h2>
            <span className="block mb-16 text-text-color text-center">My Client Say</span>

            <Swiper className="lg:w-[750px]"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
                }}
                modules={[Pagination]}
            >
                {testimonialsData.map(({ id, image, title, description }: {id: number, image: string , title: string , description: string}) => {
                    return (
                        <SwiperSlide key={id} className="bg-container-color border border-black/10 py-5 md:py-6 px-6 md:px-8 rounded-3xl mb-12">
                            <Image src={image} alt={"testimonial" + id} width={100} height={100} className="w-14 rounded-full mb-4" />
                            <h3 className="font-medium mb-1 text-title-color">{title}</h3>
                            <p className="text-sm">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>

    )
}