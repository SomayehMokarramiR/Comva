function ContactItem({ bgColor, icon, title, text, color }) {
  return (
    // <div className="flex h-[48px] w-[366px] items-center justify-between gap-2 rounded-[8px] border-1 border-[#FFEEF1] bg-[#FFEEF1] p-4 text-[16px] leading-[180%] font-normal text-[#EC335A] capitalize">
    //   <div className="flex gap-4">
    //     <img src="/src/assets/image/instagram1.png" />
    //     <p>پیج اینستاگرام</p>
    //   </div>
    //   <div>
    //     <p>@shop-test11111</p>
    //   </div>
    // </div>
    <div
      className={`flex h-[48px] w-[366px] items-center justify-between gap-2 rounded-[8px] border-1 border-[${color}] bg-[${color}] p-4 text-[16px] leading-[180%] font-normal text-[${bgColor}] capitalize`}
    >
      <div className="flex gap-4">
        <img src={icon} />
        <p>{title}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ContactItem;
