import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <Swiper
      effect="fade"
      modules={[EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop
    >
      <SwiperSlide>
        <img
          src="/src/assets/image/image 16.png"
          alt="Slide 1"
          className="h-auto w-full rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/src/assets/image/image 18.png"
          alt="Slide 2"
          className="h-auto w-full rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/src/assets/image/image 17.png"
          alt="Slide 3"
          className="h-auto w-full rounded-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
