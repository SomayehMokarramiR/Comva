function Item({ price, image, title, description }) {
  return (
    <div className="flex h-auto w-[175px] flex-col gap-2 rounded-[8px] border-[1px] border-[#CBCBCB]">
      <div className="flex h-[175px] w-[175px] shrink-0 items-center justify-center border-b-[1px] border-[#CBCBCB]">
        <img
          src={image}
          className="m-[15px] h-[146] w-[146px] object-cover"
          alt="picture"
        />
      </div>
      <div className="mt-4 flex w-full shrink-0 flex-col items-start gap-1 pr-4 text-right">
        <div className="flex w-full items-center justify-start whitespace-nowrap">
          <p className="text-right text-[12px] leading-[180%]">{title}</p>
        </div>
        <div className="mb-4 max-h-[48px] overflow-hidden text-right">
          <p
            className="block text-right text-[12px] leading-[180%]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </p>
        </div>
        <div className="flex h-[24px] w-full items-center justify-start pb-4">
          <p className="text-right text-[14px] leading-[180%] text-[#00966D]">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
