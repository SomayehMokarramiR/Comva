function Logo() {
  return (
    // <div className="flex">
    //   <div className="ml-8 h-[48.2px] w-[46.87px]">
    //     <img src="/src/assets/image/image 2 (Traced).png" />
    //   </div>
    //   <div className="flex flex-col">
    //     <p className="text-[19.75px] font-bold">کارت ساز</p>
    //     <p className="text-[9.94px] uppercase">
    //       <span className="text-[#0182FE]">cartsaz</span>
    //       <span>.com</span>
    //     </p>
    //   </div>
    // </div>
    <div className="flex justify-center">
      <div className="ml-2 h-[48.2px] w-[46.87px] md:ml-8">
        <img src="/src/assets/image/image 2 (Traced).png" />
      </div>
      <div className="flex flex-col">
        <p className="text-[19.75px] font-bold">کارت ساز</p>
        <p className="text-[9.94px] uppercase">
          <span className="text-[#0182FE]">cartsaz</span>
          <span>.com</span>
        </p>
      </div>
    </div>
  );
}

export default Logo;
