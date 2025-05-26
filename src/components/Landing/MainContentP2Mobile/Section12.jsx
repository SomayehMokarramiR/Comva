import ButtonBig from "../../../ui/ButtonBig";
import H1 from "../../../ui/H1";

function Section1() {
  return (
    <div className="mt-[100px]">
      <H1 size="32">
        سامانه مدیریت <span className="text-[#0182FE]">هوشمند</span>
        <br /> سفارشهای اینترنتی
      </H1>
      <ButtonBig color="#0182FE" picture="/src/assets/image/video-circle.png">
        مشاهده ویديومعرفی
      </ButtonBig>
      <p className="mt-10 text-center text-[14px] leading-[180%] font-[300] text-[#171F26]">
        کارت ساز آمده تا دیگر نیازی به یادداشت سفارش های خود در دفتر و یا سررسید
        نباشید.به راحتی سفارشات خود را <br />
        مدیریت کنید و آن ها را تعیین وضعیت کنید.حتی به راحتی برگه ارسال پرینت
        کنید و آن را اختصاصی استفاده کنید.
      </p>
      <div className="mx-auto mt-6 h-6 w-6">
        <img src="/src/assets/image/arrow-down.png" />
      </div>
    </div>
  );
}

export default Section1;
