import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        effect="fade"
        modules={[EffectFade, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <img
            src="src/assets/image/imageSlide.png"
            alt="Slide 1"
            className="h-auto w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/image/image18.png"
            alt="Slide 2"
            className="h-auto w-full rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets/image/image17.png"
            alt="Slide 3"
            className="h-auto w-full rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
      {/* دکمه‌های ناوبری سفارشی */}

      <div className="custom-prev absolute top-1/2 left-1 flex h-[40px] w-[40px] -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-1 border-[#CBCBCB]">
        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#1a7bd5]">
          <span className="text-lg text-white">&#10095;</span>
        </div>
      </div>

      <div className="custom-next absolute top-1/2 right-1 flex h-[40px] w-[40px] -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-1 border-[#CBCBCB]">
        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#CBCBCB]">
          <span className="text-lg text-white">&#10094;</span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
