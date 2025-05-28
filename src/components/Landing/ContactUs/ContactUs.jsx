import { Link } from "react-router-dom";
import Border from "../../../ui/Border";
import Section4 from "../MainContentP2Mobile/Section4";
import Section55 from "../MainContentP2Mobile/Section55";
function ContactUs() {
  return (
    <div className="relative">
      <div className="relative mt-[112px] flex justify-start">
        <p className="pl-4 text-[32px] leading-[180%] font-[700px] text-[#0182FE]">
          تماس با ما
        </p>
        <div className="absolute top-[30px] right-0 mt-[60px] ml-40 flex flex-col">
          <div className="w-full text-[16px] leading-[180%] font-normal text-[#171F26] capitalize">
            <h3>
              جهت تماس با ما می توانید با یکی از مسیرهای زیر با ما ارتباط برقرار
              :کنید
            </h3>
          </div>
          <div className="mt-[20px] flex h-[64px] w-[392px] gap-4 rounded-[8px] border-1 border-[#D12879] py-[19px] text-[#D12879]">
            <div className="mr-[118px] flex gap-2">
              <img
                src="/src/assets/image/instagram.png"
                className="h-[24px] w-[24px]"
              />
              <p>پیام در دایرکت اینستاگرام</p>
            </div>
          </div>
          <div className="mt-[20px] flex h-[64px] w-[392px] rounded-[8px] border-1 border-[#2FDB9D] py-[19px] text-[#2FDB9D]">
            <div className="mr-[118px] flex gap-2">
              <img
                src="/src/assets/image/whatsapp.png"
                className="h-[24px] w-[24px]"
              />
              <p> تماس در واتساپ</p>
            </div>
          </div>

          <div className="mt-[26px] flex w-full flex-col items-start">
            <p className="text-[16px] leading-[180%] font-normal text-[#171F26] capitalize">
              همچنین از ایمیل زیر میتوانید استفاده کنید:
            </p>
          </div>

          <div className="py-2 text-[20px] leading-[180%] font-normal text-[#0182FE] underline">
            <Link to="Cartsaz.Com" className="flex items-start">
              Cartsaz.Com@Gmail.Com
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-[180px] left-[300.84px] flex h-[211.08px] w-[211.08px] items-center justify-center">
        <div className="flex h-[175.23px] w-[175.23px] items-center justify-center rounded-[143.37px] border-[1.99px] border-[#0182FE] bg-gradient-to-b from-[#0182FE] to-[#DFEFFF]">
          <img
            src="/src/assets/image/message.png"
            className="h-[95.58px] w-[95.58px]"
          />
        </div>
      </div>
      <div className="mt-[430px]">
        <Section4 />
      </div>
      <div className="mt-[60px]">
        <Border />
      </div>
      <Section55 />
    </div>
  );
}

export default ContactUs;
