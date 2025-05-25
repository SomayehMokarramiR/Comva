import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div className="flex justify-center">
      <ul className="flex list-none gap-4">
        <li>
          <NavLink to="/">Landing</NavLink>
        </li>
        <li>
          <NavLink to="shop">Shop</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
