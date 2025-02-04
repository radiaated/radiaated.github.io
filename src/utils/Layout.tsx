import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-3 ">
        <NavBar />
      </div>
      <div className="p-6 col-span-12 lg:col-span-9 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
