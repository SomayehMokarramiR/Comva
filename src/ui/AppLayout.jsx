import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <div className="container mx-auto justify-items-center">
        {/* <AppNav /> */}
        <main className="mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
