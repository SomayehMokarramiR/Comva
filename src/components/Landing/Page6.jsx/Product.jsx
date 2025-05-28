function Product({ image, title, price }) {
  return (
    <div className="flex h-[131px] w-[366px] gap-2 rounded-[8px] border-[1px] border-[#CBCBCB]">
      <div className="flex h-[131px] w-[131px] shrink-0 items-center justify-center">
        <img
          src={image}
          className="m-[11.23px] h-[109.9px] w-[109.9px] object-cover"
        />
      </div>
      <div className="mt-4 flex w-full flex-col items-start gap-4 text-right">
        <div className="flex h-[47px] w-full items-center justify-start">
          <p className="text-right text-[12px] leading-[180%]">{title}</p>
        </div>
        <div className="flex h-[24px] w-full items-center justify-start">
          <p className="text-right text-[12px] leading-[180%] text-[#00966D]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
