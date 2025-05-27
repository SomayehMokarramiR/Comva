import Logo from "./Header/Logo";
import Menu from "./HeaderMobile/Menu";

function FooterMobile() {
  return (
    <footer>
      <div className="mt-[32px] flex-col space-y-10 md:flex-row md:flex-nowrap md:justify-between md:space-y-0">
        <div className="mx-auto md:mx-0 md:flex md:flex-row-reverse md:flex-nowrap md:justify-end md:gap-8">
          <p className="hidden md:block md:text-[16px] md:leading-[180%]">
            کارت ساز - 1401
          </p>
          <Logo />
        </div>
        <div className="flex justify-center gap-8 md:hidden">
          <ul className="flex list-none justify-center gap-8 text-xl">
            <li>آپدیت ها</li>
            <li> سوالات متداول</li>
            <li> تماس با ما </li>
          </ul>
        </div>
        <div className="top:0 relative flex flex-nowrap justify-center gap-2 md:relative md:top-[-40px] md:justify-end">
          <img src="/src/assets/image/Frame 14.png" className="h-10 w-10" />
          <img src="/src/assets/image/Frame 15.png" className="h-10 w-10" />
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;
