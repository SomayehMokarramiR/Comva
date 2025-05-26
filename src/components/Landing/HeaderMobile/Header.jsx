import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <header className="mt-[49px] flex justify-between">
      <Logo />
      <Menu />
    </header>
  );
}

export default Header;
