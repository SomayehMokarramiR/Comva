import H1 from "../../../ui/H1";

function Section2() {
  return (
    <div>
      <H1>سیستمی تحت وب و کاملا آنلاین</H1>
      <p className="text-[16px] leading-[180%] font-normal">
        سیستم کارت ساز کاملا تحت وب اجرا شده است و نیاز به هیچ سخت افزاری ندارد.
        <br />
        به راحتی مشتریان را مدیریت کنید وسفارشات خود را به موقع ارسال و آن ها را
        جمع آوری کنید.
      </p>
      <div className="mx-auto mt-[66px] h-[384.75px] w-[684px] rounded-2xl">
        <div className="relative h-[544px] w-[810px]">
          <img src="/src/assets/image/Frame.png" />
        </div>
        <div className="absolute top-[1050px] left-[140px] h-[471px] w-[233.85px] -translate-x-1.5 -translate-y-1.5 transform rounded-[22.1px] object-cover">
          <img src="/src/assets/image/X Mockup.png" />
        </div>
      </div>
    </div>
  );
}

export default Section2;
