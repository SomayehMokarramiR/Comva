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
      <div className="relative container mx-auto mt-[66px] h-[384.75px] w-[684px] rounded-2xl">
        <img
          src="/src/assets/image/Frame.png"
          className="h-[544px] w-[810px] overflow-hidden"
        />
        <img
          src="/src/assets/image/X Mockup.png"
          className="absolute top-[20%] left-[-24%] h-[471px] w-[233.85px] rounded-[22.1px] object-cover"
        />
      </div>
    </div>
  );
}

export default Section2;
