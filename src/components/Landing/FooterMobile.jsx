import Logo from "./Header/Logo";
import Menu from "./HeaderMobile/Menu";

function FooterMobile() {
  return (
    <footer>
      <div className="mx-auto">
        <div className="mt-[32px] flex-col">
          <div className="mx-auto">
            <Logo />
          </div>
          <div className="flex gap-8">
            <ul className="flex list-none gap-8 text-xl">
              <li>آپدیت ها</li>
              <li> سوالات متداول</li>
              <li> تماس با ما </li>
            </ul>
          </div>
          <div className="flex flex-nowrap justify-end gap-2">
            <img src="/src/assets/image/Frame 14.png" className="h-10 w-10" />
            <img src="/src/assets/image/Frame 15.png" className="h-10 w-10" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterMobile;
