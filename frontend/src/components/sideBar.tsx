import sideBarItems from "../data/dashboard";
import { NavLink } from "react-router-dom";



export default function SideBar() {
  const logout = () => console.log("logout");

  return (
    <div className="bg-black h-full px-4 py-14 w-[280px]">
      <ul className="flex flex-col gap-4 sticky top-[160px]">
        {sideBarItems.map(item => (
          <li>
            <NavLink to={item.link} className={({ isActive }) => 
              `inline-block w-full py-4 text-sm font-bold text-white text-center rounded-xl ${isActive && "bg-primary-500"} hover:bg-slate-900/30`
            }>{item.name}</NavLink>
          </li>
        ))}
        <li>
          <button className="w-full py-4 text-sm font-bold text-white text-center rounded-xl hover:bg-slate-900/30" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
