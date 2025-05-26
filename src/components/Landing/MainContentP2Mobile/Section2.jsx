import H1 from "../../../ui/H1";

function Section2() {
  return (
    <div>
      <H1 size={24}>سیستمی تحت وب و کاملا آنلاین</H1>
      <p className="text-[16px] leading-[180%] font-normal">
        سیستم کارت ساز کاملا تحت وب اجرا شده است و نیاز به هیچ سخت افزاری ندارد.
        به راحتی مشتریان را مدیریت کنید وسفارشات خود را به موقع ارسال و آن ها را
        جمع آوری کنید.
      </p>
      <div className="relative container mx-auto mt-[66px] h-[244px] w-[348px] rounded-2xl">
        <img
          src="/src/assets/image/Frame.png"
          className="h-full w-full overflow-hidden"
        />
        <img
          src="/src/assets/image/X Mockup.png"
          className="absolute top-[15%] left-[1%] h-[211px] w-[105px] rounded-[22.1px] object-cover"
        />
      </div>
    </div>
  );
}

export default Section2;
