import Button from "../../../ui/Button";
import H1 from "../../../ui/H1";

function Section4() {
  return (
    <>
      <div className="relative mt-[60px] flex h-[259px] items-center justify-center border-2">
        <img
          src="/src/assets/image/sec4Img.png"
          alt="picture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-[#171F26E5] opacity-90">
          <div>
            <h1 className="text-[44px] leading-[140%] font-bold text-white">
              هم اکنون ثبت نام کنید!
            </h1>

            <p className="text-[16px] font-normal text-white">
              ثبت نام در کارت ساز رایگان است همسن الان ثبت نام کنید و کارت ساز
              را تست کنید.
            </p>
            <div>
              <button className="mt-[53px] rounded-4xl bg-[#FE3E01] px-[34px] py-4 text-[14px] leading-[140%] text-white hover:cursor-pointer">
                <span className="flex gap-1">
                  <img src="/src/assets/image/message-edit.png" /> ثبت نام
                  رایگان
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
