function HeaderProduct() {
  return (
    <div className="relative w-screen">
      <div className="fixed right-0 left-0 container h-[152px] rounded-br-[16px] rounded-bl-[16px] bg-[#0182FE]">
        <div className="flex gap-4 px-8 py-7">
          <div className="h-[88px] w-[88px] rounded-[8px] border-1 border-[#CBCBCB]">
            <img src="/src/assets/image/Frame 32.png" alt="logo" />
          </div>
          <div className="mt-1 flex flex-col gap-1 text-white">
            <h5 className="text-[20px]">فروشگاه کارت ساز</h5>
            <p className="text-[12px">فروش پیرهن ، کفش و البسه</p>
          </div>
        </div>
      </div>
      <div className="fixed top-[160px] flex h-[48px] w-[366px] items-center justify-between rounded-[8px] border-1 border-[#CBCBCB] bg-white px-14">
        <div className="h-[24px] w-[63px] text-nowrap">
          <p>محصولات</p>
        </div>
        <div className="h-6 border-1 border-dashed border-[#CBCBCB]"></div>
        <div className="h-[24px] w-[63px] text-nowrap">
          <p>تماس با ما</p>
        </div>
      </div>
    </div>
  );
}
export default HeaderProduct;
