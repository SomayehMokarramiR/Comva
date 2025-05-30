import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        effect="fade"
        modules={[EffectFade, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
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
      <div className="flex justify-between px-10">
        <div className="custom-prev absolute top-1/2 left-4 flex h-[60px] w-[60px] -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-4 border-[#CBCBCB]">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#0182FE]">
            <span className="text-lg text-white">&#10095;</span>
          </div>
        </div>

        <div className="custom-next absolute top-1/2 right-4 flex h-[60px] w-[60px] -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-4 border-[#CBCBCB]">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#CBCBCB]">
            <span className="text-lg text-white">&#10094;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
