import { Link } from "react-router-dom";

function AddressBox() {
  return (
    <div className="h-[120px] w-[366px] border-1 border-[#EDEDED] p-6">
      <div className="flex gap-2">
        <img src="/src/assets/image/shop.png" className="h-6 w-6" />
        <p className="text-[16px] leading-[180%] font-normal text-[#74787C] capitalize">
          آدرس دفتر مغازه
        </p>
      </div>
      <div>
        <p className="text-right text-[12px] leading-[180%] font-[300px] text-[#74787C] capitalize">
          تهران ؛ میدان ازادی ؛ بلوار استاد معین ؛ خیابان محمدی ؛ پلاک 14 واحد 2
          ؛ مغازه کارت ساز
        </p>
      </div>
      <div className="mt-[196px]">
        <p className="text-[18px] leading-[180%] font-[300px] text-black capitalize">
          قدرت گرفته از
          <Link to="Cartsaz.com" className="text-[#0182FE] underline">
            کارت ساز
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AddressBox;
