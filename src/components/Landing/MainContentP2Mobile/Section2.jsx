import H1 from "../../../ui/H1";

function Section2() {
  return (
    <div>
      <H1 size={24} sizemd={32}>
        سیستمی تحت وب و کاملا آنلاین
      </H1>
      <p className="text-[16px] leading-[180%] font-normal">
        سیستم کارت ساز کاملا تحت وب اجرا شده است و نیاز به هیچ سخت افزاری ندارد.
        به راحتی مشتریان را مدیریت کنید وسفارشات خود را به موقع ارسال و آن ها را
        جمع آوری کنید.
      </p>
      <div className="relative container mx-auto mt-[66px] h-[244px] w-[348px] rounded-2xl md:h-[384.75px] md:w-[684px]">
        <img
          src="/src/assets/image/Frame.png"
          className="h-full w-full overflow-hidden md:h-[384.75px] md:w-[684px]"
        />
        <img
          src="/src/assets/image/X Mockup.png"
          className="absolute top-[15%] left-[1%] h-[211px] w-[105px] rounded-[22.1px] object-cover md:top-[10%] md:left-[-24%] md:h-[471px] md:w-[233.85px]"
        />
      </div>
    </div>
  );
}

export default Section2;
