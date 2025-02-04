import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[25%] static top-0 left-0 md:fixed md:border-r md:border-stone-600">
        <NavBar />
      </div>
      <div className="hidden md:block md:w-[25%]"></div>
      <div className="w-full md:w-[75%] p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
