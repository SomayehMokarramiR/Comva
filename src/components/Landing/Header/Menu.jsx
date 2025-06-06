import ButtonBig from "../../../ui/ButtonBig";

function Menu() {
  return (
    <div className="flex gap-8">
      {/* pl-[333px] */}
      <ul className="hidden list-none gap-8 text-xl md:flex">
        <li>آپدیت ها</li>
        <li> سوالات متداول</li>
        <li> تماس با ما </li>
      </ul>
      <button className="relative bottom-4 rounded-2xl border-1 border-[#0182FE] bg-white px-8 py-4 text-[#0182FE]">
        ورود یا ثبت نام
      </button>
    </div>
  );
}

export default Menu;
