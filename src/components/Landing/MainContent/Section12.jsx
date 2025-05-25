import H1 from "../../../ui/H1";

function Section1() {
  return (
    <div className="mt-[135px]">
      <H1 size={44}>
        سامانه مدیریت <span className="text-[#0182FE]">هوشمند</span>
        <br /> سفارشهای اینترنتی
      </H1>

      <p className="mt-10 text-center text-[16px] leading-[180%] font-normal text-[#171F26]">
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
