import Button from "../../../ui/Button";
import ButtonBig from "../../../ui/ButtonBig";
import H1 from "../../../ui/H1";

function Section4() {
  return (
    <>
      <div className="relative container mt-[60px] flex h-[330px] items-center justify-center border-2">
        <img
          src="/src/assets/image/sec42.png"
          alt="picture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-[#171F26E5] opacity-90">
          <div className="mt-[40px]">
            <h3 className="text-[32px] leading-[140%] font-[700px] text-white">
              هم اکنون ثبت نام کنید!
            </h3>

            <div className="mt-[20px] px-[32px] text-[16px] leading-[180%] font-normal text-white">
              <p>
                ثبت نام در کارت ساز رایگان است همین الان ثبت نام کنید و کارت ساز
                را تست کنید.
              </p>
            </div>
            <div>
              <ButtonBig
                color="#FE3E01"
                picture="src/assets/image/message-edit.png"
              >
                ثبت نام رایگان
              </ButtonBig>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
