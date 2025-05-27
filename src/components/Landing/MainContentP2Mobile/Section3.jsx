import H1 from "../../../ui/H1";
import CardList from "./CardList";

function Section3() {
  return (
    <div className="">
      <H1 size={24} sizemd={32}>
        جدیدترین مدل مدیریت سبد خریدها
      </H1>
      <div className="">
        <p className="text-[16px] leading-[180%] font-normal">
          بیش از صدها فروشگاه سبد خریدهای خود را در کارت ساز با امکانات متفاوت
          این سامانه مدیریت کنید .
        </p>
      </div>
      <div className="mt-0 md:mt-[69px]">
        <CardList />
      </div>
    </div>
  );
}

export default Section3;
