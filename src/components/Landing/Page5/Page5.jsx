import DescriptionBox from "./DescriptionBox";
import HeaderP5 from "./HeaderP5";
import PriceBox from "./PriceBox";
import Properties from "./Properties";
import Slider from "./Slider";

function Page5() {
  return (
    <>
      <div>
        <HeaderP5 />
        <div className="relative top-[110px]">
          <div className="h-[56px] w-[366px]">
            <p className="items-center text-right text-[20px] leading-[140%] font-bold text-[#0182FE]">
              پخش کننده خانگی سامسونگ مدل SoundTower MX T-50
            </p>
          </div>
          <div className="relative top-[30px]">
            <Slider />
          </div>
          <div className="relative top-[50px]">
            <PriceBox />
          </div>

          <DescriptionBox />
          <Properties />
        </div>
      </div>
    </>
  );
}

export default Page5;
