function PriceBox() {
  return (
    <div className="flex justify-between">
      <div lassName="lesding-[140%] flex h-[28px] w-[123px] items-center text-[16px]">
        <p className="text-rigth font-[500] text-black">قیمت</p>
      </div>
      <div className="lesding-[100%] flex h-[28px] w-[123px] items-center text-[20px] text-[#00966D]">
        <h5 className="text-rigth font-bold">256000 تومان</h5>
      </div>
    </div>
  );
}

export default PriceBox;
