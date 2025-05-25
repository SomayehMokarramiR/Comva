import Logo from "./Header/Logo";

function Footer() {
  return (
    <footer>
      <div className="mt-[32px] flex flex-nowrap justify-between">
        <div className="flex flex-row-reverse flex-nowrap justify-end gap-8">
          <p className="text-[16px] leading-[180%]">کارت ساز - 1401</p>
          <Logo />
        </div>
        <div className="flex flex-nowrap justify-end gap-2">
          <img src="/src/assets/image/Frame 14.png" className="h-10 w-10" />
          <img src="/src/assets/image/Frame 15.png" className="h-10 w-10" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
