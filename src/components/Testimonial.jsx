import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv } from "uuid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { testimonials } from "@/_mock/testimonial";

// init Swiper

const Testimonial = () => {
  return (
    <div className="py-5">
      <div className="px-5">
        <p className=" font-semibold text-[#F9AF82] text-2xl">Testimonial</p>
        <h1 className=" mt-5 lg:text-5xl md:text-3xl text-xl font-bold">
          What our clients saying about call center
        </h1>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials?.map((test) => (
            <SwiperSlide key={uuidv()}>
              <div className="max-w-md py-4 h-80 px-8 m-4 bg-gray-50 shadow rounded-lg my-20 relative">
                <div className="flex justify-center md:justify-end -mt-12">
                  <div className="w-20 h-20  bg-[#F9AF82] rounded-full border-4 border-white flex justify-center align-middle items-center">
                    <Image
                      alt="doublequotes"
                      src={"/assets/double-quotes.png"}
                      width={36}
                      height={36}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-start items-center gap-1">
                    <div>
                      <Image
                        src={test.profilePicture}
                        alt="doublequotes"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h2 className="text-gray-800 text-lg font-semibold">
                        {test.customer}
                      </h2>
                      <p>{test.desc}</p>
                    </div>
                  </div>
                  <p className="py-2 text-gray-800 text-base ">
                    {test.testimonial}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
