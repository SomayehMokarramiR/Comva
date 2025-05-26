function Card({ icon, title, description }) {
  return (
    <div className="mx-auto mt-8 h-[348px] w-[349px] rounded-[8px] border-1 border-[#CBCBCB]">
      <div className="left-[131px] mx-auto my-[54px] h-[88px] w-[88px] rounded-[72px] border-1 border-[#0182FE] bg-gradient-to-b from-[#0182FE] to-[##DFEFFF]">
        <img src={icon} className="mx-[20px] my-[20px]" />
      </div>
      <div className="">
        <h5 className="text-[20px] leading-[140%] font-[700px] text-black">
          {title}
        </h5>
      </div>
      <div>
        <p className="text-secondary mx-[55px] mt-[6px] text-[14px] leading-[180%] font-[300px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
