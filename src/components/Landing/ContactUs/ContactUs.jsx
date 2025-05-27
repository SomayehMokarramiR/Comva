import { Link } from "react-router-dom";
import Border from "../../../ui/Border";
import Section4 from "../MainContentP2Mobile/Section4";
import Section55 from "../MainContentP2Mobile/Section55";
function ContactUs() {
  return (
    <div>
      <div className="mt-[112px] flex justify-start">
        <p className="text-[32px] leading-[180%] font-[700px] text-[#0182FE]">
          تماس با ما
        </p>
        <div className="mt-[60px] h-[544px] w-[808px] py-16">
          <div className="text-[16px] leading-[180%] font-normal text-[#171F26]">
            <p>
              جهت تماس با ما می توانید با یکی از مسیرهای زیر با ما ارتباط برقرار
              :کنید
            </p>
          </div>
          <div className="h-[64px] w-[392px] rounded-[8px] border-1 border-[#D12879] text-[#D12879]">
            پیام در دایرکت اینستاگرام
          </div>
          <div className="h-[64px] w-[392px] rounded-[8px] border-1 border-[#2FDB9D] text-[#2FDB9D]">
            تماس در واتساپ
          </div>
          <div className="left-[370.84px] mx-auto mt-[334.92] h-[175.23px] w-[175.23px] rounded-[143.37px] border-[1.99px] border-[#0182FE] bg-gradient-to-b from-[#0182FE] to-[##DFEFFF]">
            <img
              src="/src/assets/image/message.png"
              className="m-[39.83px] h-[95.58px] w-[95.58px]"
            />
          </div>
          <div className="text-[16px] leading-[180%] font-normal text-[#171F26]">
            <p>همچنین از ایمیل زیر میتوانید استفاده کنید:</p>
          </div>
          <div className="text-[20px] leading-[180%] font-normal text-[#0182FE]">
            <Link to="Cartsaz.Com">Cartsaz.Com@Gmail.Com</Link>
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
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
