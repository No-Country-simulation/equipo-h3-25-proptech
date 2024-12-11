import {Outlet} from "react-router-dom";
import SideBar from "./sideBar";

export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-[min-content_1fr]">
      <SideBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
